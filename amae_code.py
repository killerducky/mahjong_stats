import requests, json, time
import matplotlib.pyplot as plt
#colab
#!pip -q -q -q install japanize-matplotlib
import japanize_matplotlib
from tqdm import tqdm
import pickle
import sys
import os
import statistics
import math
from datetime import datetime, timezone
import argparse
import traceback
#colab
#from google.colab import output
#output.no_vertical_scroll()

# @markdown # Mahjong Soul Expected Score per round
# @markdown Based on [Original collab script](https://colab.research.google.com/drive/1puwnp-_k3aHV8trHYInX9HGsBgnJ-hYY#scrollTo=Uoyjy8mCJ21c)
# @markdown
# @markdown Graphs a moving average of your expected score per round played.
# @markdown There are several averages that respond more or less quickly.
# @markdown
# @markdown Averages for Gold room and Jade room are kept separately because
# @markdown the player pools are different.
# @markdown
# @markdown Only 4 player is supported.
# @markdown
# @markdown Usage: put your username (and idx if needed) and click the run cell button.
# @markdown
# @markdown ---

def notebook_params():
    name = '' # @param {type:"string"}
    idx = 0 # @param {type:"integer"}
    # @markdown All scores normalized to this rank. See below for more details
    norm_rank = "M1" # @param ["M1", "M2", "M3", "S1", "S2", "S3"] {type:"string"}
    # To reduce clutter, you can filter which game types are shown
    jade_south = True # @param {type:"boolean"}
    jade_east = True # @param {type:"boolean"}
    gold_south = True # @param {type:"boolean"}
    gold_east = True # @param {type:"boolean"}
    # @markdown Exclude game types played less than X% of the time
    min_percent_game_type = 10 # @param {type:"number"}
    max_games = 9999 # @param {type:"number"}
    args = [
        'amae_code.py', # fake filename
        '-n', name,
        '-i', str(idx),
        '-r', norm_rank,
        '--min_percent_game_type', str(min_percent_game_type),
        '--max_games', str(max_games),
    ]
    if not jade_south: args.append('--no_js')
    if not jade_east: args.append('--no_je')
    if not gold_south: args.append('--no_gs')
    if not gold_east: args.append('--no_ge')
    return args

# Some constants that might get added to parser:
window_size = 400
左端 = 0
右端 = 100000

# @markdown ---
# @markdown ## The Blue lines and Normalization
# @markdown The horizontal blue lines represent approximately what level you must
# @markdown play to be a breakeven player of a given rank.
# @markdown It takes all 4th place results and recalculates the penalty as if you were (by default) M1.
# @markdown So if your expected score is near 0, you are near a breakeven M1.
# @markdown
# @markdown The blue lines take the difference in 4th place penalty between M1
# @markdown and the other ranks and divide by 4.
# @markdown
# @markdown * M1 4th = -165, S3 4th = -240
# @markdown * (240-165)/4 = 18.75
# @markdown * A player with S3 skill playing as M1 will score 18.75 points on average
# @markdown * This is where the S3 blue line is drawn
# @markdown * Typically an overestimate because strong players have less than 25% 4ths
# @markdown
# @markdown
# @markdown East games gain/lose ~50% less points compared to South games.
# @markdown The blue lines will be drawn according to the game type with the most data.

def is_interactive():
    rstk = traceback.extract_stack(limit=1)[0]
    return rstk[0].startswith("<ipython")

if is_interactive():
    sys.argv = notebook_params()

parser = argparse.ArgumentParser(description="MJS game history graphs")
parser.add_argument('-n', '--name', help='Username', required=True)
parser.add_argument('-i', '--index', help='Index for multiples of the same Username', type=int, default=0)
# For faster development only: use results from file instead of asking server
parser.add_argument('-c', '--cache', help='Use cached data', action='store_true')
parser.add_argument('-r', '--rank', help='Rank to normalize to e.g. (傑1/豪2/聖3//E3/M2/S1)', default='豪1')
parser.add_argument('-g', '--max_games', help='Max games to include', type=int, default='9999')
parser.add_argument('--no_js', action='store_true')
parser.add_argument('--no_je', action='store_true')
parser.add_argument('--no_gs', action='store_true')
parser.add_argument('--no_ge', action='store_true')
parser.add_argument('--min_percent_game_type', default=10, type=float)
args = parser.parse_args()

pname = args.name
pidx = args.index
update_cached_data = not args.cache
normalize_to_rank = args.rank
class DefaultKeyDict(dict):
    def __missing__(self, key):
        return key
jp2en = DefaultKeyDict({
    '士':'?', '傑':'E', '豪':'M', '聖':'S', '天':'C', '魂':'?',
    '四麻':'4P', '三麻':'3P',
})
en2jp = DefaultKeyDict({value: key for key, value in jp2en.items()})
normalize_to_rank = jp2en[normalize_to_rank[0]] + normalize_to_rank[1:]

# Only 四麻 supported
モード選択 = '\u56DB\u9EBB' # ['四麻', '三麻']
save_filename = "amae.pickle"
cached_data_dirty = False
cached_data = {}
if not os.path.exists("media"):
    os.mkdir("media")
if os.path.exists(save_filename):
    with open(save_filename, "rb") as fp: cached_data = pickle.load(fp)

def exponential_moving_average(data, half_life):
    alpha = 1 - 0.5 ** (1 / half_life)
    ema = [sum(data[:half_life]) / min(half_life, len(data))]  # Initial SMA for the first half_life values
    for i in range(1, len(data)):
        ema.append(alpha * data[i] + (1 - alpha) * ema[i - 1])
    return ema

def calcMovingAvg(data, window_size):
    filtered = [v for v in data if v is not None]
    if len(filtered) == 0:
        return [None] * len(data)
    averaged = exponential_moving_average(filtered, window_size)
    final_result = []
    averaged_iter = iter(averaged)
    for value in data:
        if value is None:
            final_result.append(None)
        else:
            final_result.append(next(averaged_iter))
    return(final_result)

if モード選択 == '四麻':
    s0 = 'https://5-data.amae-koromo.com/api/v2/pl4/'
    # 12 = 4p Hanchan Jade room, 9 = 4p Hanchan Gold room
    # 11 = 4p Tonpuusen Jade room, 8 = 4p Tonpuusent Gold room
    mode = '16,15,12,11,9,8'
    Color = {16: 'r', 15: 'r', 12: 'g', 11: 'g', 9: 'y', 8: 'y'}
    start_level = 10301
elif モード選択 == '三麻':
    s0 = 'https://5-data.amae-koromo.com/api/v2/pl3/'
    mode = '26,24,22,25,23,21'
    Color = {26: 'r', 25: 'r', 24: 'g', 23: 'g', 22: 'y', 21: 'y'}
    start_level = 20301

if update_cached_data or not pname in cached_data:
    if not cached_data_dirty:
        print("requesting from server")
    cached_data_dirty = True
    update_cached_data = True
    cached_data[pname] = {}
    cached_data[pname]['pdata'] = requests.get(f'{s0}search_player/{pname}').json()[pidx]
    time.sleep(0.01)
pdata = cached_data[pname]['pdata']
pid = pdata['id']

if update_cached_data:
    X = []
    start = pdata['latest_timestamp']
    for i in range(20):
        s1 = f'{s0}player_records/{pid}/{start}999/1262304000000?limit=500&mode={mode}&descending=true&tag='
        games = requests.get(s1).json()
        time.sleep(0.01)
        length = len(games)
        if length == 0:
            break
        start = games[-1]['startTime'] - 1
        X += games
        if length < 500:
            break
    cached_data[pname]['X'] = X
X = cached_data[pname]['X']

#d = ['士', '傑', '豪', '聖', '天', '魂']
d = ['?', 'E', 'M', 'S', 'C', '?']
p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45}
level_dan = lambda level: f'{d[level // 100 % 100 - 2]}{level % 100}'
level_pt_base = lambda level: 5000 if level // 100 % 100 >= 6 else p[level % 1000] * 100
last_place_penalty = {
    'S': {'E1':-80, 'E2':-100, 'E3':-120, 'M1':-165, 'M2':-180, 'M3':-195, 'S1':-210, 'S2':-225, 'S3':-240},
    'E':  {'E1':-40, 'E2':-50, 'E3':-60, 'M1':-80, 'M2':-90, 'M3':-100, 'S1':-110, 'S2':-120, 'S3':-130}
}
rank_bonus = {
    'Throne S': [120, 60, 0, 0],
    'Throne E': [60, 30, 0, 0],
    'Jade S': [110, 55, 0, 0],
    'Jade E': [55, 30, 0, 0],
    'Gold S': [80, 40, 0, 0],
    'Gold E': [40, 20, 0, 0],
}
copper_rate = {
    'Throne S' : 280,
    'Throne E' : 200,
    'Jade S' : 280,
    'Jade E' : 200,
    'Gold S' : 140,
    'Gold E' : 100,
}
last_place_normalize = {}
for type in last_place_penalty.keys():
    # Add this amount to the points iff we were 4th to normalize it to normalize_to_rank
    last_place_normalize[type] = {k: last_place_penalty[type][normalize_to_rank] - v for k, v in last_place_penalty[type].items()}

#{'_id': '8hrogmr7Bst', 'modeId': 12, 'uuid': '231203-47ff6d0f-f4c0-4f8f-9205-a714768c7e37', 'startTime': 1701582266, 'endTime': 1701584735,
# 'players': [{'accountId': 68010342, 'nickname': 'mizuki11', 'level': 10402, 'score': 13200, 'gradingScore': -206},
#             {'accountId': 120517763, 'nickname': 'KillerDucky', 'level': 10401, 'score': 20300, 'gradingScore': -9},
#             {'accountId': 102431826, 'nickname': 'とみー5327', 'level': 10403, 'score': 29900, 'gradingScore': 65},
#             {'accountId': 72871121, 'nickname': 'kikuminn', 'level': 10401, 'score': 36600, 'gradingScore': 137}]}

# Convert level to some scalar value that represents how hard they are to play against
# M1=3, S1=6, S3=8
# So S1 is roughly twice as hard as a M1
def p_skill_score(level_int):
    # E=-1, M=0, S=1
    score = level_int // 100 % 100 - 4
    # E=-3, M=0, S=3
    score = score*3
    # E1=-3, E2=-2, E3=-1, M1=0, M2=1, M3=2, S1=3, S2=4, S3=5
    score += level_int % 100 - 1
    return score

modeId2RoomTypeFull = {16: 'Throne S', 15: 'Throne E', 12:'Jade S', 11:'Jade E', 9:'Gold S', 8:'Gold E'} 
modeId2RoomColor = {16: 'T', 15: 'T', 12:'J', 11:'J', 9:'G', 8:'G'} # Gold or Jade
modeId2RoomLength = {16: 'S', 15: 'E', 12:'S', 11:'E', 9:'S', 8:'E'} # Hanchan (South) or Tonpuusen (East)
tableDifficultyBins = {}

def addGradingScoresNorm(game):
    p = game['players'][game['orig_idx']]
    game['gradingScoresNorm'] = None
    if game['modeId'] in modeId2RoomColor:
        game['gradingScoresNorm'] = p['gradingScore']
        game['score'] = p['score'] - 25000
        if game['placement'] == 4:
            game['gradingScoresNorm'] += last_place_normalize[modeId2RoomLength[game['modeId']]][level_dan(p['level'])]

def addCopper(game):
    p = game['players'][game['orig_idx']]
    game['copper'] = game['gradingScoresNorm']
    game['copper'] = p['gradingScore'] - rank_bonus[modeId2RoomTypeFull[game['modeId']]][game['placement']-1]
    if game['placement'] == 4:
        game['copper'] -= last_place_penalty[modeId2RoomLength[game['modeId']]][level_dan(p['level'])]
    game['copper'] -= 10 # Entry Fee is 10X the copper rate
    game['copper'] *= copper_rate[modeId2RoomTypeFull[game['modeId']]]

def addTableDifficulty(game):
    p = game['players'][game['orig_idx']]
    game['tableDifficulty'] = 0
    if game['modeId'] in modeId2RoomColor and modeId2RoomColor[game['modeId']] == 'J':
        for player in game['players']:
            if player['accountId'] == pid: continue
            game['tableDifficulty'] += p_skill_score(player['level'])
        # Compress to fewer bins
        game['tableDifficulty'] = min(game['tableDifficulty']//5, 1)
        if game['tableDifficulty'] not in tableDifficultyBins:
            tableDifficultyBins[game['tableDifficulty']] = {'sum':0, 'count':0}
        tableDifficultyBins[game['tableDifficulty']]['sum'] += p['gradingScore']
        tableDifficultyBins[game['tableDifficulty']]['count'] += 1

for game in reversed(X):
    game['orig_idx'] = game['players'].index(next(player for player in game['players'] if player['accountId'] == pid))
    players_sorted = sorted(game['players'], key=lambda x: x['gradingScore'])
    game['placement'] = 4 - players_sorted.index(next(player for player in players_sorted if player['accountId'] == pid))
    addGradingScoresNorm(game)
    addCopper(game)
    addTableDifficulty(game)

#for k,v in sorted(tableDifficultyBins.items()):
#    v['avg'] = v['sum']/v['count']
#plt.figure()
#plt.scatter(sorted(tableDifficultyBins.keys()), [v['avg'] for k,v in sorted(tableDifficultyBins.items())])
#plt.errorbar(sorted(tableDifficultyBins.keys()), [v['avg'] for k,v in sorted(tableDifficultyBins.items())], 
#             yerr=[2*math.sqrt(13000/v['count']) for k,v in sorted(tableDifficultyBins.items())])
#plt.axhline(y=0, alpha=1, linewidth=0.5)
#plt.show()

# Plotting
x_start = max(0, len(X) - args.max_games)
plt.figure(figsize=(15, 4.5))
mostCommonRoomType = {'t':None, 'count':0}
attrstr = 'gradingScoresNorm'
#attrstr = 'copper'
#attrstr = 'placement'
#attrstr = 'score'
for roomTypeInt, roomTypeStr in modeId2RoomTypeFull.items():
    attr = list(reversed([None if game['modeId']!=roomTypeInt else game[attrstr] for game in X]))
    for window_size_div in [1,2,4]:
        # Don't graph if player has very few of this type, or user filtered
        count = len([element for element in attr if element is not None])
        if count/len(attr) <= args.min_percent_game_type/100.0: continue
        if roomTypeStr == 'Jade S' and args.no_js: continue
        if roomTypeStr == 'Jade E' and args.no_je: continue
        if roomTypeStr == 'Gold S' and args.no_gs: continue
        if roomTypeStr == 'Gold E' and args.no_ge: continue
        if count > mostCommonRoomType['count']:
            mostCommonRoomType = {'t':roomTypeInt, 'count':count}
        ema = calcMovingAvg(attr, window_size//window_size_div)
        plt.plot(range(x_start, len(ema)), ema[x_start:], label=f'{roomTypeStr} ({window_size//window_size_div} game half life)')
plt.legend()
plt.title(f'Expected Score per round assuming {normalize_to_rank} ({pname} {pidx})')
plt.xlabel('Game Number')
plt.xlim(x_start, len(X))
plt.ylabel('Expected Score')
plt.tick_params(labelright=True)
if attrstr == 'gradingScoresNorm':
    for k,v in last_place_normalize[modeId2RoomLength[mostCommonRoomType['t']]].items():
        # Experts cannot play in both Jade and Gold, making it hard to draw a line for this
        if k[0] == 'E': continue
        plt.axhline(y=v/4.0, alpha=1, linewidth=0.5)
        plt.text(x_start, v/4.0, f'{k} {modeId2RoomLength[mostCommonRoomType["t"]]}', color='blue', verticalalignment='bottom')
#ax2 = plt.twinx()
#ax2.plot(range(len(gradingScoresAvg)), gradingScoresAvg, label=f'Moving Average ({window_size} games)', color='orange')
#ax2.set_ylabel('score', color='orange')
plt.savefig(f'media/Expected_Score_{pname}.png')

def blank_graph():
    # blank figure for spacing
    f,ax = plt.subplots()
    f.set_visible(False)
    f.set_figheight(0.25)
    f.set_figwidth(0.01)

def graph_rank_point_trend(stack):
    pre_level = start_level
    fig, ax1 = plt.subplots(facecolor='w', figsize=(15, 5))
    左端 = x_start
    if 左端 == 0:
      plt.text(3, 100, f'E\n1', fontsize=12)
    pre_pt, pt, base, sum_base = 600, 600, 600, 600
    pre_base, pre_sum_base = None, None
    pre_i = 0
    min_y = 0
    max_y = 1200
    for i, game in enumerate(X[::-1]):
      for data in game['players']:
        if data['accountId'] == pid:
          level = data['level']
          s = level_dan(level)
          if pre_level != level:
            pre_base = base
            pre_sum_base = sum_base
            base = level_pt_base(level)
            if stack: 
                sum_base += pre_base if (base > pre_base) else -base
                max_y = max(max_y, sum_base+base)
                min_y = min(min_y, sum_base-base)
            else:
                sum_base = base
                max_y = max(max_y, base*2)
                min_y = 0 # never changes in this mode
            pt = pre_pt = base
            if 左端 <= i <= 右端:
              plt.text(i+3, sum_base-base+100, f'{s[0]}\n{s[1:]}', fontsize=12)
              plt.vlines(i, sum_base-base, sum_base+base, color='k')
              plt.vlines(i, pre_sum_base-pre_base, pre_sum_base+pre_base, color='k')
            if stack: # Only print once. Randomly pick stack mode to do it
                print(f'Game #{i} Previous Length:', i-pre_i, datetime.fromtimestamp(game['startTime']).strftime("%Y-%m-%d"), s)
            pre_i = i
          pt += data['gradingScore'] * 5 if level // 100 % 100 >= 7 else data['gradingScore']
          if 左端 <= i <= 右端:
            plt.plot([i, i+1], [pre_pt+sum_base-base, pt+sum_base-base], color='k', lw=1.5)
            plt.fill_between([i, i+1], [pre_pt+sum_base-base, pt+sum_base-base], [sum_base-base, sum_base-base], color=Color[game['modeId']], alpha=0.05)
            plt.plot([i, i+1], [-base+sum_base, -base+sum_base], color='k', lw=1.5)  # bottom
            plt.plot([i, i+1], [0+sum_base, 0+sum_base], color='k', lw=1.5)          # middle
            plt.plot([i, i+1], [base+sum_base, base+sum_base], color='k', lw=1.5)    # top
          pre_level, pre_pt = level, pt
    plt.title(f'Rank Points Trend [{jp2en[モード選択]}] {pname}[{pidx}]', fontsize=20)
    plt.xlabel('Games', fontsize=20); plt.ylabel('Rank Points', fontsize=20)
    plt.xticks(fontsize=10); plt.yticks([i*1000 for i in range(-11,11)], fontsize=10)
    ax1.set_xlim([左端, min(右端, i+1)]); ax1.set_ylim([min_y, max_y+100])
    ax2 = ax1.twinx()
    ax2.tick_params(axis='y', right=True, labelright=True)
    if stack:
        ax2.set_yticks([i*1000+sum_base-base for i in range(-11,11)], [i*1000 for i in range(-11,11)])
        ax2.set_ylim([min_y, max_y+100])
    else:
        ax2.set_yticks([i*1000 for i in range(11)])
        ax2.set_ylim([min_y, max_y+100])
    if stack:
        plt.savefig(f'media/Rank_Progress_{pname}_stacked.png')
    else:
        plt.savefig(f'media/Rank_Progress_{pname}_unstacked.png')

blank_graph()
graph_rank_point_trend(True)
blank_graph()
graph_rank_point_trend(False)

if cached_data_dirty:
    with open(save_filename, "wb") as fp: pickle.dump(cached_data, fp)

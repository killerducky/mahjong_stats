import requests, json, time
import matplotlib.pyplot as plt
#!pip -q -q -q install japanize-matplotlib
import japanize_matplotlib
from tqdm import tqdm
import pickle
import sys
import os
import statistics
from datetime import datetime, timezone
import argparse

parser = argparse.ArgumentParser(description="MJS game history graphs")
parser.add_argument('-n', '--name', help='Username', required=True)
parser.add_argument('-i', '--index', help='Index for multiples of the same Username', type=int, default=0)
parser.add_argument('-c', '--cache', help='Use cached data', action='store_true')
parser.add_argument('-r', '--rank_to_normalize', help='Rank to normalize to e.g. (傑1/豪2/聖3//E3/M2/S1)', default='豪1')
args = parser.parse_args()
pname = args.name
pidx = args.index #@param {type:'integer'}
update_cached_data = not args.cache
normalize_to_rank = args.rank_to_normalize
if normalize_to_rank[0] == "E": normalize_to_rank = "傑" + normalize_to_rank[1:]
if normalize_to_rank[0] == "M": normalize_to_rank = "豪" + normalize_to_rank[1:]
if normalize_to_rank[0] == "S": normalize_to_rank = "聖" + normalize_to_rank[1:]

#@markdown ####以下にプレイヤー名を入力し、左部の再生ボタン(▷)を押してください。
#@markdown ####モード選択で四麻と三麻を切り替えることができます。
モード選択 = '\u56DB\u9EBB' # @param ['四麻', '三麻']
#@markdown ####同一のプレイヤー名のIDが複数存在しており、別IDに切り替える場合は次の値を1増やしてください。
#print(f'プレイヤー名：{プレイヤー名}')
save_filename = "amae_pickle"
cached_data_dirty = False
cached_data = {}
if os.path.exists(save_filename):
    with open(save_filename, "rb") as fp: cached_data = pickle.load(fp)

#for k,v in cached_data.items():
#    print(k)
#    for s2 in v.keys():
#        print(s2)
#sys.exit()

def exponential_moving_average(data, half_life):
    alpha = 1 - 0.5 ** (1 / half_life)
    ema = [sum(data[:half_life]) / half_life]  # Initial SMA for the first half_life values
    for i in range(1, len(data)):
        ema.append(alpha * data[i] + (1 - alpha) * ema[i - 1])
    return ema

def calcMovingAvg(data, window_size):
    filtered = [v for v in data if v is not None]
    averaged = exponential_moving_average(filtered, window_size)

    # prepad with None for averages that have less values than original
    #print(len(data), len(filtered), len(averaged), window_size)
    #averaged = [None]*(len(filtered)-len(averaged)) + averaged

    final_result = []
    non_null_count = 0
    for i,v in enumerate(data):
        if v == None:
            final_result.append(None)
        else:
            final_result.append(averaged[non_null_count])
            non_null_count += 1
    return(final_result)

#print(calcMovingAvg(list([1]*20+[10]*20), 10))
#print(calcMovingAvg(list([100]+[1]*20+[10]*20), 10))
#print(calcMovingAvg(list([100]+[1]*20+[10]*20), 20))
#print(calcMovingAvg(list(range(20))+[None]*5+list(range(20)), 5))
#sys.exit()

if モード選択 == '四麻':
    s0 = 'https://5-data.amae-koromo.com/api/v2/pl4/'
    # 12 = 4p South Jade room, 9 = 4p South Gold room
    mode = '16,15,12,11,9,8'
    Color = {16: 'r', 15: 'r', 12: 'g', 11: 'g', 9: 'y', 8: 'y'}
    pre_level = 10301
elif モード選択 == '三麻':
    s0 = 'https://5-data.amae-koromo.com/api/v2/pl3/'
    mode = '26,24,22,25,23,21'
    Color = {26: 'r', 25: 'r', 24: 'g', 23: 'g', 22: 'y', 21: 'y'}
    pre_level = 20301

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
        s1 = f'{s0}player_records/{pid}/{start}/1262304000000?limit=500&mode={mode}&descending=true&tag='
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

# ??, expert, master, saint, celestial, ??  (novice? adept?)
d = ['士', '傑', '豪', '聖', '天', '魂']
p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45}
level_dan = lambda level: f'{d[level // 100 % 100 - 2]}{level % 100}'
level_pt_base = lambda level: 5000 if level // 100 % 100 >= 6 else p[level % 1000] * 100
last_place_penalty = {'傑1':-80, '傑2':-100, '傑3':-120, '豪1':-165, '豪2':-180, '豪3':-195, '聖1':-210, '聖2':-225, '聖3':-240}
# Add this amount to the points iff we were 4th to normalize it to normalize_to_rank
last_place_normalize = {k: last_place_penalty[normalize_to_rank] - v for k, v in last_place_penalty.items()}

#print(X[0])
#sys.exit()
#{'_id': '8hrogmr7Bst', 'modeId': 12, 'uuid': '231203-47ff6d0f-f4c0-4f8f-9205-a714768c7e37', 'startTime': 1701582266, 'endTime': 1701584735, 
# 'players': [{'accountId': 68010342, 'nickname': 'mizuki11', 'level': 10402, 'score': 13200, 'gradingScore': -206}, 
#             {'accountId': 120517763, 'nickname': 'KillerDucky', 'level': 10401, 'score': 20300, 'gradingScore': -9}, 
#             {'accountId': 102431826, 'nickname': 'とみー5327', 'level': 10403, 'score': 29900, 'gradingScore': 65}, 
#             {'accountId': 72871121, 'nickname': 'kikuminn', 'level': 10401, 'score': 36600, 'gradingScore': 137}]}

window_size = 400
placements = []
gradingScoresNorm = {9:[], 12:[]}
for game in reversed(X):
    players_sorted = sorted(game['players'], key=lambda x: x['gradingScore'])
    idx = players_sorted.index(next(player for player in players_sorted if player['accountId'] == pid))
    place = 4 - idx
    game['placement'] = place
    placements.append(game['placement'])
    level = level_dan(players_sorted[idx]['level'])
    for v in gradingScoresNorm.values():
        v.append(None)
    if game['modeId']==12 or game['modeId']==9: 
        gradingScoresNorm[game['modeId']][-1] = players_sorted[idx]['gradingScore']
        if place == 4:
            gradingScoresNorm[game['modeId']][-1] += last_place_normalize[level]

# Plotting
plt.figure(figsize=(15, 4.5))
for window_size_div in [1,2,4]:
    tmp = calcMovingAvg(gradingScoresNorm[12], window_size//window_size_div)
    plt.plot(range(len(tmp)), tmp, label=f'Jade ({window_size//window_size_div} games)')
for window_size_div in [1,2,4]:
    tmp = calcMovingAvg(gradingScoresNorm[9], window_size//window_size_div)
    plt.plot(range(len(tmp)), tmp, label=f'Gold ({window_size//window_size_div} games)')
plt.legend()
plt.title(f'Expected Score assuming {normalize_to_rank} ({pname})')
plt.xlabel('Game Number')
plt.xlim(0, len(gradingScoresNorm[12]))
plt.ylabel('Expected Score')
plt.tick_params(labelright=True)
for k,v in last_place_normalize.items():
   if k[0] == '傑': continue
   plt.axhline(y=v/4.0, alpha=1, linewidth=0.5)
   plt.text(0, v/4.0, f'{k}', color='blue', verticalalignment='bottom')
#ax2 = plt.twinx()
#ax2.plot(range(len(gradingScoresAvg)), gradingScoresAvg, label=f'Moving Average ({window_size} games)', color='orange')
#ax2.set_ylabel('score', color='orange')
plt.savefig(f'Expected_Score_{pname}.png')

#@markdown ####・細かい設定
#@markdown #####「左端」と「右端」を指定すると、何戦から何戦までを表示するかを指定できます。
#@markdown #####※右端は適当な大きな数を入れておくと最後まで表示します。
左端 = 0 # @param {type: 'integer'} # default = 0
右端 = 100000 # @param {type: 'integer'} # default = 1000000
#@markdown #####「上端」を指定すると、縦軸のポイント表示の上限を変更できます。
上端 = 3500 # @param {type: 'integer'} # default = 10000

plt.figure(facecolor='w', figsize=(15, 5))
if 左端 == 0:
  plt.text(3, 100, f'傑\n1', fontsize=12)
pre_pt, pt, base = 600, 600, 600
for i, game in enumerate(tqdm(X[::-1])):
  for data in game['players']:
    if data['accountId'] == pid:
      level = data['level']
      if pre_level != level:
        if 左端 <= i <= 右端:
          s = level_dan(level)
          plt.text(i+3, 100, f'{s[0]}\n{s[1:]}', fontsize=12)
          plt.vlines(i, 0, max(level_pt_base(level), level_pt_base(pre_level))*2, color='k')
        base = level_pt_base(level)
        pt = pre_pt = base
      pt += data['gradingScore'] * 5 if level // 100 % 100 >= 7 else data['gradingScore']
      if 左端 <= i <= 右端:
        plt.plot([i, i+1], [pre_pt, pt], color='k', lw=1.5)
        plt.fill_between([i, i+1], [pre_pt, pt], color=Color[game['modeId']], alpha=0.05)
        plt.plot([i, i+1], [base, base], color='k', lw=1.5)
        plt.plot([i, i+1], [base*2, base*2], color='k', lw=1.5)
      pre_level, pre_pt = level, pt
plt.title(f'Rank Points Trend[{モード選択}]({pname})', fontsize=20)
plt.xlabel('Games', fontsize=20); plt.ylabel('Rank Points', fontsize=20)
plt.xticks(fontsize=10); plt.yticks([i*1000 for i in range(11)], fontsize=10)
plt.xlim([左端, min(右端, i+1)]); plt.ylim([0, 上端+100])
plt.tick_params(labelright=True)
plt.savefig(f'Rank_Progress_{pname}.png')

if cached_data_dirty:
    with open(save_filename, "wb") as fp: pickle.dump(cached_data, fp)

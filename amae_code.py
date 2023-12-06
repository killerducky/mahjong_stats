import requests, json, time
import matplotlib.pyplot as plt
#!pip -q -q -q install japanize-matplotlib
import japanize_matplotlib
from tqdm import tqdm
import pickle
import sys
import os
import statistics

#@markdown ####以下にプレイヤー名を入力し、左部の再生ボタン(▷)を押してください。
#@markdown ####モード選択で四麻と三麻を切り替えることができます。
プレイヤー名 = 'KillerDucky' # @param {type:"string"}
モード選択 = '\u56DB\u9EBB' # @param ['四麻', '三麻']

save_filename = "amae_pickle"
fetch_data = False
if not os.path.exists(save_filename):
    fetch_data = True

def calcMovingAvg(data, window_size):
    filtered = [v for v in data if v is not None]
    filtered = [statistics.mean(filtered[i:i+window_size]) for i in range(len(filtered)-window_size+1)]
    final_result = []
    non_null_count = 0
    for i,v in enumerate(data):
        if v == None:
            final_result.append(None)
        else:
            if (non_null_count >= window_size-1):
                final_result.append(filtered[non_null_count-window_size])  
            else:
                final_result.append(None)
            non_null_count += 1
    return(final_result)

#print(calcMovingAvg(list(range(20))+list(range(20)), 5))
#print()
#print(calcMovingAvg(list(range(20))+[None]*5+list(range(20)), 5))
#sys.exit()


if fetch_data:
    if モード選択 == '四麻':
        s0 = 'https://5-data.amae-koromo.com/api/v2/pl4/'
        mode = '16,15,12,11,9,8'
        Color = {16: 'r', 15: 'r', 12: 'g', 11: 'g', 9: 'y', 8: 'y'}
        pre_level = 10301
    elif モード選択 == '三麻':
        s0 = 'https://5-data.amae-koromo.com/api/v2/pl3/'
        mode = '26,24,22,25,23,21'
        Color = {26: 'r', 25: 'r', 24: 'g', 23: 'g', 22: 'y', 21: 'y'}
        pre_level = 20301
    #@markdown ####同一のプレイヤー名のIDが複数存在しており、別IDに切り替える場合は次の値を1増やしてください。
    同名ID切替 = 0 #@param {type:'integer'}
    print(f'プレイヤー名：{プレイヤー名}')
    pdata = requests.get(f'{s0}search_player/{プレイヤー名}').json()[同名ID切替]
    pid =  pdata['id']
    start = pdata['latest_timestamp']
    X = []
    for i in range(100):
        s1 = f'{s0}player_records/{pid}/{start}999/1262304000000?limit=500&mode={mode}&descending=true&tag='
        games = requests.get(s1).json()
        length = len(games)
        if length == 0:
            break
        print(f'({i}) 読み込み試合数: {length}')
        start = games[-1]['startTime'] - 1
        X += games
        if length < 500:
            break
        time.sleep(0.01)

    with open(save_filename, "wb") as fp: pickle.dump([pdata, pid, Color, pre_level, X], fp)
else:
    print(f'load from {save_filename}')
    with open(save_filename, "rb") as fp: [pdata, pid, Color, pre_level, X] = pickle.load(fp)

d = ['士', '傑', '豪', '聖', '天', '魂']
p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45}
level_dan = lambda level: f'{d[level // 100 % 100 - 2]}{level % 100}'
level_pt_base = lambda level: 5000 if level // 100 % 100 >= 6 else p[level % 1000] * 100
last_place_penalty = {'豪1':-165, '豪2':-180, '豪3':-195, '聖1':-210, '聖2':-225, '聖3':-240}
normalize_to_rank = '豪1'
# Add this amount to the points iff we were 4th to normalize it to normalize_to_rank
last_place_normalize = {k: last_place_penalty[normalize_to_rank] - v for k, v in last_place_penalty.items()}

#print(X[0])
#sys.exit()
#{'_id': '8hrogmr7Bst', 'modeId': 12, 'uuid': '231203-47ff6d0f-f4c0-4f8f-9205-a714768c7e37', 'startTime': 1701582266, 'endTime': 1701584735, 
# 'players': [{'accountId': 68010342, 'nickname': 'mizuki11', 'level': 10402, 'score': 13200, 'gradingScore': -206}, 
#             {'accountId': 120517763, 'nickname': 'KillerDucky', 'level': 10401, 'score': 20300, 'gradingScore': -9}, 
#             {'accountId': 102431826, 'nickname': 'とみー5327', 'level': 10403, 'score': 29900, 'gradingScore': 65}, 
#             {'accountId': 72871121, 'nickname': 'kikuminn', 'level': 10401, 'score': 36600, 'gradingScore': 137}]}

window_size = 200
placements = []
gradingScoresNorm = []
for game in reversed(X):
    players_sorted = sorted(game['players'], key=lambda x: x['gradingScore'])
    idx = players_sorted.index(next(player for player in players_sorted if player['accountId'] == pid))
    place = 4 - idx
    game['placement'] = place
    placements.append(game['placement'])
    level = level_dan(players_sorted[idx]['level'])
    if game['modeId']!=12: 
        gradingScoresNorm.append(None)
    else:
        gradingScoresNorm.append(players_sorted[idx]['gradingScore'])
        if place == 4:
            gradingScoresNorm[-1] += last_place_normalize[level]
#for i in range(5):
#    print(i, X[i]['placement'], X[i]['modeId'])

moving_avg = calcMovingAvg(placements, window_size)
gradingScoresAvgNorm = calcMovingAvg(gradingScoresNorm, window_size)
gradingScoresAvgNorm2 = calcMovingAvg(gradingScoresNorm, window_size//2)
gradingScoresAvgNorm4 = calcMovingAvg(gradingScoresNorm, window_size//4)
gradingScoresAvgNorm[0] = 0
#print("a", len(calcMovingAvg(gradingScoresAvgNorm4, 1)))

#print(moving_avg)
#print(len(X), skipped, len(X)-skipped+1, len(X)-skipped-window_size, len(moving_avg))
#print(gradingScoresAvg)
#print(len(moving_avg), len(gradingScoresAvg))

print(len(gradingScoresNorm), len(gradingScoresAvgNorm), len(gradingScoresAvgNorm4))
# Plotting
plt.figure(figsize=(10, 4.5))
plt.plot(range(len(gradingScoresAvgNorm)), gradingScoresAvgNorm, label=f'Expected Score ({window_size} games)')
plt.plot(range(len(gradingScoresAvgNorm2)), gradingScoresAvgNorm2, label=f'Expected Score ({window_size//2} games)')
plt.plot(range(len(gradingScoresAvgNorm4)), gradingScoresAvgNorm4, label=f'Expected Score ({window_size//4} games)')
plt.legend()
plt.title(f'Expected Score (assuming {normalize_to_rank})')
plt.xlabel('Game Number')
plt.xlim(0, len(gradingScoresAvgNorm))
plt.ylabel('Expected Score')
for k,v in last_place_normalize.items():
   plt.axhline(y=v/4.0, alpha=1, linewidth=0.5)

#ax2 = plt.twinx()
#ax2.plot(range(len(gradingScoresAvg)), gradingScoresAvg, label=f'Moving Average ({window_size} games)', color='orange')
#ax2.set_ylabel('score', color='orange')
plt.savefig('Expected_Score.png')

#@markdown ####・細かい設定
#@markdown #####「左端」と「右端」を指定すると、何戦から何戦までを表示するかを指定できます。
#@markdown #####※右端は適当な大きな数を入れておくと最後まで表示します。
左端 = 0 # @param {type: 'integer'} # default = 0
右端 = 100000 # @param {type: 'integer'} # default = 1000000
#@markdown #####「上端」を指定すると、縦軸のポイント表示の上限を変更できます。
上端 = 3500 # @param {type: 'integer'} # default = 10000

plt.figure(facecolor='w', figsize=(16, 8))
if 左端 == 0:
  plt.text(3, 100, f'傑\n1', fontsize=15)
pre_pt, pt, base = 600, 600, 600
for i, game in enumerate(tqdm(X[::-1])):
  for data in game['players']:
    if data['accountId'] == pid:
      level = data['level']
      if pre_level != level:
        if 左端 <= i <= 右端:
          s = level_dan(level)
          plt.text(i+3, 100, f'{s[0]}\n{s[1:]}', fontsize=15)
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
plt.title(f'雀魂段位戦ポイント推移[{モード選択}]({プレイヤー名})', fontsize=30)
plt.xlabel('試合数', fontsize=20); plt.ylabel('ポイント', fontsize=20)
plt.xticks(fontsize=20); plt.yticks([i*1000 for i in range(11)], fontsize=20)
plt.xlim([左端, min(右端, i+1)]); plt.ylim([0, 上端+100])
plt.savefig('Rank_Progress.png')

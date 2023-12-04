import requests, json, time
import matplotlib.pyplot as plt
#!pip -q -q -q install japanize-matplotlib
import japanize_matplotlib
from tqdm import tqdm
import pickle
import sys

#@markdown ####以下にプレイヤー名を入力し、左部の再生ボタン(▷)を押してください。
#@markdown ####モード選択で四麻と三麻を切り替えることができます。
プレイヤー名 = 'KillerDucky' # @param {type:"string"}
モード選択 = '\u56DB\u9EBB' # @param ['四麻', '三麻']

fetch_data = False
#fetch_data = True

def calcMovingAvg(data, window_size):
   return [sum(data[i:i+window_size])/window_size for i in range(len(data)-window_size+1)]

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

    with open("amae_pickle", "wb") as fp: pickle.dump([pdata, pid, Color, pre_level, X], fp)
else:
    print(f'load from amae_pickle')
    with open("amae_pickle", "rb") as fp: [pdata, pid, Color, pre_level, X] = pickle.load(fp)

d = ['士', '傑', '豪', '聖', '天', '魂']
p = {301: 6, 302: 7, 303: 10, 401: 14, 402: 16, 403: 18, 501: 20, 502: 30, 503: 45}
level_dan = lambda level: f'{d[level // 100 % 100 - 2]}{level % 100}'
level_pt_base = lambda level: 5000 if level // 100 % 100 >= 6 else p[level % 1000] * 100

#print(X[0])
#sys.exit()
#{'_id': '8hrogmr7Bst', 'modeId': 12, 'uuid': '231203-47ff6d0f-f4c0-4f8f-9205-a714768c7e37', 'startTime': 1701582266, 'endTime': 1701584735, 
# 'players': [{'accountId': 68010342, 'nickname': 'mizuki11', 'level': 10402, 'score': 13200, 'gradingScore': -206}, 
#             {'accountId': 120517763, 'nickname': 'KillerDucky', 'level': 10401, 'score': 20300, 'gradingScore': -9}, 
#             {'accountId': 102431826, 'nickname': 'とみー5327', 'level': 10403, 'score': 29900, 'gradingScore': 65}, 
#             {'accountId': 72871121, 'nickname': 'kikuminn', 'level': 10401, 'score': 36600, 'gradingScore': 137}]}

skipped = 0
placements = []
gradingScores = []
for game in reversed(X):
    if game['modeId']!=12: 
       skipped +=1
       continue
    players_sorted = sorted(game['players'], key=lambda x: x['gradingScore'])
    idx = players_sorted.index(next(player for player in players_sorted if player['accountId'] == pid))
    game['placement'] = 4 - idx
    placements.append(game['placement'])
    gradingScores.append(players_sorted[idx]['gradingScore'])
for i in range(3):
    print(X[i]['placement'], X[i]['modeId'])

window_size = 100
moving_avg = calcMovingAvg(placements, window_size)
gradingScoresAvg = calcMovingAvg(gradingScores, window_size)
print(moving_avg)
print(len(X), skipped, len(X)-skipped+1, len(X)-skipped-window_size, len(moving_avg))
print(gradingScoresAvg)
print(len(moving_avg), len(gradingScoresAvg))

# Plotting
plt.figure(figsize=(10, 6))
plt.plot(range(len(moving_avg)), moving_avg, label=f'Moving Average ({window_size} periods)')
plt.plot(range(len(gradingScoresAvg)), gradingScoresAvg, label=f'Moving Average ({window_size} periods)')
plt.legend()
plt.title('Moving Average Example')
plt.xlabel('Date')
plt.ylabel('Value')
plt.show()

sys.exit()

#@markdown ####・細かい設定
#@markdown #####「左端」と「右端」を指定すると、何戦から何戦までを表示するかを指定できます。
#@markdown #####※右端は適当な大きな数を入れておくと最後まで表示します。
左端 = 0 # @param {type: 'integer'} # default = 0
右端 = 100000 # @param {type: 'integer'} # default = 1000000
#@markdown #####「上端」を指定すると、縦軸のポイント表示の上限を変更できます。
上端 = 5000 # @param {type: 'integer'} # default = 10000

plt.figure(facecolor='w', figsize=(16, 10))
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
plt.show()


#!/usr/bin/env python3
import re
import json
from operator import itemgetter
import pprint
import sys
import os
import math
import requests
import pickle
from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import argparse

def file_cached_func(args, filename, func):
    if args.usecache and os.path.exists(filename):
        with open(filename, "rb") as fp: data = pickle.load(fp)
    else:
        data = func()
        with open(filename, "wb") as fp: pickle.dump(data, fp)
    return data

def get_pred(driver, url):
    print(f'get {url}')
    response = requests.get(url)
    data = {}
    data['soup'] = BeautifulSoup(response.content, 'html.parser') #, encoding='UTF-8')
    data['W_tilemap'] = {
            "1m": 0,
            "2m": 1,
            "3m": 2,
            "4m": 3,
            "5m": 4,
            "5mr": 4.1,
            "6m": 5,
            "7m": 6,
            "8m": 7,
            "9m": 8,
            "1p": 9,
            "2p": 10,
            "3p": 11,
            "4p": 12,
            "5p": 13,
            "5pr": 13.1,
            "6p": 14,
            "7p": 15,
            "8p": 16,
            "9p": 17,
            "1s": 18,
            "2s": 19,
            "3s": 20,
            "4s": 21,
            "5s": 22,
            "5sr": 22.1,
            "6s": 23,
            "7s": 24,
            "8s": 25,
            "9s": 26,
            "E": 27,
            "S": 28,
            "W": 29,
            "N": 30,
            "P": 31,
            "F": 32,
            "C": 33,
            "?": 34
        }
    return data
    
def get_pred_using_index_js(driver, url):
    pickle_filename = 'naga_data.pickle'
    if os.path.exists(pickle_filename):
        with open(pickle_filename, "rb") as fp: data = pickle.load(fp)
        return data
    
    print("driver get")
    driver.get(url)
    #driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    local_filename = 'index.js'
    remote_url = 'https://naga.dmv.nico/static/naga_report/1.0.0/js/index.js'
    if not os.path.exists(local_filename):
        response = requests.get(remote_url)
        index_js_code = response.text
        with open(local_filename, "w", encoding="utf-8") as file: file.write(index_js_code)
    driver.execute_script(open(local_filename, "r", encoding="utf-8-sig").read())
    #wait until page reloads
    WebDriverWait(driver, 60).until(EC.visibility_of_element_located(
        (By.CSS_SELECTOR, "#app > div > div > div:nth-child(1) > div.column.is-three-quarter")))
    browser_log = driver.get_log('browser')
    data = {}
    data['pred'] = driver.execute_script("return pred;")
    # W is a local variable, is there a way to get it?
    # Instead I just copied it here.
    #data['W_tilemap'] = driver.execute_script("return W;")
    # This is a local var in index.js. How to get it out?
    data['W_tilemap'] = {
            "1m": 0,
            "2m": 1,
            "3m": 2,
            "4m": 3,
            "5m": 4,
            "5mr": 4.1,
            "6m": 5,
            "7m": 6,
            "8m": 7,
            "9m": 8,
            "1p": 9,
            "2p": 10,
            "3p": 11,
            "4p": 12,
            "5p": 13,
            "5pr": 13.1,
            "6p": 14,
            "7p": 15,
            "8p": 16,
            "9p": 17,
            "1s": 18,
            "2s": 19,
            "3s": 20,
            "4s": 21,
            "5s": 22,
            "5sr": 22.1,
            "6s": 23,
            "7s": 24,
            "8s": 25,
            "9s": 26,
            "E": 27,
            "S": 28,
            "W": 29,
            "N": 30,
            "P": 31,
            "F": 32,
            "C": 33,
            "?": 34
        }
    
    with open(pickle_filename, "wb") as fp: pickle.dump(data, fp)
    return data

def get_browser_log(driver):
    #execute modified index.js
    #driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    driver.execute_script(open("./modded_index.js", "r", encoding="utf-8-sig").read())
    #wait until page reloads
    WebDriverWait(driver, 60).until(EC.visibility_of_element_located(
        (By.CSS_SELECTOR, "#app > div > div > div:nth-child(1) > div.column.is-three-quarter")))
    browser_log = driver.get_log('browser')
    #but reload doensn't mean that browser log is ready, sometimes it isn't
    try:
        #try to get desired data
        re.findall(r'(\".*)', browser_log[3].get('message'))
    except:
        print('Log still doesn\'t load')
        #if browser log isn't ready call this function recursively until success
        browser_log = get_browser_log(driver)
    return browser_log
def get_player_stat(browser_log, html_source):
    #get data from browser console and convert it into list of dict
    log_stat_message = re.findall(r'(\".*)', browser_log[3].get('message'))[0]
    player_stat = json.loads(json.loads(log_stat_message))
    #get html source with dan, nicknames, rates, umaoka results and convert it into list of dict
    player_info = re.findall(r'playerInfo = (.*})', html_source)[0]
    player_info = json.loads(player_info.replace("\'", "\""))
    #add info from second list of dict into first
    for player in player_stat:
        for info in player_info:
            player[info] = player_info[info][player['seat']]
    # sort players by umaoka result
    player_stat = sorted(player_stat, key=itemgetter('umaoka'), reverse=True)
    #add rank (1-4) and score of player and calculate score using umaoka
    place_bonus = [10, -20, -40, -50]
    for i, player in enumerate(player_stat):
        player['rank'] = i+1
        player['score'] = round((player['umaoka']-place_bonus[i])*1000)
    return player_stat
def get_game_info(browser_log, html_source):
    paifu_id = re.findall(r'haihuId = \"(.*)\"', html_source)[0]
    #paifu_id contains date of match like YYYYMMDDHH
    date = paifu_id[:4] + '-' + paifu_id[4:6] + '-' + paifu_id[6:8] + ' ' + paifu_id[8:10] + ':00'
    paifu_url = 'https://tenhou.net/3/?log=' + paifu_id
    #get amount of round (kyoku) in game
    kyoku = re.findall(r'(\d*\d)\"', browser_log[1].get('message'))[0]
    #combine all data together in dict
    game_info = {"date": date, "paifu_url": paifu_url, "kyoku": kyoku}
    return game_info
def print_data_for_spreadsheet(game_info, player_stat, file, first_nickname = None, seat = None):
    #locate player with desired nickname or seat on first position of list for later print it first
    if first_nickname is not None:
        for index, player in enumerate(player_stat):
            if player['name'] == first_nickname:
                player_stat[index], player_stat[0] = player_stat[0], player_stat[index]
                seat = player['seat']
                break
    elif seat is not None:
        for index, player in enumerate(player_stat):
            if player['seat'] == seat:
                player_stat[index], player_stat[0] = player_stat[0], player_stat[index]
                break
    print_game_info(game_info, file, seat)
    for p in player_stat:
        print_player(p, file)
    print(file=file)
    print('Plus one game')
def print_game_info(game_info, file, seat = None):
    if seat is not None:
        game_info['paifu_url'] += '&tw=' + str(seat)
    print(game_info['paifu_url'], game_info['date'], game_info['kyoku'],
          sep='\t', end='\t', file=file)
def print_player(p, file):
    print(p['name'], p['seat'], p['dan'] - 9, p['rate'], p['rank'], p['score'],
          round(p['類似度']['ニシキ'], 3), round(p['一致率']['ニシキ'], 3) / 100, round(p['悪手率']['ニシキ'], 3) / 100,
          round(p['類似度']['カガシ'], 3), round(p['一致率']['カガシ'], 3) / 100, round(p['悪手率']['カガシ'], 3) / 100,
          p['和了局数'], p['和了得点'], p['放銃局数'], p['放銃失点'], p['立直局数'], p['副露局数'], p['打牌選択回数'],
          sep='\t', end='\t', file=file)

def parse_html(data, args):
    script = str(data['soup'].find('script').contents)
    # Use non-greedy .*? to be sure not to get too much
    data['pred'] = re.findall(r'const pred = (.*?}]])', script)[0]
    data['pred'] = json.loads(str(data['pred']))
    data['playerInfo'] = re.findall(r'const playerInfo = (.*?})', script)[0]
    data['playerInfo'] = re.sub(r"\\\'", "\"", data['playerInfo'])
    data['playerInfo'] = json.loads(str(data['playerInfo']))

    data['dahaiDecisionCount'] = [0]*4
    data['notMatchMoveCount'] = [0]*4
    data['nagaRate'] = [0]*4
    data['badMoveCount'] = [0]*4
    for kyoku in data['pred']:   # kyoku = hand number e.g. East 2 Bonus 1 (but here just an array)
        for i, turn in enumerate(kyoku):
            msg = turn['info']['msg']
            # types: {'tsumo', 'dahai', 'pon', 'dora', 'ankan', 'reach', 'chi', 'reach_accepted', 'start_kyoku'}
            # p_msg types: {'reach', 'dahai', 'tsumo', 'reach_accepted', 'ankan', 'dora', 'none', 'chi', 'pon', 'start_kyoku'}
            # Stats don't include huro (calls) -- investigating how these are shown in the code
            # huro: dict of actors -> array of 2 bots -> dict of actions
            # 0 = no call 
            # 1,2,3, = chi left,mid,right (check order?)
            # 4 = pon
            # 5 = kan? maybe?
            if False and msg['type'] in ('chi', 'pon'): 
                print(msg)
                print(kyoku[-1])
                for actor, v in kyoku[i-1]['huro'].items():
                    probs = list(v[0].values())
                    total = sum(probs)
                    probs = [p/total for p in probs]
                    #if probs[0] < 0.99:
                        #print('huro', turn['huro'])
                        #print('ratio', actor, probs)
                #print(msg['type'], 1-probs[0], kyoku[i-1]['huro'])
                #sys.exit()
            if msg['type'] in ('tsumo', 'chi', 'pon') and not msg['reached']:
                real_dahai = msg['real_dahai']
                if not real_dahai or real_dahai == "?": continue # Not sure why this happens
                if msg['type'] == "?": raise Exception("is this possible?")
                # dahai = discard
                # pred = predictect by Naga
                # There are two arrays of predicted values, one for each bot, and two versions of that array
                # dahaiPred is a probability
                # dahai_pred is multiplied by 1000 to get integers
                # info->msg->pred_dahai gives the actual tile with highest probability for each bot
                actor = turn['info']['msg']['actor']
                data['dahaiDecisionCount'][actor] += 1
                best_dahai = turn['info']['msg']['pred_dahai'][0]
                best_index = math.floor(data['W_tilemap'][best_dahai]) # Red 5s are encoded as e.g. "5mr": 4.1. Use floor to make it just plain 4
                best_prob = turn['dahai_pred'][0][best_index]/10000.0

                real_index = math.floor(data['W_tilemap'][real_dahai])
                real_prob = turn['dahai_pred'][0][real_index]/10000.0
                diff = abs(best_prob - real_prob) # They use abs, but best should always be highest so not actually needed?
                data['nagaRate'][actor] += diff
                if real_prob < 0.05: data['badMoveCount'][actor] += 1
                if best_index != real_index: data['notMatchMoveCount'][actor] += 1
                #print(actor, real_dahai, real_prob, best_dahai, best_prob, diff, dahaiDecisionCount[actor], badMoveCount[actor], nagaRate[actor], turn['info']['msg']['reached'])
            else:
                pass
    print("stats")
    print("count, match, score, bad")
    actor_order = []
    for actor in range(4):
        if data['playerInfo']['name'][actor] != args.name:
            actor_order += [actor]
        else:
            actor_order = [actor] + actor_order
    for actor in actor_order:
        print('{:d} {:12s} {:3d} {:2.1f} {:2.1f} {:2.1f}'.format(
            actor,
            data['playerInfo']['name'][actor],
            data['dahaiDecisionCount'][actor],
            (data['dahaiDecisionCount'][actor] - data['notMatchMoveCount'][actor])/data['dahaiDecisionCount'][actor]*100,
            (data['dahaiDecisionCount'][actor] - data['nagaRate'][actor])/data['dahaiDecisionCount'][actor]*100,
            (data['badMoveCount'][actor]/data['dahaiDecisionCount'][actor]*100)
        ))
    print("again for copy paste")
    for actor in actor_order:
        print('{:2.1f}, {:2.1f}, {:2.1f}'.format(
            #actor,
            #data['playerInfo']['name'][actor],
            #data['dahaiDecisionCount'][actor],
            (data['dahaiDecisionCount'][actor] - data['notMatchMoveCount'][actor])/data['dahaiDecisionCount'][actor]*100,
            (data['dahaiDecisionCount'][actor] - data['nagaRate'][actor])/data['dahaiDecisionCount'][actor]*100,
            (data['badMoveCount'][actor]/data['dahaiDecisionCount'][actor]*100)
        ))

# key: "dahai",
# value: function(e, a, i) {
#     var n = this
#       , r = a.info.msg
#       , s = r.actor;
#     this.result.dahaiDecisionCount[s] += 1;
#     var o = Math.floor(W[r.real_dahai]);
#     this.nagaTypes.forEach((function(c) {
#         for (var h = Math.floor(W[r.pred_dahai[c]]), 
#                  l = a.dahaiPred[c][o],
#                  u = a.dahaiPred[c][h], 
#                  d = Math.abs(l - u), 
#                  p = 0; 
#                  p < t.thresholds.length; p++) {
#             var f = t.thresholds[p];
#             o != h && (1 === f ? l < .05 && i[p][c].push(e) : d >= f && i[p][c].push(e))
#         }
#         o != h && (n.result.notMatchMoveCount[s][c] += 1,
#         n.result.NagaRate[s][c] += d,
#         l < .05 && (n.result.badMoveCount[s][c] += 1))
#     }
#     ))


def main():
    parser = argparse.ArgumentParser(description="Naga log parser")
    parser.add_argument('-f', '--filein', help='File with urls')
    parser.add_argument('-u', '--url', help='URL')
    parser.add_argument('-n', '--name', help='Our username')
    parser.add_argument('-c', '--usecache', help='Read from disk cache', action='store_true')
    args = parser.parse_args()

    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.page_load_strategy = "none"
    options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    #driver = Chrome(options=options)
    driver = None
    file = None
    if args.filein:
        with open("naga.txt", "r", encoding="utf-8-sig") as f:
            url_list = f.read().splitlines()
        file = open("output.txt", "w", encoding="utf-8-sig")
    elif args.url:
        url_list = [args.url]
    else:
        raise Exception("Must provide -f or -u")

    for url in url_list:
        #driver.get(url)
        #log = get_browser_log(driver)
        #page = driver.page_source
        #player_stat = get_player_stat(log, page)
        #game_info = get_game_info(log, page)
        #print_data_for_spreadsheet(game_info, player_stat, file, "Razout")
        data = file_cached_func(args, "naga_data.pickle", lambda: get_pred(driver, url))
        #pred = get_pred_using_index_js(driver, url)
        parse_html(data, args)
    file and file.close()
    #driver.quit()

if __name__ == '__main__': main()

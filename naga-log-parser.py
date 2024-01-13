import re
import json
from operator import itemgetter
import pprint
import sys
import os
import requests
from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def get_pred(driver):
    #driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    js_url = 'https://naga.dmv.nico/static/naga_report/1.0.0/js/index.js'
    response = requests.get(js_url)
    index_js_code = response.text
    #print(response)
    #print(index_js_code)
    with open('index.js', "w", encoding="utf-8") as file: file.write(index_js_code)
    #sys.exit()

    #driver.execute_script(open("./modded_index.js", "r", encoding="utf-8-sig").read())
    driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    #driver.execute_script(index_js_code)
    #wait until page reloads
    WebDriverWait(driver, 60).until(EC.visibility_of_element_located(
        (By.CSS_SELECTOR, "#app > div > div > div:nth-child(1) > div.column.is-three-quarter")))
    browser_log = driver.get_log('browser')
    #but reload doensn't mean that browser log is ready, sometimes it isn't
    #try:
    #    #try to get desired data
    #    re.findall(r'(\".*)', browser_log[3].get('message'))
    #except:
    #    print('Log still doesn\'t load')
    #    #if browser log isn't ready call this function recursively until success
    #    browser_log = get_browser_log(driver)
    pred = driver.execute_script("return pred;")
    print(str(pred)[:100])
    #pp = pprint.PrettyPrinter()
    #pp.pprint(pred)
    #return browser_log
    return pred

def get_browser_log(driver):
    #execute modified index.js
    #driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    js_url = 'https://naga.dmv.nico/static/naga_report/1.0.0/js/index.js'
    response = requests.get(js_url)
    index_js_code = response.text
    #print(response)
    #print(index_js_code)
    with open('index.js', "w", encoding="utf-8") as file: file.write(index_js_code)
    #sys.exit()

    #driver.execute_script(open("./modded_index.js", "r", encoding="utf-8-sig").read())
    driver.execute_script(open("./index.js", "r", encoding="utf-8-sig").read())
    #driver.execute_script(index_js_code)
    #wait until page reloads
    WebDriverWait(driver, 60).until(EC.visibility_of_element_located(
        (By.CSS_SELECTOR, "#app > div > div > div:nth-child(1) > div.column.is-three-quarter")))
    browser_log = driver.get_log('browser')
    #but reload doensn't mean that browser log is ready, sometimes it isn't
    #try:
    #    #try to get desired data
    #    re.findall(r'(\".*)', browser_log[3].get('message'))
    #except:
    #    print('Log still doesn\'t load')
    #    #if browser log isn't ready call this function recursively until success
    #    browser_log = get_browser_log(driver)
    pred = driver.execute_script("return pred;")
    print(str(pred)[:100])
    #pp = pprint.PrettyPrinter()
    #pp.pprint(pred)
    #return browser_log
    return pred
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

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.page_load_strategy = "none"
options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
driver = Chrome(options=options)
with open("naga.txt", "r", encoding="utf-8-sig") as f:
    url_list = f.read().splitlines()
file = open("output.txt", "w", encoding="utf-8-sig")
for url in url_list:
    driver.get(url)
    log = get_browser_log(driver)
    #page = driver.page_source
    #player_stat = get_player_stat(log, page)
    #game_info = get_game_info(log, page)
    #print_data_for_spreadsheet(game_info, player_stat, file, "Razout")
file.close()
driver.quit()
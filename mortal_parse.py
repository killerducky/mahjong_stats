import requests
import sys
import os
from joblib import Memory
import argparse
from bs4 import BeautifulSoup

memory = Memory("cachedir")
@memory.cache
def get_html(url):
    response = requests.get(url)
    data = {}
    data['soup'] = BeautifulSoup(response.content, 'html.parser')
    return data

def parse_html(data):
    dahaiDecisionCount = 0
    notMatchMoveCount = 0
    nagaRate = 0
    badMoveCount = 0
    RiichiState = None
    details = data['soup'].find_all('details', {'class':'collapse entry'})
    for d in details:
        if "Turn 1 " in d.findChild('summary').contents[0]:
            RiichiState = None # reset state
        if RiichiState == 'complete':
             # Skip if we riiched a previous turn
            continue
        roles = d.findChildren('span', {'class':'role'})
        p_action = roles[0].nextSibling
        if "Riichi" in p_action:
            # Set flag so we process the Riichi discard next
            RiichiState = 'discarding'
        if not "Discard" in p_action:
            # Only do stats on discards
            continue 
        if RiichiState == "discarding":
            # We are now processing the riichi discard set the state now
            RiichiState = 'complete'
        dahaiDecisionCount += 1
        p_discard = roles[0].contents[0].find_next('use')['href']
        m_discard = roles[1].contents[0].find_next('use')['href']
        #print(p_discard, m_discard)
        if p_discard != m_discard: notMatchMoveCount += 1
        data = d.find('tbody')
        for row in data.findChildren('tr'):
            td = row.findChild('td')
            tile = td.contents[1].findChild('use')['href']
            i = td.contents[2].findChildren('span', {'class':'int'})
            f = td.contents[2].findChildren('span', {'class':'frac'})
            Qval = float(f'{i[0].contents[0]}{f[0].contents[0]}')
            Pval = float(f'{i[1].contents[0]}{f[1].contents[0]}')/100
            if tile == m_discard:
                m_Pval = Pval
            if tile == p_discard:
                p_Pval = Pval
                if Pval < 0.05:
                    badMoveCount += 1
        diff = m_Pval - p_Pval
        nagaRate += diff
    print('count, match, score, bad')
    print('{:3d}, {:2.1f}, {:2.1f}, {:2.1f}'.format(
        dahaiDecisionCount,
        (dahaiDecisionCount - notMatchMoveCount)/dahaiDecisionCount*100,
        (dahaiDecisionCount - nagaRate)/dahaiDecisionCount*100,
        (badMoveCount/dahaiDecisionCount*100)
    ))


def main():
    parser = argparse.ArgumentParser(description="Naga log parser")
    parser.add_argument('-u', '--url', help='URL')
    parser.add_argument('-n', '--name', help='Our username')
    parser.add_argument('-c', '--usecache', help='Read from disk cache', action='store_true')
    args = parser.parse_args()
    data = get_html(args.url)
    parse_html(data)

if __name__ == "__main__":
    main()

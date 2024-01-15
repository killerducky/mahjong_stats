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
    details = data['soup'].find_all('details', {'class':'collapse entry'})
    print(type(details), len(details))
    for d in details:
        roles = d.findChildren('span', {'class':'role'})
        for r in roles:
            print(r.contents[0], r.find_next('use')['href'])
        #data = d.find('table')
        data = d.find('tbody')
        print()
        for row in data.findChildren('tr'):
            td = row.findChild('td')
            if "Discard" in td.contents[0]:
                #print(td.contents[0])
                #print(td.contents[1])
                tile = td.contents[1].findChild('use')['href']
                #print(tile)
                #print(td.contents[2])
                i = td.contents[2].findChildren('span', {'class':'int'})
                f = td.contents[2].findChildren('span', {'class':'frac'})
                Qval = float(f'{i[0].contents[0]}{f[0].contents[0]}')
                Pval = float(f'{i[1].contents[0]}{f[1].contents[0]}')
                #print(Qval, Pval)
                print(td.contents[0], tile, Qval, Pval)
        print()
        break
    #print(data['soup'])

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

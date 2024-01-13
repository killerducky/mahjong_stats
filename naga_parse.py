import requests
import os
import sys
import pickle
from requests_html import AsyncHTMLSession
import asyncio
import re


from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities    
#from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

def capture_console_logs(url):
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.page_load_strategy = "none"
    options.set_capability('goog:loggingPrefs', {'browser': 'ALL'})
    driver = Chrome(options=options)
    driver.get(url)
    #for entry in driver.get_log('browser'):
    #    print(entry)
    pred = driver.find_element(By.TAG_NAME, 'script')
    #print(pred)
    script = pred.get_attribute("innerHTML")
    #script = script[:50]
    script = re.sub(r'^\s*const ', "", script)
    print(script)
    #data = exec(script)
    #print(data)
    driver.execute_script("return pred;")
    #driver.execute_script(script)


def capture_console_logs5(url):
    # Set up Chrome options to run headless
    chrome_options = Options()
    #d = DesiredCapabilities.CHROME
    #d['goog:loggingPrefs'] = {'browser': 'ALL',
    #                       'driver': 'ALL'}

    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    #chrome_options.add_argument('--gogg:loggingPrefs=')
    driver = webdriver.Chrome(options=chrome_options)
    #driver = webdriver.Chrome(options=chrome_options, desired_capabilities=d)
    driver.get(url)


# This one actually logs stuff to stdout, but I can't capture it in python...
def capture_console_logs4(url):
    # Set up Chrome options to run headless
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)


def capture_console_logs3(url):
    #capabilities = DesiredCapabilities.CHROME
    #capabilities['goog:loggingPrefs'] = { 'browser':'ALL' }
    #driver = webdriver.Chrome(desired_capabilities=capabilities)
    driver = webdriver.Chrome()
    driver.get(url)
    for entry in driver.get_log('browser'):
        print(entry)


async def capture_console_logs2(url):
    session = AsyncHTMLSession()
    response = await session.get(url)
    #await response.html.arender()
    #console_logs = response.html.page.evaluate('() => console.logs')
    console_logs = response.html.render(script='() => console.logs')
    print(console_logs)
    #print(response.html.html)
    #for line in response.html.html.split('\n'):
    #    print(line[:50])
    #for log_entry in console_logs:
    #    print(log_entry)
    await session.close()

def get_logs(url, save_filename):
    #asyncio.run(capture_console_logs(url))
    capture_console_logs(url)
    sys.exit()
    return

    if os.path.exists(save_filename):
        with open(save_filename, "rb") as fp: data = pickle.load(fp)
        return data

    response = requests.get(url)
    if response.status_code == 200:
        console_logs = response.text.split('\n')
        with open(save_filename, "wb") as fp: pickle.dump(console_logs, fp)
        return(console_logs)
    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
        return None



def main():
    url = 'https://naga.dmv.nico/htmls/2bc29a778ed448de9c9f93c7321d3336ad9ac97121138c1018a62e74323870b2v2_2.html'
    data = get_logs(url, "naga_parse.pickle")
    print (len(data))
    for line in data:
        #print(line)
        if 'ニシキ' in line:
            print(line)
        

if __name__ == "__main__":
    main()

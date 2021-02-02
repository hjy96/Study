import requests
from bs4 import BeautifulSoup

r = requests.get('https://codingeverybody.github.io/scraping_sample/1.html')


soup = BeautifulSoup(r, 'html.parser')
print (soup.title.string)
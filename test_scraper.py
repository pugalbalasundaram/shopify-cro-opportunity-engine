from pprint import pprint
from services.scraper import scrape_homepage

data = scrape_homepage("https://gymshark.com")

pprint(data)
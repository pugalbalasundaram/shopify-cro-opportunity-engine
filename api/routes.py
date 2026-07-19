from fastapi import APIRouter

from models import AnalyzeRequest
from services.scraper import scrape_homepage
from services.ai_service import generate_cro_report

router = APIRouter()


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    scraped_data = scrape_homepage(request.url)

    report = generate_cro_report(scraped_data)

    return {
        "website_data": scraped_data,
        "cro_report": report
    }
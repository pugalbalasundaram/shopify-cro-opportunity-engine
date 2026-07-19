# Shopify CRO Opportunity Engine

An AI-powered web application that analyzes Shopify stores and generates actionable Conversion Rate Optimization (CRO) recommendations. The application uses Playwright for website scraping, Google's Gemini AI for intelligent analysis, FastAPI for the backend, and Next.js for the frontend.

---

## Project Overview

The Shopify CRO Opportunity Engine helps identify potential improvements that can increase a Shopify store's conversion rate. It automatically extracts information from a Shopify website, analyzes it using AI, and presents prioritized recommendations in an interactive dashboard.

---

## Features

- Analyze any public Shopify store
- AI-generated CRO recommendations using Google Gemini
- Website information extraction
- Priority-based issue classification
- CRO Score calculation
- Interactive dashboard
- Download report as PDF
- Copy report to clipboard
- Responsive user interface
- Loading animation during analysis

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- jsPDF
- Chart.js
- React Chart.js 2

### Backend
- FastAPI
- Python
- Playwright
- Google Gemini API
- BeautifulSoup

---

## Project Architecture

```
                User
                  │
                  ▼
         Next.js Frontend
                  │
          Axios HTTP Request
                  │
                  ▼
          FastAPI Backend
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
 Playwright Scraper      Gemini AI
      │                       │
      └───────────┬───────────┘
                  ▼
         CRO Opportunity Report
                  │
                  ▼
      Interactive Dashboard
```

---

## Folder Structure

```
Shopify-CRO-Opportunity-Engine/

├── backend/
│   ├── main.py
│   ├── scraper.py
│   ├── gemini.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── app/
│   │    └── page.tsx
│   │
│   ├── components/
│   │    ├── SearchBar.tsx
│   │    ├── WebsiteInfo.tsx
│   │    ├── SummaryCard.tsx
│   │    ├── PriorityChart.tsx
│   │    ├── ReportCard.tsx
│   │    └── Loading.tsx
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/pugalbalasundaram/Shopify-CRO-Opportunity-Engine.git

cd Shopify-CRO-Opportunity-Engine
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

playwright install

uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoint

### Analyze Shopify Store

**POST**

```
/analyze
```

### Request

```json
{
    "url":"https://gymshark.com"
}
```

### Response

```json
{
    "website_data": {
        "title": "...",
        "meta_description": "...",
        "products": []
    },
    "cro_report":[
        {
            "Issue":"...",
            "Priority Score":9,
            "Impact":"High",
            "Confidence":"High",
            "Effort":"Low",
            "Recommendation":"..."
        }
    ]
}
```

---

## Workflow

1. Enter a Shopify store URL.
2. Frontend sends the request to FastAPI.
3. Playwright scrapes website information.
4. Website data is sent to Gemini AI.
5. Gemini generates CRO opportunities.
6. Dashboard displays:
   - Website information
   - CRO score
   - Priority summary
   - AI recommendations
7. User can download the report as a PDF or copy it to the clipboard.

---

## Screenshots

### Home Page

<img width="1366" height="768" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/ea48e8cb-23f7-4622-b49c-ab42bfa9a316" />


### Dashboard

<img width="1366" height="768" alt="Screenshot (72)" src="https://github.com/user-attachments/assets/511bc007-57d3-4b82-9bed-c4a3a63e1664" />


## Future Improvements

- Competitor comparison
- Historical analysis
- User authentication
- Multi-page website analysis
- Performance scoring
- Export to Excel
- Dark/Light theme toggle
- AI-generated executive summary

---

## Author

**Pugal B**

B.Tech Information Technology

SRM Valliammai Engineering College

2022 – 2026

---

## License

This project is developed as part of a technical assignment for educational and evaluation purposes.

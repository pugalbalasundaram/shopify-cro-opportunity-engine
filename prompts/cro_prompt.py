CRO_PROMPT = """
You are a Senior Ecommerce CRO Consultant.

Analyze the following Shopify website.

Website Title:
{title}

Description:
{description}

Headings:
{headings}

Buttons:
{buttons}

Generate a CRO audit.

For every issue provide:

1. Issue
2. Why it matters
3. Impact (High/Medium/Low)
4. Confidence (High/Medium/Low)
5. Effort (Low/Medium/High)
6. Priority Score (1-10)
7. Recommendation

Sort the issues by Priority Score (highest first).

Return ONLY valid JSON.

Do not include markdown.
Do not wrap the response inside ```json.
Do not add explanations before or after the JSON.

Example format:

[
  {{
    "Issue": "...",
    "Why it matters": "...",
    "Impact": "High",
    "Confidence": "High",
    "Effort": "Low",
    "Priority Score": 9.5,
    "Recommendation": "..."
  }}
]
"""
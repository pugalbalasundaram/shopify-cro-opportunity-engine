import json
import google.generativeai as genai

from config.settings import GEMINI_API_KEY
from prompts.cro_prompt import CRO_PROMPT

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Load the model
model = genai.GenerativeModel("gemini-flash-latest")


def generate_cro_report(data):
    """
    Generate a CRO audit report using Gemini AI.
    """

    prompt = CRO_PROMPT.format(
        title=data["title"],
        description=data["description"],
        headings=data["headings"],
        buttons=data["buttons"]
    )

    try:
        # Generate AI response
        response = model.generate_content(prompt)

        # Remove markdown if Gemini wraps the JSON
        text = (
            response.text
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        # Convert JSON string to Python object
        return json.loads(text)

    except json.JSONDecodeError:
        return {
            "error": "Gemini returned invalid JSON.",
            "raw_response": response.text
        }

    except Exception as e:
        return {
            "error": str(e)
        }
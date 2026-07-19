from playwright.sync_api import sync_playwright


def scrape_homepage(url):
    with sync_playwright() as p:

        browser = p.chromium.launch(headless=True)

        page = browser.new_page()

        page.goto(
            url,
            wait_until="domcontentloaded",
            timeout=60000
        )

        title = page.title()

        description = page.locator(
            "meta[name='description']"
        ).get_attribute("content")

        headings = page.locator("h1").all_inner_texts()

        buttons = page.locator("button").all_inner_texts()

        links = page.locator("a").evaluate_all("""
            els => els.map(e => ({
                text:e.innerText,
                href:e.href
            }))
        """)

        browser.close()

        return {
            "title": title,
            "description": description,
            "headings": headings,
            "buttons": buttons,
            "links": links
        }
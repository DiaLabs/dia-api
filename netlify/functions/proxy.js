export async function handler(event, context) {
  try {
    const response = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
    const data = await response.json();

    let cloudflareUrl = "";
    try {
      const parsedContent = JSON.parse(data.content); // because content is a stringified JSON
      cloudflareUrl = parsedContent.api_url;
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to parse content JSON", detail: err.message })
      };
    }

    if (!cloudflareUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "api_url not found in parsed content" })
      };
    }

    const apiResponse = await fetch(cloudflareUrl + "/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body
    });

    const result = await apiResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

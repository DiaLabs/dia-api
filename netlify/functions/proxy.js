export async function handler(event, context) {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Dia-Therapist API</title>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 2rem; background: #f9f9f9; }
            h1 { color: #333; }
            code { background: #eee; padding: 0.5rem; display: block; margin-top: 1rem; }
          </style>
        </head>
        <body>
          <h1>🎙️ Dia-Therapist API is running</h1>
          <p>Send a POST request to this URL with JSON:</p>
          <code>{ "message": "your input" }</code>
        </body>
        </html>
      `
    };
  }

  // handle POST
  try {
    const response = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
    const data = await response.json();

    let cloudflareUrl = "";
    try {
      const parsedContent = JSON.parse(data.content);
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

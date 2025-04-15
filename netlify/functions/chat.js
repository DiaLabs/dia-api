export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const res = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
    const data = await res.json();

    const parsed = JSON.parse(data.content); // stringified JSON inside 'content'
    const apiUrl = parsed.api_url;

    if (!apiUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Tunnel URL not found" })
      };
    }

    const apiResponse = await fetch(apiUrl + "/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: event.body
    });

    const result = await apiResponse.text(); // could be JSON or plain text

    return {
      statusCode: 200,
      body: result
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}

export async function handler(event, context) {
  const response = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
  const data = await response.json();
  const cloudflareUrl = data.content.api_url;

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
}

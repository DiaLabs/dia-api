// Vercel serverless function example (api/proxy.js)
export default async function handler(req, res) {
  // Get latest Cloudflare URL from your webhook.site
  const response = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
  const data = await response.json();
  const cloudflareUrl = data.content.api_url;
  
  // Forward the request
  const apiResponse = await fetch(cloudflareUrl + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });
  
  const result = await apiResponse.json();
  res.status(200).json(result);
}

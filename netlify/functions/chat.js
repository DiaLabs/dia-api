try {
  const res = await fetch("https://webhook.site/token/6b5e13ac-031d-4da1-add0-4575ce683b5f/request/latest");
  const data = await res.json();

  const parsed = JSON.parse(data.content);
  const apiUrl = parsed.api_url;

  if (!apiUrl) {
    throw new Error("Cloudflare tunnel not found");
  }

  const apiResponse = await fetch(apiUrl + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: event.body
  });

  const result = await apiResponse.text();
  return {
    statusCode: 200,
    body: result
  };

} catch (err) {
  return {
    statusCode: 503,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "🌥️ Hi there. I'm Dia, I'm currently unavailable — sorry for the inconvenience. Please try again in a little while. 💖"
    })
  };
}


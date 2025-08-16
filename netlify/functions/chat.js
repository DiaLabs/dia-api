export async function handler(event) {
  try {
    const latest = await fetch("https://webhook.site/token/3348f322-9343-4329-8b8d-cbc61ef26216/request/latest");
    const json = await latest.json();
    const parsed = JSON.parse(json.content);
    const cloudflareUrl = parsed.api_url;

    if (!cloudflareUrl) {
      return {
        statusCode: 503,
        body: JSON.stringify({ error: "Dia is unavailable at the moment. Please try again later 💖" })
      };
    }

    const input = JSON.parse(event.body);

    const response = await fetch(cloudflareUrl + "/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Dia is resting right now. Please check back soon 💤" })
    };
  }
}

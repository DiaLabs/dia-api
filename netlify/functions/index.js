export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Dia Therapist API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f6fa;
            color: #333;
            padding: 2rem;
            line-height: 1.6;
            max-width: 700px;
            margin: auto;
          }
          h1 {
            font-size: 2rem;
            color: #2c3e50;
            text-align: center;
          }
          p {
            margin-top: 1rem;
          }
          code, pre {
            background-color: #eaeaea;
            padding: 0.6rem 1rem;
            border-radius: 8px;
            display: block;
            white-space: pre-wrap;
            word-break: break-word;
            font-family: monospace;
            margin: 1rem 0;
          }
          .emoji {
            font-size: 2rem;
            display: inline-block;
            margin-right: 0.5rem;
          }
          .section {
            margin-bottom: 2rem;
          }
        </style>
      </head>
      <body>
        <h1><span class="emoji">🧠</span> Dia-Therapist API</h1>
        <div class="section">
          <p>Hello! I'm <strong>Dia</strong>, your GenZ-friendly AI therapist, here to help you talk things out 💬</p>
          <p>This API allows clients to send a message and receive a thoughtful, empathetic reply from Dia.</p>
        </div>

        <div class="section">
          <h2>📮 Endpoint</h2>
          <p><strong>POST</strong> to:</p>
          <code>https://dia-api.netlify.app/chat</code>
        </div>

        <div class="section">
          <h2>📦 Request Body</h2>
          <p>Send your message to Dia in JSON format:</p>
          <pre>{
  "message": "I feel anxious lately."
}</pre>
        </div>

        <div class="section">
          <h2>📬 Response</h2>
          <p>You’ll receive a reply like this:</p>
          <pre>{
  "reply": "I'm here for you. Want to talk more about what’s been making you feel this way?"
}</pre>
        </div>

        <div class="section">
          <h2>⚠️ Availability</h2>
          <p>Dia is hosted on a live Colab session via a Cloudflare tunnel. If she's unavailable, you'll receive a kind message letting you know to try again later 💖</p>
        </div>

        <div class="section">
          <p>Built with 🧡 - petrioteer</p>
        </div>
      </body>
      </html>
    `
  };
}

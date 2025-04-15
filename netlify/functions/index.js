export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Dia-Therapist API</title>
        <style>
          body { font-family: sans-serif; padding: 2rem; text-align: center; }
          h1 { color: #333; }
          code { background: #eee; padding: 0.5rem; display: block; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <h1>🎙️ Dia-Therapist API is running</h1>
        <p>POST to <strong>/chat</strong> with JSON:</p>
        <code>{ "message": "your input" }</code>
      </body>
      </html>
    `
  };
}

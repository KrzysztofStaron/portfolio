const API_BASE = "https://handwriting-api-687921010800.europe-central2.run.app";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(`${API_BASE}/generate/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json();
    return Response.json(data, { status: res.status });
  }

  if (!res.body) {
    return Response.json({ error: "No response stream" }, { status: 502 });
  }

  return new Response(res.body, {
    headers: { "Content-Type": "application/x-ndjson" },
  });
}

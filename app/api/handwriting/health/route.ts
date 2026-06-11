const API_BASE = "https://handwriting-api-687921010800.europe-central2.run.app";

export async function GET() {
  const res = await fetch(`${API_BASE}/health`);
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

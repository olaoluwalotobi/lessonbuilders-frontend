const API_BASE = "https://lessonbuilders-backend-production.up.railway.app";

export async function checkHealth() {
  const res = await fetch(`${API_BASE}/api/health`);
  if (!res.ok) throw new Error("API not reachable");
  return res.json();
}

export async function generateLesson(payload) {
  const res = await fetch(`${API_BASE}/api/generate-lesson`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
}

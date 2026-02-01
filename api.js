// api.js (front-end helper)

// ✅ Set this to your Railway backend URL
const DEFAULT_API_BASE = "https://lessonbuilders-backend-production.up.railway.app";

export function getApiBase() {
  // Prefer an explicit override the user may set during testing
  const stored =
    localStorage.getItem("API_BASE") ||
    localStorage.getItem("API_URL") ||
    localStorage.getItem("LESSONBUILDERS_API_BASE");

  if (stored && typeof stored === "string") return stored.replace(/\/+$/, "");

  // ✅ IMPORTANT: GitHub Pages != backend origin, so default must be Railway
  return DEFAULT_API_BASE;
}

export async function checkHealth() {
  const base = getApiBase();
  const res = await fetch(`${base}/api/health`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
  return res.json();
}

export async function generateLesson(payload) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/generate-lesson`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Generate failed: ${res.status}`);
  }
  return res.json();
}

export async function verifyStandards(payload) {
  const base = getApiBase();
  const res = await fetch(`${base}/api/verify-standards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Verify failed: ${res.status}`);
  }
  return res.json();
}

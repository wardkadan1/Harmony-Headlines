// All MediaStack and Gemini calls now go through the backend
// (Harmony-Headlines-Backend), so no API keys are bundled into the browser.
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  "https://harmony-headlines-backend.onrender.com"
).replace(/\/$/, "");

async function request(path, options) {
  const res = await fetch(`${API_BASE_URL}${path}`, options);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  return res.json();
}

// Latest headlines with mood scores, in the shape the UI renders.
export function getScoredNews() {
  return request("/news");
}

export function getArticle(id) {
  return request(`/data/${id}`);
}

// Rewrite a stored article's title/description to the given mood (1-10).
export function changeMood(id, mood) {
  return request("/rewrite", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: Number(id), mood: Number(mood) }),
  });
}

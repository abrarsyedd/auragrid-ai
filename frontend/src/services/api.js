import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export async function fetchOverview() {
  const response = await api.get("/platform/overview");
  return response.data.data;
}

export async function fetchUseCases() {
  const response = await api.get("/platform/use-cases");
  return response.data.data;
}

export async function submitLead(payload) {
  const response = await api.post("/contact/leads", payload);
  return response.data;
}

export default api;

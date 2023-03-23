const API_BASE = "http://localhost:8080"

interface FetchConfig {
  method: string,
  headers: {},
  body?: string,
}

export const getData = async (endpoint: string) => {
  return await callApi(endpoint, null, null);
}

export const postData = async (endpoint: string, payload: any) => {
  return await callApi(endpoint, payload, 'POST');
}

export const callApi = async (endpoint: string, payload: any | null, method: string | null) => {
  const config: FetchConfig = {
    method: method ?? 'GET',
    headers: {
      "Content-Type": "application/json",
    }
  }
  if (payload != null) config.body = JSON.stringify(payload);
  
  const response = await fetch(`${API_BASE}/${endpoint}`, config);
  return response.json();
}
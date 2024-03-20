import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:8080" });

export function getHelloWorld() {
  return apiClient.get("/hello-world-bean");
}

export function getHelloWorldPathVariable(username) {
  return apiClient.get(`/hello-world/path-variable/${username}`);
}

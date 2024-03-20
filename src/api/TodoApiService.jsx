import axios from "axios";

const apiClient = axios.create({ baseURL: "http://localhost:8080" });

export function getAllTodos(username) {
  return apiClient.get(`/users/${username}/todos`);
}

export function deleteTodo(username, id) {
  return apiClient.delete(`/users/${username}/todos/${id}`);
}

export function getTodo(username, id) {
  return apiClient.get(`/users/${username}/todos/${id}`);
}

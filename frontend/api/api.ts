import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const getTodos = async () => (await axios.get(`${API_URL}/todos`)).data;
export const createTodo = async (title: string) =>
  (await axios.post(`${API_URL}/todos`, { title })).data;
export const updateTodo = async (id: number, completed: boolean) =>
  (await axios.put(`${API_URL}/todos/${id}`, { completed })).data;
export const deleteTodo = async (id: number) =>
  await axios.delete(`${API_URL}/todos/${id}`);

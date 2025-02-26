"use client";

import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "@/api/api";
import TodoItem from "@/components/TodoItem";
import NewTodoForm from "@/components/NewTodoForm";
import { Todo } from "@/types/todos";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAddTodo = async (title: string) => {
    const newTodo = await createTodo(title);
    setTodos([...todos, newTodo]);
  };

  const handleDelete = async (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    await deleteTodo(id);
  };

  return (
    <div className="py-[4dvh]">
      <div className="flex justify-center items-center mb-[2dvh] font-bold text-[4vmin]">
        Todo List <ChecklistRtlIcon sx={{ fontSize: "4vmin" }} />
      </div>
      <NewTodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onUpdate={updateTodo}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export const updateTodoSchema = z.object({
  completed: z.boolean(),
});

export const idSchema = z.object({
  id: z.string().regex(/^\d+$/, "Invalid ID format"),
});

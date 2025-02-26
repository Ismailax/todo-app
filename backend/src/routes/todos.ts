import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { errorHandler } from "../middlewares/errorHandler";
import { validate } from "../middlewares/validate";
import { todoSchema, updateTodoSchema, idSchema } from "../schemas/todoSchema";

const router = Router();
const prisma = new PrismaClient();

router.get(
  "/",
  errorHandler(async (_, res) => {
    const todos = await prisma.todo.findMany({
      select: { id: true, title: true, completed: true },
    });
    res.json(todos);
  })
);

router.post(
  "/",
  validate(todoSchema),
  errorHandler(async (req, res) => {
    const { title } = req.body;
    const newTodo = await prisma.todo.create({
      data: { title, completed: false },
    });
    res.status(201).json(newTodo);
  })
);

router.put(
  "/:id",
  validate(idSchema, "params"),
  validate(updateTodoSchema),
  errorHandler(async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    const updatedTodo = await prisma.todo.update({
      where: { id: Number(id) },
      data: { completed },
    });

    res.json(updatedTodo);
  })
);

router.delete(
  "/:id",
  validate(idSchema, "params"),
  errorHandler(async (req, res) => {
    const { id } = req.params;
    await prisma.todo.delete({ where: { id: Number(id) } });
    res.json({ message: "Todo deleted successfully" });
  })
);

export default router;

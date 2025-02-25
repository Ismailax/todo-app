import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv';


dotenv.config({ path: '../.env' });

const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

// 📌 อ่าน Todo ทั้งหมด
app.get("/todos", async (_, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// 📌 สร้าง Todo ใหม่
app.post("/todos", async (req, res) => {
  const { title } = req.body;
  const newTodo = await prisma.todo.create({ data: { title } });
  res.json(newTodo);
});

// 📌 อัปเดตสถานะ Todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const updatedTodo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { completed },
  });
  res.json(updatedTodo);
});

// 📌 ลบ Todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: Number(id) } });
  res.json({ message: "Deleted" });
});

// 📌 รันเซิร์ฟเวอร์
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server running on port 4000"));


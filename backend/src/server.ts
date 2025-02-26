import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos";

dotenv.config({ path: "../.env" });

const app = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use("/todos", todoRoutes);

const port = process.env.PORT!;
app.listen(port, () => console.log(`Server running on port ${port}`));

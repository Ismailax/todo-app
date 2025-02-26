import { Request, Response, NextFunction } from "express";

export const errorHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Error:", (error as Error).message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

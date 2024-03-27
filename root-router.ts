import { Request, Response } from "express";
import express from "express";
import { userRoutes } from "./modules/user";

const router = express.Router();

router.get("/a", (req: Request, res: Response) => {
  return res.send("a page");
});

router.use("/users", userRoutes);

export default router;

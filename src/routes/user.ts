import { Router } from "express";
import { addUser } from "../controllers/user";

const router = Router();

router.post("/add", addUser);

export default router;

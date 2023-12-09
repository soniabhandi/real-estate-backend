import { Router } from "express";
import { createUser } from "../controllers/user";

const router = Router();

router.post("/login", createUser);

export default router;

import { Router } from "express";
import { testing } from "../controllers/user";
import User from "./user";

const router = Router();

router.get("/", (req, res) => {
  console.log("routes running successfully");
  res.send("route created");
});
router.use("/user", User);

export default router;

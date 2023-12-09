import { Router } from "express";
import User from "./user";
import Location from "./location";

const router = Router();

router.get("/", (req, res) => {
  console.log("routes running successfully");
  res.send("route created");
});
router.use("/user", User);
router.use("/location", Location);

export default router;

import { Router } from "express";
import { createLocation, getAllLocations } from "../controllers/location";
const router = Router();

router.post("/add", createLocation);
router.get("/get", getAllLocations);

export default router;

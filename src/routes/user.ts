import { Router } from "express";
import { userSignIn, setUserLocation } from "../controllers/user";

import { authenticateJWT } from "../middleware/authenticateJWT";
import ensureLoggedIn from "../middleware/ensureLoggedIn";

const router = Router();

router.post("/signIn", userSignIn);
router.use(authenticateJWT);
router.use(ensureLoggedIn);
router.post("/setLocation", setUserLocation);

export default router;

import { Router } from "express";
import loginProfile from "./loginProfile.js";
import updateProfile from "./updateProfile.js";

const router = Router();

router.use("/", loginProfile);
router.use("/", updateProfile);

export default router;

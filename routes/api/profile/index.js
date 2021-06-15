import { Router } from "express";
import loginProfile from "./loginProfile.js";
import updateProfile from "./updateProfile.js";
import getAllProfiles from "./getAllProfiles.js";

const router = Router();

router.use("/", loginProfile);
router.use("/", updateProfile);
router.use("/", getAllProfiles);

export default router;

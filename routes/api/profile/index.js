import { Router } from "express";
import loginProfile from "./loginProfile.js";
import updateProfile from "./updateProfile.js";
import getAllProfiles from "./getAllProfiles.js";
import getProfileById from "./getProfileById.js";
import deleteProfile from "./deleteProfile.js";

const router = Router();

router.use("/", loginProfile);
router.use("/", updateProfile);
router.use("/", getAllProfiles);
router.use("/", getProfileById);
router.use("/", deleteProfile);

export default router;

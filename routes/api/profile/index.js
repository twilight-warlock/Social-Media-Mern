import { Router } from "express";
import loginProfile from "./loginProfile.js";
import updateProfile from "./updateProfile.js";
import getAllProfiles from "./getAllProfiles.js";
import getProfileById from "./getProfileById.js";
import deleteProfile from "./deleteProfile.js";
import experience from "./experience.js";
import education from "./education.js";

const router = Router();

router.use("/", loginProfile);
router.use("/", updateProfile);
router.use("/", getAllProfiles);
router.use("/", getProfileById);
router.use("/", deleteProfile);
router.use("/", experience);
router.use("/", education);

export default router;

import { Router } from "express";
import posts from "./posts.js";
import likes from "./likes.js";

const router = Router();

router.use("/", posts);
router.use("/", likes);
export default router;

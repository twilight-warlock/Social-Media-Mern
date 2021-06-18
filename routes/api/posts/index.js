import { Router } from "express";
import posts from "./posts.js";
import likes from "./likes.js";
import comments from "./comments.js";

const router = Router();

router.use("/", posts);
router.use("/", likes);
router.use("/", comments);
export default router;

import express from "express";
import { signup, signin } from "../controllers/authController.js";

const router = express.Router();

// POST request for signup
router.post("/signup", signup);

// POST request for signin
router.post("/signin", signin);

export default router;

import express from "express";
import { signup, signin } from "../controllers/authController.js";

const router = express.Router();

// POST request for signup
router.post("/signup", signup);

// POST request for signin
router.post("/signin", signin);

export default router;

router.post("/feedback", (req, res) => {
  const { message, userId } = req.body;
  res.status(201).json({
    message: "Feedback received",
    data: { userId, message }
  });
});

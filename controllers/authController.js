import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Handle User Signup
export const signup = async (req, res) => {
  const { fullName, email, role, password, company } = req.body;

  console.log("Signup Body:", req.body); // Check if data is coming in correctly

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      fullName,
      email,
      role,
      password: hashedPassword,
      company,
    });

    await newUser.save();
    console.log("User saved:", newUser);

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
        company: newUser.company,
      },
      token,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Handle User Signin
export const signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User signed in successfully.",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Signin Error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

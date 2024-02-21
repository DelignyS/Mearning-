import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !password === "" ||
    !email === "" ||
    !username === "" ||
    !password.lenght < 6
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newUser = new User({ username, email, password });

  await newUser.save();
  res.json("Signup success");
};

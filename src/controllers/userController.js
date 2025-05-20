import {User} from "../model/userSchema.js"
import {blacklist} from "../model/blacklistTokenSchema.js"
import { validationResult } from "express-validator";
export const userRegister = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }
  const hashedPassword = await User.hashPassword(password);

  const user = await User({
    username: username,
    email: email,
    password: hashedPassword,
  }).save();
  const token = user.generateAuthToken();
  res.status(201).json({
    message: "user create sucessfully",
    user,
    token,
  });
};

export const userLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ message: "Invalid Email and Password" });
  }
  const isMatch = await user.camparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid User And Password" });
  }

  const token = await user.generateAuthToken();
  res.status(200).json({ message: "User Login sucessfully", token, user });
};

export const userLogout = async(req,res,next)=>{

  const token =  req.headers.authorization.split(" ")[1];
  await blacklist.create({ token });
  res.status(200).json({ message: "User Logged Out" });
}
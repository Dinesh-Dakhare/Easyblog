import jwt from "jsonwebtoken";
import { User } from "../model/userSchema.js";
import { blacklist } from "../model/blacklistTokenSchema.js";
export const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(400).json({
      message: "Missing or invalid token",
    });
  }

  const token = authHeader.split(" ")[1];
  const isBlacklisted = await blacklist.findOne({ token: token });
  
  if (isBlacklisted) {
    return res.status(401).json({ message: "unauthorized acesss" });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);


    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(400).json({
        message: "Invalid token:User not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid or expired token",
    });
  }
};

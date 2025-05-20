import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      select:false
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

userSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 12);
};
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};

userSchema.methods.camparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
export const User = model("User", userSchema);

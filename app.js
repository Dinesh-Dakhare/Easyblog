import express from "express";
import { connectToDb } from "./src/db/db.js";
import cors from "cors";
import dotenv from "dotenv";
import user from "./src/routes/userRoute.js";
import blog from "./src/routes/blogRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectToDb();


app.use('/api/v1/user',user)
app.use('/api/v1/blog',blog)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };

import express from "express";
import { connectToDb } from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export { app };

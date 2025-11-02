import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db.js";

connectDB();

import express from "express";

export const app = express();

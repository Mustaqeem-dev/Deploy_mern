import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import favicon from "serve-favicon";
import path from "path";
import UserRoutes from "./router/users.js";
import AdminRoutes from "./router/admin.js";

dotenv.config();

const app = express();

connectDB();

const PORT = 5000;
app.use(
  cors({
    origin:["https://deploy-mern-frontend-wine.vercel.app"],
    methods:["POST","GET"],
    credentials: true,
  })

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));

app.use("/user", UserRoutes);
// app.use('/admin', AdminRoutes);
// Serve static assets in production

app.listen(PORT, console.log(`Server running on port ${PORT}`));

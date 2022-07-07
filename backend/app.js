import express from "express";
import path from "path";

import "dotenv/config";
import __dirname from "./helpers/dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import dbConnection from "./helpers/db-connection.js";
import usersRouter from "./routes/users.js";
import blogsList from "./routes/blogRoutes.js";

const app = express();

dbConnection(process.env.MONGODB_URI, "AppDB");

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/blogs", blogsList);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;

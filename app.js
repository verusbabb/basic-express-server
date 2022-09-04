import express from "express";
// import api from "./api";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("static"));
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`API Server Listening on port ${port}`);
});

export const App = app;

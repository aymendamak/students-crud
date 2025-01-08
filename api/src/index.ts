import express from "express";
import mysql from "mysql";
import cors from "cors";

import studentRouter from "./routes/student.router";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("pong");
});

const db = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to database");
  }
});

app.use("/api/v1/", studentRouter);

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

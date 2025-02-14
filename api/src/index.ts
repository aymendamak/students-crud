import express from "express";
import cors from "cors";

import studentRouter from "./routes/student.router";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("pong");
});

app.use("/api/v1/", studentRouter);

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});

import express from "express";
import mysql from "mysql";

export const getStudents = async (
  req: express.Request,
  res: express.Response
) => {
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
  const students = db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ error: "An error occurred" });
    } else {
      res.send(result);
    }
  });
};

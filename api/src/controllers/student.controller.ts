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

export const getStudentById = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

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
  const student = db.query(
    "SELECT * FROM student WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.json({ error: "An error occurred" });
      } else {
        res.send(result);
      }
    }
  );
};

export const createStudent = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("req.body", req.body);
  const { name, email } = req.body;
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
  const query = `INSERT INTO student (name, mail) VALUES ('${name}', '${email}')`;
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send("Student created successfully");
    }
  });
};

export const updateStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { name, email } = req.body;
  const { id } = req.params;
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

  const query = `UPDATE student SET name = '${name}', mail = '${email}' WHERE id = ${id}`;

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send("Student updated successfully");
    }
  });
};

export const deleteStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
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

  const query = `DELETE FROM student WHERE id = ${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send("Student deleted successfully");
    }
  });
};

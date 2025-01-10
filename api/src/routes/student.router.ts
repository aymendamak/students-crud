import { Router } from "express";

import {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller";

const studentRouter = Router();

studentRouter.get("/", getStudents);
studentRouter.post("/create", createStudent);
studentRouter.get("/read/:id", getStudentById);
studentRouter.put("/update/:id", updateStudent);
studentRouter.delete("/delete/:id", deleteStudent);

export default studentRouter;

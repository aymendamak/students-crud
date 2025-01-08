import { Router } from "express";

import { getStudents } from "../controllers/student.controller";

const studentRouter = Router();

studentRouter.get("/", getStudents);

export default studentRouter;

import { Router } from "express";
import {
  createTeacher,
  loginTeacher,
  getTeacher,
} from "../../controller/users/teacher.controller";

const router = Router();

router.post("/teacher", createTeacher);

router.post("/teacher/login", loginTeacher);

router.get("/teacher/:id", getTeacher);

export default router;

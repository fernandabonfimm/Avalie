import { Router } from "express";
import {
    createStudent,
    getStudentAnswersByPin,
} from "../../controller/users/student.controller";

const router = Router();

router.post("/student", createStudent);

router.get("/student/:pin", getStudentAnswersByPin);

export default router;



import { Router } from "express";
import { createAvaliation, getAvaliationByPin, getAllStudentAnswersByEvaluationPin } from "../../controller/avaliation/avaliation.controller";

const router = Router();

router.post("/avaliation", createAvaliation);

router.get("/avaliation/:pin", getAvaliationByPin);

router.get("/avaliation/answers/:pin", getAllStudentAnswersByEvaluationPin);

export default router;
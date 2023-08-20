import { Request, Response } from "express";
import Avaliation from "../../models/avaliation/avaliation.model";
import studentModel from "../../models/users/student.model";
import { Student } from "../../interfaces/users/student.interface";

function generateUniqueRandomPin(): number {
  const maxPin = 9999;
  const minPin = 1000;
  let pin = Math.floor(Math.random() * (maxPin - minPin + 1)) + minPin;
  return pin;
}

export const createAvaliation = async (req: Request, res: Response) => {
  try {
    let pin: number | undefined;
    let isUnique = false;

    while (!isUnique) {
      pin = generateUniqueRandomPin();
      const existingEvaluation = await Avaliation.findOne({ pin });
      if (!existingEvaluation) {
        isUnique = true;
      }
    }

    if (typeof pin !== "undefined") {
      const { teacherId, questions } = req.body;
      const avaliation = new Avaliation({ pin, teacherId, questions });
      await avaliation.save();
      res.status(201).json(avaliation);
    } else {
      res.status(500).json({ error: "Erro ao criar a sala com PIN", pin });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar a avaliação" });
  }
};

export const getAvaliationByPin = async (req: Request, res: Response) => {
  try {
    const { pin } = req.params;
    const avaliation = await Avaliation.findOne({ pin });
    if (avaliation) {
      res.status(200).json(avaliation);
    } else {
      res.status(404).json({ error: "Avaliação não encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar a avaliação" });
  }
};

export const getAllStudentAnswersByEvaluationPin = async (req: Request, res: Response) => {
  try {
    const { pin } = req.params;
    
    const evaluation = await Avaliation.findOne({ pin: parseInt(pin) });

    if (!evaluation) {
      return res.status(404).json({ error: 'Avaliação não encontrada com este PIN' });
    }

    const studentAnswers = await studentModel.find({ pin: parseInt(pin) });

    if (!studentAnswers || studentAnswers.length === 0) {
      return res.status(404).json({ error: 'Nenhuma resposta de estudante encontrada com este PIN de avaliação' });
    }

    const answers = studentAnswers.map((student: Student) => ({
      pin: student.pin,
      answer: student.answer,
    }));

    return res.json(answers);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar as respostas dos estudantes' });
  }
};
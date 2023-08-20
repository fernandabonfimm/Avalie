import { Request, Response } from "express";
import Student from "../../models/users/student.model";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { pin } = req.body;
    const student = new Student({ pin, answer: null });
    await student.save();
    res.status(201).json({
      message: "Aluno criado com sucesso!",
      student: {
        pin: student.pin,
        answer: student.answer,
      },
    });
    return res.status(201).json({ student });
  } catch (error) {
    console.log(error);
    if (error.message === 400) {
      res.status(400).send({ message: "Invalid PIN." });
    } else {
      res.status(500).send({ message: "Erro ao criar aluno." });
    }
  }
};

export const getStudentAnswersByPin = async (req: Request, res: Response) => {
  try {
    const { pin } = req.params;
    const student = await Student.findOne({ pin: parseInt(pin) });

    if (!student) {
      return res.status(404).json({ error: 'Estudante não encontrado' });
    }

    return res.json(student.answer);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar as respostas do estudante' });
  }
};  
import { Request, Response } from "express";
import Teacher from "../../models/users/teacher.model";

export const createTeacher = async (req: Request, res: Response) => {
  try {
   const  { username, password } = req.body;
    const teacher = new Teacher({ username, password });
    await teacher.save();
    return res.status(201).json({ teacher });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const loginTeacher = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const teacher = await Teacher.findOne({ username });
  if (!teacher) {
    return res.status(404).json({ error: "Professor não encontrado!" });
  }
  if (password !== teacher.password) {
    return res.status(401).json({ error: "Senha incorreta." });
  }
  return res.status(200).json({ teacher });
};

export const getTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teacher = await Teacher.findById(id);
  if (!teacher) {
    return res.status(404).json({ error: "Professor não encontrado!" });
  }
  return res.status(200).json({ teacher });
};

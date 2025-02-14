import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStudents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

export const getStudentById = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const student = await prisma.student.findUnique({
    where: { id: Number(id) },
  });
  res.json(student);
};

export const createStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { name, email } = req.body;
  const newStudent = await prisma.student
    .create({
      data: {
        name: name,
        email: email,
      },
    })
    .then((student) => {
      res.status(201).json(student);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const updateStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { name, email } = req.body;
  const { id } = req.params;

  const updatedStudent = await prisma.student
    .update({
      where: { id: Number(id) },
      data: {
        name: name,
        email: email,
      },
    })
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

export const deleteStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const deletedStudent = await prisma.student
    .delete({
      where: { id: Number(id) },
    })
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

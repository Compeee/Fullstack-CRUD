import {
  getAllPeople,
  deletePerson,
  addPerson,
  findPersonById,
  updatePersonWithId,
} from "../models/people";
import { Request, Response } from "express";

const getPeople = async (req: Request, res: Response) => {
  const people = await getAllPeople();
  res.json({ people: people });
};

const getPersonById = async (req: Request, res: Response) => {
  const personId = req.params.pid;
  const person = await findPersonById(personId);
};

const deletePersonById = async (req: Request, res: Response) => {
  const id = req.params.pid;
  const result = await deletePerson(id);
  if (!result) {
    console.log("Failed to delete the place");
  }
  res.status(200).json({ message: "Deleted the place." });
};

const addNewPerson = async (req: Request, res: Response) => {
  console.log(req.body);
  const { firstName, lastName, age } = req.body;
  const newPerson = {
    firstName,
    lastName,
    age,
  };
  const result = await addPerson(newPerson);

  if (result === null) {
    console.log("Failed to add person");
  }
  res.status(201).json({ person: newPerson });
};

const updatePersonById = async (req: Request, res: Response) => {
  const { first_name, last_name, age } = req.body;

  console.log(first_name + last_name + age);

  const personId = req.params.pid;

  const result = await updatePersonWithId(personId, first_name, last_name, age);
  console.log(result);
};
export { getPeople, deletePersonById, addNewPerson, updatePersonById };

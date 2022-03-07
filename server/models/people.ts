import pool from "../db/db";

const getAllPeople = async () => {
  const people = await pool.query("SELECT * FROM people");
  console.log(people);
  return people.rows;
};

const deletePerson = async (pid: string) => {
  const result = await pool.query("DELETE FROM people where id = $1", [pid]);
  console.log("delete", result);
  return result.rowCount !== 0;
};

const addPerson = async (person: {
  firstName?: string;
  lastName?: string;
  age: string;
  first_name?: string;
  last_name?: string;
}) => {
  const result = await pool.query(
    "INSERT INTO people (first_name, last_name, age) VALUES ($1, $2, $3)",
    [person.firstName, person.lastName, person.age]
  );
  console.log(result);
  return result.rows;
};

const updatePersonWithId = async (
  personId: string,
  first_name: string,
  last_name: string,
  age: string
) => {
  console.log(last_name);
  const result = await pool.query(
    "UPDATE people SET first_name=$1, last_name=$2, age=$3 WHERE id=$4",
    [first_name, last_name, age, personId]
  );
  return result.rowCount !== 0;
};

const findPersonById = async (pid: string) => {
  const person = await pool.query("SELECT * FROM places WHERE id=$1", [pid]);
  console.log("Person", person);
  return person.rows[0];
};
export {
  getAllPeople,
  deletePerson,
  addPerson,
  findPersonById,
  updatePersonWithId,
};

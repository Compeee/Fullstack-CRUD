import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import "./TableItems.css";
interface Person {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
}

export const TableItems: React.FC = () => {
  const [peopleData, setPeopleData] = useState<Person[]>([]);

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<string>();

  const [selectedPerson, setSelectedPerson] = useState<Person>();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const getPeople = () => {
    axios
      .get<Person[]>("http://localhost:5000/api/people")
      .then((response: AxiosResponse) => {
        setPeopleData(response.data.people);
      });
  };

  const addPersonHandler = () => {
    if (firstName && lastName && age && age) {
      axios
        .post<Person>("http://localhost:5000/api", { firstName, lastName, age })
        .then(() => getPeople());
    } else {
      console.log("Empty fields");
    }
  };
  const deleteHandler = (id: number) => {
    axios.delete(`http://localhost:5000/api/${id}`).then(() => getPeople());
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <tbody>
      {peopleData.map((person: Person) => (
        <tr key={person.id}>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.age}</td>
          <td>
            <button
              className="btn btn-edit"
              onClick={() => {
                setSelectedPerson(person);
                setOpenModal(true);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-del"
              onClick={() => deleteHandler(person.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}

      {openModal && <Modal id={selectedPerson?.id} closeModal={setOpenModal} />}

      <tr>
        <td>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </td>
        <td>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </td>
        <td>
          <input
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </td>
        <td>
          <button className="btn btn-add" onClick={() => addPersonHandler()}>
            Add
          </button>
        </td>
      </tr>
    </tbody>
  );
};

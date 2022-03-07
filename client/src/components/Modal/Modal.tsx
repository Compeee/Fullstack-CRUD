import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

interface Props {
  id: number | undefined;
  closeModal: (isOpen: boolean) => void;
}

export const Modal: React.FC<Props> = (props) => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<string>();
  
  const updatePerson = (pid: number | undefined) => {
    if (firstName && lastName && age) {
      axios.patch<Object>(`http://localhost:5000/api/${pid}`, {
        first_name: firstName,
        last_name: lastName,
        age: age,
      });
    } else {
      console.log("One of the fields was empty");
    }
  };

  const reload = () => window.location.reload();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => props.closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Edit</h1>
        </div>
        <div className="body">
          <input
            className="input"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            className="input"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <input
            className="input"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              updatePerson(props.id);
              props.closeModal(false);
              reload();
            }}
          >
            Confirm edit
          </button>
        </div>
      </div>
    </div>
  );
};

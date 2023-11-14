import React from "react";
import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
    };

    const namesMatch = persons.some((person) => person.name === newName);

    namesMatch
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(newPerson));

    setNewName("");
    event.target.reset();
  };

  return (
    <div style={{ margin: "10px" }}>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name={newName} onChange={handleInput} />
        </div>
        <div>
          <button
            type="submit"
            style={{ backgroundColor: "teal", margin: "10px" }}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;

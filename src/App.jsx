import React from "react";
import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";
import ListPersons from "./components/ListPersons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const namesMatch = persons.some((person) => person.name === newName);

    namesMatch
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(newPerson));

    setNewName("");
    setNewNumber("");
    event.target.reset();
  };

  return (
    <div style={{ margin: "10px" }}>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilter}></Filter>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
      ></Form>
      <h2>Numbers</h2>
      <ListPersons persons={persons} filter={filter}></ListPersons>
    </div>
  );
};

export default App;

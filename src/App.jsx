import React, { useEffect, useState } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import Form from "./components/Form";
import ListPersons from "./components/ListPersons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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

    if (namesMatch) {
      const personToUpdate = persons.find((person) => person.name === newName);

      const confirmation = window.confirm(
        `${personToUpdate.name} is already added to the phonebook. Do you want to replace the old number with the new one?`
      );

      if (confirmation) {
        personService
          .update(personToUpdate.id, {
            ...personToUpdate,
            number: newNumber,
          })
          .then((personToUpdate) => {
            setPersons(
              persons.map((person) =>
                person.id === personToUpdate.id ? personToUpdate : person
              )
            );
            setErrorMessage(
              `${personToUpdate.name}'s number was updated to the phonebook`
            );
          });
      } else {
        setErrorMessage("No changes made");
      }
    } else {
      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setErrorMessage(`${newName} was added to the phonebook`);
      });
    }

    setNewName("");
    setNewNumber("");
    event.target.reset();
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    const deletionConfirmed = window.confirm(
      `Do you want to remove ${personToDelete.name} from the phonebook?`
    );

    return deletionConfirmed
      ? personService.remove(id).then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setErrorMessage(
            `${personToDelete.name} was removed from the phonebook`
          );
        })
      : setErrorMessage("Deletion canceled");
  };

  return (
    <div>
      <Notification message={errorMessage} />
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
      <ListPersons
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      ></ListPersons>
    </div>
  );
};

export default App;

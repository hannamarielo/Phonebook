import Person from "./Person";

const ListPersons = ({ persons, filter, deletePerson }) => {
  return persons
    .filter(
      (person) =>
        filter === "" ||
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person) => (
      <div key={person.name}>
        <Person person={person} deletePerson={deletePerson} />
      </div>
    ));
};

export default ListPersons;

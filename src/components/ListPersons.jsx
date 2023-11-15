import Person from "./Person";

const ListPersons = ({ persons, filter }) => {
  return persons
    .filter(
      (person) =>
        filter === "" ||
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person) => <Person key={person.name} person={person} />);
};

export default ListPersons;

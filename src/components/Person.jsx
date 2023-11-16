import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <div>
      <li>
        {person.name} {person.number}
      </li>
      <button onClick={() => deletePerson(person.id)}>Delete </button>
    </div>
  );
};

export default Person;

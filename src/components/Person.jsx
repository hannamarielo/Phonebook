import React from "react";

const Person = ({ person, deletePerson }) => {
  const buttonStyle = {
    color: "white",
    background: "teal",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    display: "inline-block",
  };

  return (
    <div>
      <p>
        {person.name} {person.number}
      </p>
      <button onClick={() => deletePerson(person.id)} style={buttonStyle}>
        Delete{" "}
      </button>
    </div>
  );
};

export default Person;

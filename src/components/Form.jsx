import React from "react";

const Form = ({
  newName,
  newNumber,
  handleName,
  handleNumber,
  handleSubmit,
}) => {
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

  const inputStyle = {
    margin: 5,
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input name={newName} onChange={handleName} style={inputStyle} />
      </div>
      <div>
        Number:{" "}
        <input name={newNumber} onChange={handleNumber} style={inputStyle} />
      </div>
      <div>
        <button type="submit" style={buttonStyle}>
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;

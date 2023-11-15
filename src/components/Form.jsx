import React from "react";

const Form = ({
  newName,
  newNumber,
  handleName,
  handleNumber,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input name={newName} onChange={handleName} />
      </div>
      <div>
        Number: <input name={newNumber} onChange={handleNumber} />
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
  );
};

export default Form;

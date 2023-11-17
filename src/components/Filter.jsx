const inputStyle = {
  margin: 5,
};
const Filter = ({ value, onChange }) => (
  <div>
    Filter by name:{" "}
    <input value={value} onChange={onChange} style={inputStyle} />
  </div>
);

export default Filter;

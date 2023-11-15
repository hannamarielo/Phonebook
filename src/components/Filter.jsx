const Filter = ({ value, onChange }) => (
  <div>
    Filter by name: <input value={value} onChange={onChange} />
  </div>
);

export default Filter;

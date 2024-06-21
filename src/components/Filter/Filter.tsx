const Filter = ({ handleChangeFilter }) => {
  const handleChange = (e) => {
    handleChangeFilter(e.target.value);
  };

  return (
    <label htmlFor="filter" className="todo-filter">
      <input
        type="text"
        name="filter"
        placeholder="Фильтр задач"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;

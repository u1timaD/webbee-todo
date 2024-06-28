import { ChangeEvent } from 'react';

type FilterProps = {
  handleChangeFilter: (filterValue: string) => void;
};

const Filter: React.FC<FilterProps> = ({ handleChangeFilter }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

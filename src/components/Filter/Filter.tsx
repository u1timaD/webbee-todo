import { ChangeEvent } from 'react';
import { FilterLabelStyled } from './Filter.styled';
import Input from '../Input/Input';
import { FilterProps } from './Filter.types';

const Filter = ({ handleChangeFilter }: FilterProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeFilter(e.target.value);
  };

  return (
    <FilterLabelStyled>
      <Input
        type="text"
        name="filter"
        placeholder="Фильтр задач"
        onChange={handleChange}
      />
    </FilterLabelStyled>
  );
};

export default Filter;

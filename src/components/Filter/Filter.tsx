import { ChangeEvent } from 'react';
import { FilterLabelStyled } from './Filter.styled';
import Input from '../Input/Input';
import { FilterProps } from './Filter.types';
import debounce from 'lodash.debounce';

const Filter = ({ handleChangeFilter }: FilterProps) => {

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    handleChangeFilter(e.target.value);
  }, 1000);

  return (
    <FilterLabelStyled>
      <Input
        type="text"
        name="filter"
        placeholder="Фильтр задач"
        onChange={handleOnChange}
      />
    </FilterLabelStyled>
  );
};

export default Filter;

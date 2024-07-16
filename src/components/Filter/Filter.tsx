import { ChangeEvent, useContext } from 'react';
import { FilterLabelStyled } from './Filter.styled';
import Input from '../Input/Input';
import debounce from 'lodash.debounce';
import { SetFilterContext } from '../../providers/FilterProvider';

const Filter = () => {
  const setTaskFilter = useContext(SetFilterContext);
  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setTaskFilter(e.target.value);
  }, 500);

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

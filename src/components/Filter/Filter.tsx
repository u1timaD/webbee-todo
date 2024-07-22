import { ChangeEvent } from 'react';
import { FilterLabelStyled } from './Filter.styled';
import Input from '../Input/Input';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setTaskFilter } from '../../redux/todoSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskFilter(e.target.value));
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

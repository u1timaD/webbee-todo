import React from 'react';
import { FilterContextType, FilterProviderType } from './Provider.types';

export const FilterContext = React.createContext<FilterContextType>({
  taskFilter: '',
  setTaskFilter: () => {},
});

const FilterProvider = ({ children }: FilterProviderType) => {
  const [taskFilter, setTaskFilter] = React.useState('');

  return (
    <FilterContext.Provider value={{ taskFilter, setTaskFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

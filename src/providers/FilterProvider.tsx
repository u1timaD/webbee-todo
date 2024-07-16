import React from 'react';
import {
  FilterContextType,
  FilterProviderType,
  SetFilterContextType,
} from './Provider.types';

export const FilterContext = React.createContext<FilterContextType>('');

export const SetFilterContext = React.createContext<SetFilterContextType>(() => {});

const SecondProvider = ({ children }: FilterProviderType) => {
  const [taskFilter, setTaskFilter] = React.useState('');

  return (
    <FilterContext.Provider value={ taskFilter }>
      <SetFilterContext.Provider value={ setTaskFilter }>
        {children}
      </SetFilterContext.Provider>
    </FilterContext.Provider>
  );
};

export default SecondProvider;

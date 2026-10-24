
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext.jsx';
export const useFiltered = ()=> useContext(FilterContext);

import React from 'react';
import { FilterButton, FilterText, SelectedFilterText } from './styles';
import { FilterTypes } from '../atomType';

const Filter: React.FC<FilterTypes> = ({ label, selectedValue, onSelect, onClear, isSelected }) => {
  return (
    <FilterButton onClick={onSelect}>
      <FilterText>{label}:</FilterText>
      <SelectedFilterText>{selectedValue}</SelectedFilterText>
      {isSelected && (
        <button onClick={(e) => {
          e.stopPropagation();
          onClear(e);
        }}>
          취소
        </button>
      )}
    </FilterButton>
  );
};

export default Filter;
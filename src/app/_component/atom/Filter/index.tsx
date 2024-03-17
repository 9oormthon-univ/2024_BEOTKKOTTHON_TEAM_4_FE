import React from 'react';
import { FilterButton, FilterText, SelectedFilterText } from './styles';
import { FilterTypes } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';

const Filter: React.FC<FilterTypes> = ({ label, selectedValue, onSelect, onClear, isSelected }) => {
  return (
    <FilterButton onClick={onSelect}>
      <FilterText>{label}:</FilterText>
      <SelectedFilterText>{selectedValue}</SelectedFilterText>
      {isSelected && (
        <button onClick={(e) => {
          e.stopPropagation();
          onClear(e);
        }} style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}>
          <Image
            src={Images.circle_x_fill}
            alt="취소"
            width={20}
            height={20}
          />
        </button>
      )}
    </FilterButton>
  );
};

export default Filter;

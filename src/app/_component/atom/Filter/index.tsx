import React from 'react';
import { FilterButton, FilterText, SelectedFilterText } from './styles';
import { FilterTypes } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';

const Filter: React.FC<FilterTypes> = ({ label, selectedValue, onSelect, onClear, isSelected }) => {
  const isDefaultSelected = selectedValue === '전체' || selectedValue === '해당 없음';

  return (
    <FilterButton onClick={onSelect}>
      <FilterText>{label}:</FilterText>
      <SelectedFilterText isDefaultSelected={isDefaultSelected}>{selectedValue}</SelectedFilterText>
      {isSelected && (
        <button onClick={(e) => {
          e.stopPropagation();
          onClear(e);
        }} style={{ border: 'none', background: 'transparent', padding: 0, cursor: 'pointer', marginTop: '3px' }}>  {/* marginTop 값을 3px로 설정 */}
          <Image
            src={Images.circle_x_fill}
            alt="필터 적용 취소"
            width={20}
            height={20}
          />
        </button>
      )}
    </FilterButton>
  );
};

export default Filter;

import React from 'react';
import { FilterButton, FilterText, SelectedFilterText } from './styles';
import { FilterTypes } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';

const Filter: React.FC<FilterTypes> = ({
  label,
  selectedValue,
  onSelect,
  onClear,
  isSelected,
}) => {
  //이거는 필터에서 아예 선택되지 않은 상태의 기본 텍스트들에 대해서 색 지정되지 말라고 여기서 해줬습니다.
  // 다른 컴포넌트에서 쓰실 때 그 컴포넌트에서 기본 값 텍스트들을 아래의 selectedValue에 넣어주시면 됩니다!
  const isDefaultSelected =
    selectedValue === '전체' || selectedValue === '해당 없음';

  return (
    <FilterButton onClick={onSelect}>
      <FilterText>{label}</FilterText>
      <SelectedFilterText isDefaultSelected={isDefaultSelected}>
        {selectedValue}
      </SelectedFilterText>
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear(e);
          }}
          style={{
            border: 'none',
            background: 'transparent',
            padding: 0,
            cursor: 'pointer',
            marginTop: '3px',
          }}
        >
          {' '}
          {/* marginTop 값을 3px로 설정 */}
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

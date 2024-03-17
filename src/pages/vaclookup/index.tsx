import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import VacLookupFixed from '@/app/_component/organism/vaclookupFixed';
import { Images } from '@globalStyles';
import Image from 'next/image';
import Filter from '@/app/_component/atom/Filter';
import { introMessages, ageRanges, situationRanges } from '@/constants';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import FilterModal from '@/app/_component/organism/filterModal';

const PageContainer = styled.div``;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState('필수예방접종');
  const [ageFilter, setAgeFilter] = useState('전체');
  const [sitFilter, setSitFilter] = useState('해당 없음');
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isSitModalOpen, setIsSitModalOpen] = useState(false);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState<string[]>([]);
  const [selectedSitOptions, setSelectedSitOptions] = useState<string[]>([]);

  const handleAgeSelect = (selectedOptions: string[]) => {
    const selectedText =
      selectedOptions.length > 0 ? selectedOptions.join(', ') : '전체';
    setAgeFilter(selectedText);
    setIsAgeModalOpen(false);
  };

  const handleSitSelect = (selectedOptions: string[]) => {
    const selectedText =
      selectedOptions.length > 0 ? selectedOptions.join(', ') : '해당 없음';
    setSitFilter(selectedText);
    setIsSitModalOpen(false);
  };

  const resetAgeOptions = () => {
    setSelectedAgeOptions([]);
  };

  const resetSitOptions = () => {
    setSelectedSitOptions([]);
  };

  const clearAgeFilter = () => {
    setAgeFilter('전체');
    setSelectedAgeOptions([]);
  };

  const clearSitFilter = () => {
    setSitFilter('해당 없음');
    setSelectedSitOptions([]);
  };

  return (
    <div>
      <VacLookupFixed
        selectedSection={selectedSection}
        handleSectionChange={setSelectedSection}
        messages={introMessages}
      />
      <PageContainer>
        <FiltersContainer>
          <Image
            src={
              ageFilter === '전체' && sitFilter === '해당 없음'
                ? Images.adjustment_unselec
                : Images.adjustment_selec
            }
            alt="Filter Icon"
            width={24}
            height={24}
          />
          <Filter
            label="연령"
            selectedValue={ageFilter}
            onSelect={() => setIsAgeModalOpen(true)}
            onClear={clearAgeFilter}
            isSelected={ageFilter !== '전체'}
          />
          <Filter
            label="상황"
            selectedValue={sitFilter}
            onSelect={() => setIsSitModalOpen(true)}
            onClear={clearSitFilter}
            isSelected={sitFilter !== '해당 없음'}
          />
        </FiltersContainer>
        <Fragment>
          <FilterModal
            isOpen={isAgeModalOpen}
            title="연령"
            options={ageRanges}
            selectedOptions={selectedAgeOptions}
            onClose={() => setIsAgeModalOpen(false)}
            onOptionSelect={handleAgeSelect}
            onReset={resetAgeOptions}
          />
          <FilterModal
            isOpen={isSitModalOpen}
            title="상황"
            options={situationRanges}
            selectedOptions={selectedSitOptions}
            onClose={() => setIsSitModalOpen(false)}
            onOptionSelect={handleSitSelect}
            onReset={resetSitOptions}
          />
        </Fragment>
        <p>선택된 섹션: {selectedSection}우선 구분용입니다~</p>
      </PageContainer>
      <NavigationFixed />
    </div>
  );
}

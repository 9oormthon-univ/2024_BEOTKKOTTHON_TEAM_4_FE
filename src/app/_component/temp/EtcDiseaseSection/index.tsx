import React, { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import Filter from '@/app/_component/atom/Filter';
import FilterModal from '@/app/_component/organism/filterModal';
import { Images } from '@globalStyles';
import Image from 'next/image';
import NationDiseaseCard from '@/app/_component/atom/NationDiseaseCard';
import { ageRanges, situationRanges } from '@/constants';
import { EtcDiseaseList } from '@/utils/etc-disease-api';

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  gap: 6px;
  margin-left: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  z-index: 1000px;
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const DiseaseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: left;
  margin-bottom: 100px;
  margin-left: 20px;
  justify-content: space-between;
  margin: 0 20px 20px 20px;
  gap: 14px;

  & > div {
    width: calc(50% - 7px);
  }
  margin-bottom:100px;
`;

const EtcDiseaseSection = ({ selectedSection }) => {
  const [ageFilter, setAgeFilter] = useState('전체');
  const [sitFilter, setSitFilter] = useState('해당 없음');
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isSitModalOpen, setIsSitModalOpen] = useState(false);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState([]);
  const [selectedSitOptions, setSelectedSitOptions] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);

  useEffect(() => {
    console.log('필터링 시작', { ageFilter, sitFilter });
  
    const filterDiseases = () => {
      const ageIndex = ageFilter === '전체' ? -1 : ageRanges.indexOf(ageFilter);
      const sitIndex = sitFilter === '해당 없음' ? -1 : situationRanges.indexOf(sitFilter);
  
      const filtered = EtcDiseaseList.filter((disease) => {
        const ageCondition = ageIndex === -1 ? disease.age.some(v => v === 1) : disease.age[ageIndex] === 1;
        const sitCondition = sitIndex === -1 ? disease.sit.some(v => v === 1) : disease.sit[sitIndex] === 1;
        return ageCondition && sitCondition;
      });
  
      setDiseaseList(filtered);
      console.log('필터링 결과', filtered);
    };
  
    filterDiseases();
  }, [ageFilter, sitFilter]);

  const handleAgeSelect = (selectedOptions: string[]) => {
    setSelectedAgeOptions(selectedOptions);
    let text = selectedOptions[0] || '전체';

    if (selectedOptions.length > 1) {
      text =
        text.length > 8
          ? `${text.slice(0, 6)}... 외 ${selectedOptions.length - 1}건`
          : `${text} 외 ${selectedOptions.length - 1}건`;
    }
    console.log('Age Filter:', text);
    setAgeFilter(text);
    setIsAgeModalOpen(false);
  };

  const handleSitSelect = (selectedOptions: string[]) => {
    setSelectedSitOptions(selectedOptions);
    let text = selectedOptions[0] || '해당 없음';

    if (selectedOptions.length > 1) {
      text =
        text.length > 8
          ? `${text.slice(0, 6)}... 외 ${selectedOptions.length - 1}건`
          : `${text} 외 ${selectedOptions.length - 1}건`;
    }
    console.log('Situation Filter:', text);
    setSitFilter(text);
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
          label="연령 :"
          selectedValue={ageFilter}
          onSelect={() => setIsAgeModalOpen(true)}
          onClear={clearAgeFilter}
          isSelected={ageFilter !== '전체'}
        />
        <Filter
          label="상황 :"
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
      <DiseaseContainer>
        {diseaseList.map((disease) => (
          <NationDiseaseCard
            key={disease.id}
            id={disease.id}
            diseaseName={disease.vacName}
            imageUrl={disease.iconsImage}
            diseaseSub={disease.vacSub}
          />
        ))}
      </DiseaseContainer>
    </div>
  );
};

export default EtcDiseaseSection;

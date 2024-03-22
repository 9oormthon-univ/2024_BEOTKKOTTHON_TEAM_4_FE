import React, { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import Filter from '@/app/_component/atom/Filter';
import FilterModal from '@/app/_component/organism/filterModal';
import { Images } from '@globalStyles';
import Image from 'next/image';
import DiseaseCard from '@/app/_component/atom/DiseaseCard';
import { ageRanges, situationRanges } from '@/constants';
import { essentialDiseaseList } from '@/utils/essential-disease-api';

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
  justify-content: center;
`;

const EssentialDiseaseSection = ({ selectedSection }) => {
  const [ageFilter, setAgeFilter] = useState('전체');
  const [sitFilter, setSitFilter] = useState('해당 없음');
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isSitModalOpen, setIsSitModalOpen] = useState(false);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState([]);
  const [selectedSitOptions, setSelectedSitOptions] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);

  useEffect(() => {
    const fetchDiseaseList = async () => {
      const data = await getDiseaseListForSection(selectedSection);
      setDiseaseList(data);
    };

    fetchDiseaseList();
  }, [selectedSection]);

  useEffect(() => {
    // 필터링 로직
    const filterDiseases = () => {
      const ageIndex = ageRanges.indexOf(ageFilter) - 1; // "전체"를 제외한 인덱스
      const sitIndex = situationRanges.indexOf(sitFilter) - 1; // "해당 없음"을 제외한 인덱스

      // 연령과 상황에 맞는 질병만 필터링
      const filteredDiseases = essentialDiseaseList.filter((disease) => {
        // 연령 필터 확인
        const ageMatch = ageFilter === '전체' || disease.age[ageIndex] === 1;
        // 상황 필터 확인
        const situationMatch = sitFilter === '해당 없음' || disease.sit[sitIndex] === 1;

        return ageMatch && situationMatch;
      });

      setDiseaseList(filteredDiseases);
    };

    filterDiseases();
  }, [ageFilter, sitFilter, essentialDiseaseList]);

  const handleAgeSelect = (selectedOptions: string[]) => {
    setSelectedAgeOptions(selectedOptions);
    let text = selectedOptions[0] || '전체';

    if (selectedOptions.length > 1) {
      text =
        text.length > 8
          ? `${text.slice(0, 6)}... 외 ${selectedOptions.length - 1}건`
          : `${text} 외 ${selectedOptions.length - 1}건`;
    }
  console.log('Age Filter:', text); // 상태가 업데이트된 후 로그를 확인
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
      <DiseaseContainer>
        {essentialDiseaseList.map((disease) => (
          <DiseaseCard
            key={disease.id}
            id={disease.id}
            diseaseName={disease.vacName}
            imageUrl={disease.iconsImage}
          />
        ))}
      </DiseaseContainer>
    </div>
  );
};

export default EssentialDiseaseSection;

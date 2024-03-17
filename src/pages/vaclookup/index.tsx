import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
//메인헤더와 세션헤더,안내 문구 컴포넌트 고정된 값의 organism
import VacLookupFixed from '@/app/_component/organism/vaclookupFixed';
import { Images } from '@globalStyles';
import Image from 'next/image';
import Filter from '@/app/_component/atom/Filter';
import { introMessages, ageRanges, situationRanges } from '@/constants';

const PageContainer = styled.div``;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  color: black;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: auto;
  max-width: 90%;
`;

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

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const [ageFilter, setAgeFilter] = useState('전체');
  const [sitFilter, setSitFilter] = useState('해당 없음');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isSitModalOpen, setIsSitModalOpen] = useState(false);

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleAgeSelect = (age) => {
    setAgeFilter(age);
    setIsAgeModalOpen(false);
  };

  const handleSitSelect = (sit) => {
    setSitFilter(sit);
    setIsSitModalOpen(false);
  };

  const handleClearFilter = () => {
    setAgeFilter('전체');
    setSitFilter('해당 없음');
    setIsAgeModalOpen(false);
    setIsSitModalOpen(false);
  };

  const handleAgeFilterClick = () => {
    setIsAgeModalOpen(true);
    setIsSitModalOpen(false);
  };

  const handleSitFilterClick = () => {
    setIsSitModalOpen(true);
    setIsAgeModalOpen(false);
  };

  const handleClearAgeFilter = () => {
    setAgeFilter('전체');
    setIsAgeModalOpen(false);
  };

  const handleClearSitFilter = () => {
    setSitFilter('해당 없음');
    setIsSitModalOpen(false);
  };

  return (
    <div>
      <VacLookupFixed
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
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
            onSelect={handleAgeFilterClick}
            onClear={handleClearAgeFilter}
            isSelected={ageFilter !== '전체'}
          />
          <Filter
            label="상황"
            selectedValue={sitFilter}
            onSelect={handleSitFilterClick}
            onClear={handleClearSitFilter}
            isSelected={sitFilter !== '해당 없음'}
          />
        </FiltersContainer>
        <Fragment>
          {isAgeModalOpen && (
            <Modal>
              {ageRanges.map((age) => (
                <div
                  key={age}
                  onClick={() => handleAgeSelect(age)}
                  style={{ padding: '10px', cursor: 'pointer' }}
                >
                  {age}
                </div>
              ))}
            </Modal>
          )}
          {isSitModalOpen && (
            <Modal>
              {situationRanges.map((sit) => (
                <div
                  key={sit}
                  onClick={() => handleSitSelect(sit)}
                  style={{ padding: '10px', cursor: 'pointer' }}
                >
                  {sit}
                </div>
              ))}
            </Modal>
          )}
        </Fragment>
        <p>선택된 섹션: {selectedSection}우선 구분용입니다~</p>
      </PageContainer>
    </div>
  );
}

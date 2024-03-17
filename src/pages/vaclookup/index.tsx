import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
//메인헤더와 세션헤더,안내 문구 컴포넌트 고정된 값의 temp
import VacLookupFixed from '@/app/_component/temp/vaclookupFixed';
import { Images } from '@globalStyles';
import Image from 'next/image';

const PageContainer = styled.div``;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 33px;
  padding: 8px 12px;
  background: #f2f4f6;
  border-radius: 100px;
  border: none;
  cursor: pointer;
`;

const FilterText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #8b95a1;
`;

const SelectedFilterText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #4196fd;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  color:black;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: auto;
  max-width: 90%;
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState('필수예방접종');
  const messages = {
    필수예방접종:
      '감염병의 예방 및 관리에 관한 법률을 통해 국가가 권장하는 예방접종이예요.',
    국가예방접종:
      '필수예방접종에 대해 국가에서 지정한 백신으로, 보건소와 지정의료기관에서 예방접종 비용을 지원하는 백신이예요.',
    기타예방접종:
      '국가예방접종 대상 백신 외에 의료기관에서 유료로 접종받을 수 있는 예방 접종이예요.',
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const [ageFilter, setAgeFilter] = useState('전체');
  const [sitFilter, setSitFilter] = useState('해당 없음');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isSitModalOpen, setIsSitModalOpen] = useState(false);

  const ageRanges = [
    '전체',
    '만 19-29세',
    '만 30-39세',
    '만 40-49세',
    '만 50-59세',
    '만 60-64세',
    '만 65세이상',
  ];

  const situationRanges = [
    '해당 없음',
    '당뇨병',
    '만성 심혈관질환',
    '만성 폐질환',
    '만성 신질환',
    '만성 간질',	
    '항암 치료 중인 고형암',	
    '이식 이외 면역억제제 사용',
    '장기이식',	
    '조혈모 세포이식',
    '무비증',	
    'HIV 감염: CD4<200/mm3',	
    'HIV 감염: CD4≥200/mm3',	
    '임신부',	
    '의료기관 종사자'
  ]

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
        messages={messages}
      />
      <PageContainer>
      {ageFilter === '전체' && sitFilter === '해당 없음' ? (
        <Image src={Images.adjustment_unselec} alt="Adjustment Unselected" />
      ) : (
        <Image src={Images.adjustment_selec} alt="Adjustment Selected" />
      )}

      <FilterButton onClick={handleAgeFilterClick}>
        <FilterText>연령: </FilterText>
        <SelectedFilterText>{ageFilter}</SelectedFilterText>
        {ageFilter !== '전체' && (
          <button onClick={handleClearAgeFilter}>취소</button>
        )}
      </FilterButton>
      <FilterButton onClick={handleSitFilterClick}>
        <FilterText>상황: </FilterText>
        <SelectedFilterText>{sitFilter}</SelectedFilterText>
        {sitFilter !== '해당 없음' && (
          <button onClick={handleClearSitFilter}>취소</button>
        )}
      </FilterButton>
        <Fragment>
          {isAgeModalOpen && (
            <Modal>
              {ageRanges.map((age) => (
                <div key={age} onClick={() => handleAgeSelect(age)} style={{ padding: '10px', cursor: 'pointer' }}>
                  {age}
                </div>
              ))}
            </Modal>
          )}
          {isSitModalOpen && (
            <Modal>
              {situationRanges.map((sit) => (
                <div key={sit} onClick={() => handleSitSelect(sit)} style={{ padding: '10px', cursor: 'pointer' }}>
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

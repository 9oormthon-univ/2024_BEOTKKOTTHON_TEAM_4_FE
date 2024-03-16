import React, { useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding-top: 54px;
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState("필수예방접종");

  const sectionTexts = ["필수예방접종", "국가예방접종", "기타예방접종"];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <MainHeader title="백신정보" />
      <SectionHeader sections={sectionTexts} onSectionChange={handleSectionChange} />
      <PageContainer>
        <p>선택된 섹션: {selectedSection}우선 구분용입니다~</p>
      </PageContainer>
    </>
  );
}
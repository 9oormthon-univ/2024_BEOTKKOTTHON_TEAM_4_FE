import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import VacLookupFixed from '@/app/_component/organism/vaclookupFixed';
import { introMessages, ageRanges, situationRanges } from '@/constants';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import EssentialDiseaseSection from '@/app/_component/temp/EssentialDiseaseSection'


const PageContainer = styled.div`
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState('필수예방접종');

  return (
    <div>
      <VacLookupFixed
        selectedSection={selectedSection}
        handleSectionChange={setSelectedSection}
        messages={introMessages}
      />
      <PageContainer>
        {selectedSection === '필수예방접종' && (
          <EssentialDiseaseSection selectedSection={selectedSection} />
        )}
        {/* 필요에 따라 다른 섹션들을 위한 조건부 렌더링을 추가하세요 */}
      </PageContainer>
      <NavigationFixed />
    </div>
  );
}
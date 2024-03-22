import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import VacLookupFixed from '@/app/_component/organism/vaclookupFixed';
import { introMessages, ageRanges, situationRanges } from '@/constants';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import EssentialDiseaseSection from '@/app/_component/temp/EssentialDiseaseSection'
import NationDiseaseSection from '@/app/_component/temp/NationDiseaseSection';
import EtcDiseaseSection from '@/app/_component/temp/EtcDiseaseSection';

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
        {selectedSection === '국가예방접종' && (
          <NationDiseaseSection selectedSection={selectedSection} />
        )}
        {selectedSection === '기타예방접종' && (
          <EtcDiseaseSection selectedSection={selectedSection} />
        )}
      </PageContainer>
      <NavigationFixed />
    </div>
  );
}
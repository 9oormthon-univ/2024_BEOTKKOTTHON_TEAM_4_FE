import React, { useState } from 'react';
import styled from '@emotion/styled';
//메인헤더와 세션헤더,안내 문구 컴포넌트 고정된 값의 temp 
import VacLookupFixed from '@/app/_component/temp/vaclookupFixed';

const PageContainer = styled.div`
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState("필수예방접종");
  const messages = {
    "필수예방접종": "감염병의 예방 및 관리에 관한 법률을 통해 국가가 권장하는 예방접종이예요.",
    "국가예방접종": "필수예방접종에 대해 국가에서 지정한 백신으로, 보건소와 지정의료기관에서 예방접종 비용을 지원하는 백신이예요.",
    "기타예방접종": "국가예방접종 대상 백신 외에 의료기관에서 유료로 접종받을 수 있는 예방 접종이예요."
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <VacLookupFixed
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
        messages={messages}
      />
      <PageContainer>
        <p>선택된 섹션: {selectedSection}우선 구분용입니다~</p>
      </PageContainer>
    </div>
  );
}
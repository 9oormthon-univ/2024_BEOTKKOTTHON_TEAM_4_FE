import React, { useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import Information from '@/app/_component/atom/Information';
import styled from '@emotion/styled';

const PageContainer = styled.div`
`;

export default function VacLookup() {
  const [selectedSection, setSelectedSection] = useState("필수예방접종");
  const sectionTexts = ["필수예방접종", "국가예방접종", "기타예방접종"];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const messages = {
    "필수예방접종": "감염병의 예방 및 관리에 관한 법률을 통해 국가가 권장하는 예방접종이예요.",
    "국가예방접종": "필수예방접종에 대해 국가에서 지정한 백신으로, 보건소와 지정의료기관에서 예방접종 비용을 지원하는 백신이예요.",
    "기타예방접종": "국가예방접종 대상 백신 외에 의료기관에서 유료로 접종받을 수 있는 예방 접종이예요."
  };

  return (
    <>
      <MainHeader title="백신정보" />
      <SectionHeader sections={sectionTexts} onSectionChange={handleSectionChange} />
      <PageContainer>
        <Information
          message={messages[selectedSection]}
          containerProps={{
            background: '#F2F4F6',
            padding: '15px 20px',
            gap: '14px'
          }}
          iconProps={{
            className: 'material-icons',
            color: '#6B7684',
            marginRight: '10px'
          }}
          textProps={{
            fontFamily: 'Pretendard, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.03em',
            textAlign: 'left',
            color: '#6B7684'
          }}
        />
        <p>선택된 섹션: {selectedSection}우선 구분용입니다~</p>
      </PageContainer>
    </>
  );
}
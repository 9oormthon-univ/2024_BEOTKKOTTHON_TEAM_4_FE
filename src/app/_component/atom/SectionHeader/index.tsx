import React, { useState } from 'react';
import styled from '@emotion/styled';

const SectionHeaderContainer = styled.div`
  display: flex;
  height: 52px;
  width: 100%;
`;

const Section = styled.div`
  flex: 1;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ isSelected }) => (isSelected ? '#333D4B' : '#E5E8EB')};
  color: ${({ isSelected }) => (isSelected ? '#333D4B' : '#8B95A1')};
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
`;
// 타입으로 작성 X-> 이 헤더 가져다 쓰는 상위 컴포넌트에서 세션 텍스트만 넣어주면 자동으로 됩니다!
// 그 텍스트는 배열에 작성하면 됩니다
// 예시  : const sectionTexts = ["필수예방접종", "국가예방접종", "기타예방접종"];

const SectionHeader = ({ sections, onSectionChange }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    onSectionChange(section);
  };

  return (
    <SectionHeaderContainer>
      {sections.map((sectionText) => (
        <Section
          key={sectionText}
          isSelected={sectionText === selectedSection}
          onClick={() => handleSectionClick(sectionText)}
        >
          {sectionText}
        </Section>
      ))}
    </SectionHeaderContainer>
  );
};

export default SectionHeader;

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

const sections = ["필수예방접종", "국가예방접종", "기타예방접종"];

const SectionHeader = ({ onSectionChange }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    onSectionChange(section);
  };

  return (
    <SectionHeaderContainer>
      {sections.map((section) => (
        <Section
          key={section}
          isSelected={section === selectedSection}
          onClick={() => handleSectionClick(section)}
        >
          {section}
        </Section>
      ))}
    </SectionHeaderContainer>
  );
};

export default SectionHeader;

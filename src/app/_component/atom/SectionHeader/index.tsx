import React, { useState } from 'react';
import { SectionHeaderContainer, Section } from './styles';
import { SectionHeaderProps } from '@/app/_component/atom/atomType';

// 이 헤더 가져다 쓰는 상위 컴포넌트에서 세션 텍스트만 넣어주면 자동으로 됩니다!
// 그 텍스트는 배열에 작성하면 됩니다!
// 예시  : const sectionTexts = ["필수예방접종", "국가예방접종", "기타예방접종"];

const SectionHeader: React.FC<SectionHeaderProps> = ({ sections, onSectionChange }) => {
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
          onClick={() => handleSectionClick(sectionText)}
          style={{
            borderBottomColor: sectionText === selectedSection ? "#333D4B" : "#E5E8EB",
            color: sectionText === selectedSection ? "#333D4B" : "#8B95A1",
            fontWeight: sectionText === selectedSection ? 600 : 400,
          }}
        >
          {sectionText}
        </Section>
      ))}
    </SectionHeaderContainer>
  );
};

export default SectionHeader;

import React from 'react';
import MainHeader from '@/app/_component/atom/MainHeader';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import Information from '@/app/_component/atom/Information';

interface VacLookupFixedProps {
  selectedSection: string;
  handleSectionChange: (section: string) => void;
  messages: { [key: string]: string };
}

const VacLookupFixed: React.FC<VacLookupFixedProps> = ({ selectedSection, handleSectionChange, messages }) => {
  const sectionTexts = ["필수예방접종", "국가예방접종", "기타예방접종"];

  return (
    <>
      <MainHeader title="백신정보" />
      <SectionHeader sections={sectionTexts} onSectionChange={handleSectionChange} />
      <Information
        message={messages[selectedSection]}
        containerProps={{
          background: '#F2F4F6',
          padding: '15px 20px',
          gap: '14px'
        }}
        iconProps={{
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
    </>
  );
};

export default VacLookupFixed;

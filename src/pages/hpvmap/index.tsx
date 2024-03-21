import React, { useState } from 'react';
import HpvHospitalMap from "@/app/_component/temp/hpvhospitalmap";
import MainHeader from '@/app/_component/atom/RouteHeader';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import SupportIntro from '@/app/_component/temp/hpvsupportIntro';

export default function Map() {
  const [selectedSection, setSelectedSection] = useState("병원 조회");
  const sectionTexts = ["병원 조회", "지원사업 소개"];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <MainHeader title="HPV 국가예방접종 지원사업" url="/map" />
      <SectionHeader sections={sectionTexts} onSectionChange={handleSectionChange} />
      {selectedSection === "병원 조회" && <HpvHospitalMap />}
      {selectedSection === "지원사업 소개" && <SupportIntro />}
      <NavigationFixed/>
    </div>
  );
}
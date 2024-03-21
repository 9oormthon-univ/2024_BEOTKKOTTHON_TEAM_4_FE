import React, { useState } from 'react';
import MainHeader from '@/app/_component/atom/MainHeader';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import InfluHospitalMap from "@/app/_component/temp/influhospitalmap";

export default function Map() {
  const [selectedSection, setSelectedSection] = useState("병원 조회");
  const sectionTexts = ["병원 조회", "지원사업 소개"];

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <MainHeader title="병원 조회" />
      <SectionHeader sections={sectionTexts} onSectionChange={handleSectionChange} />
      {selectedSection === "병원 조회" && <InfluHospitalMap />}
      <NavigationFixed/>
    </div>
  );
}
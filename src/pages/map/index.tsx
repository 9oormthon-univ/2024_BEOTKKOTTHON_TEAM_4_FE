import React, { useState } from 'react';
import MainHeader from '@/app/_component/atom/MainHeader';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import HospitalMap from "@/app/_component/temp/hospitalmap";
import SupportIntro from '@/app/_component/temp/influsupportIntro';

export default function Map() {
  return (
    <div>
      <MainHeader title="병원 조회" />
 <HospitalMap />
      <NavigationFixed/>
    </div>
  );
}

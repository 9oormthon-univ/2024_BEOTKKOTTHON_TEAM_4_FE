import React from 'react';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';


export default function recomVaccine() {

  return (
    <div>
      <MainHeader title="추천 백신" url="/home" />

      <NavigationFixed/>
    </div>
  );
}

import React from 'react';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';


export default function failVaccine() {

  return (
    <div>
      <MainHeader title="누락된 백신" url="/home" />

      <NavigationFixed/>
    </div>
  );
}

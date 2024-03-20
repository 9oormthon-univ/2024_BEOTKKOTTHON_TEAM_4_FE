import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DiseaseDetail from '@/app/_component/temp/DiseaseDetail';
import MainHeader from "@/app/_component/atom/RouteHeader";
import { diseaseList } from "@/utils/disease-api";
import Toast from '@/app/_component/atom/Toast';
import NavigationFixed from '@/app/_component/organism/navigationFixed';

export default function DetailDesPage() {
  const router = useRouter();
  const { id } = router.query;
  const disease = diseaseList.find((d) => d.id === Number(id));
  const [isToastOpen, setIsToastOpen] = useState(false);
  
  useEffect(() => {
    if (!disease && id && !isNaN(Number(id))) {
      setIsToastOpen(true);
      setTimeout(() => {
        setIsToastOpen(false);
        router.push('/vaclookup');
      }, 3000);
    }
  }, [id, disease, router]);

  return (
    <>
      <MainHeader title="감염병 정보" url="/vaclookup" />
      {disease ? (
        <DiseaseDetail disease={disease} />
      ) : isToastOpen && ( 
        <Toast message="감염병 정보를 찾을 수 없습니다." isOpen={isToastOpen} />
      )}
      <NavigationFixed/>
    </>
  );
}

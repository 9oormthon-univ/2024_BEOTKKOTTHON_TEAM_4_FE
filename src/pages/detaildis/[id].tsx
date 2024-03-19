import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DiseaseDetail from '@/app/_component/temp/DiseaseDetail';
import MainHeader from "@/app/_component/molecule/BackHeader";
import { diseaseList } from "@/utils/disease-api";
import Toast from '@/app/_component/atom/Toast';

export default function DetailDesPage() {
  const router = useRouter();
  const { id } = router.query;
  const disease = diseaseList.find((d) => d.id === Number(id));
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (!disease && id) { // id가 있지만 disease를 찾을 수 없는 경우에만 토스트를 띄움
      setIsToastOpen(true);
      setTimeout(() => {
        setIsToastOpen(false);
        router.push('/vaclookup'); // 3초 후에 /vaclookup 페이지로 리다이렉트
      }, 3000);
    }
  }, [id, disease, router]);

  return (
    <>
      <MainHeader title="감염병 정보" url="/vaclookup" />
      {disease ? (
        <DiseaseDetail disease={disease} />
      ) : isToastOpen && ( // disease가 없고 토스트가 활성화된 경우에만 토스트를 렌더링
        <Toast message="감염병 정보를 찾을 수 없습니다." isOpen={isToastOpen} />
      )}
    </>
  );
}

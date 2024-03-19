import React from 'react';
import { useRouter } from 'next/router';
import DiseaseDetail from '@/app/_component/temp/DiseaseDetail';
import MainHeader from "@/app/_component/molecule/BackHeader";
import {diseaseList} from "@/utils/disease-api";

export default function DetailDesPage() {
  const router = useRouter();
  const { id } = router.query;
  const disease = diseaseList.find((d) => d.id === Number(id));

  if (!disease) {
    return <p>감염병 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <MainHeader title="감염병 정보" url="/vaclookup" />
      <DiseaseDetail disease={disease} />
    </>
  );
}

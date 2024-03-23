'use client';

import * as React from 'react';
import Link from 'next/link';

import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import { MenuTitleContainer } from '@/app/_component/atom/MenuTitle/styles';
import MenuTitle from '@/app/_component/atom/MenuTitle';
import VaccineItem from '@/app/_component/atom/VaccineItem';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { useEffect, useState } from 'react';
import { postVacSignup } from '@/app/_lib/postVacSignup';
import responsJsonNation from '@/utils/user-vacList-api.json';
import responsJsonetc from '@/utils/user-vacList-api.json';
import { getInoculationSimple } from '@/app/_lib/getInoculationSimple';
import { getCertificate } from '../_lib/getCertificate';

export default function Vachistory() {
  const [NationData, setNationData] = useState([]);
  const [EtcData, setEtcData] = useState([]);
  const [CertificateData, setCertificateData] = useState([]);

  const fetchList = async () => {
    try {
      const nationData = await getInoculationSimple('nation');
      const extraData = await getInoculationSimple('extra');
      setNationData(nationData);
      setEtcData(extraData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchCertifi = async () => {
    try {
      const certificateData = await getCertificate();
      setCertificateData(certificateData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchList();
    fetchCertifi();
  }, []);

  return (
    <Container>
      <MainHeader title="접종내역" />
      <div className="body_wrap">
        <div className="content_head">
          <MenuTitle
            title={'접종 인증서'}
            rightIconUrl={'/vachistory/certificate/list'}
          />
        </div>
        <div className="content_body">
          {CertificateData.map((item, key) => (
            <VaccineCard
              variant={'small'}
              image={item.iconImage}
              vaccineName={item.vaccineName}
              date={item.inoculatedDate}
            />
          ))}
        </div>

        <MenuTitle
          username="전예나"
          title={'님의 예방접종내역을 확인해보세요!'}
          rightIconUrl={'/vachistory/vaccine'}
        />
        <div className="vaccine_wrap">
          <div className="category">국가 예방접종</div>
          <div className="vaccine_list">
            {NationData.map((item, key) => (
              <VaccineItem
                key={key}
                category={'국가 예방접종'}
                vaccineName={item.diseaseName}
                subLabel={item.vaccineName}
                vaccineStatus={item.isCompleted}
              />
            ))}
          </div>
        </div>
        <div className="vaccine_wrap">
          <div className="category">기타 예방접종</div>
          <div className="vaccine_list">
            {EtcData.map((item, key) => (
              <VaccineItem
                key={key}
                category={'기타 예방접종'}
                vaccineName={item.diseaseName}
                subLabel={item.vaccineName}
                vaccineStatus={item.isCompleted}
              />
            ))}
          </div>
        </div>
      </div>
      <NavigationFixed />
    </Container>
  );
}

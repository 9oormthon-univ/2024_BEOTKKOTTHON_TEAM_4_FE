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
import { apiDevUrl } from '@/hooks/api';
import { LocalStorage } from '@/hooks/useUtil';
import { router } from 'next/client';
import { PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';
import LoadingPage from '@/app/_component/temp/Loading';
import SkeletonScreen from '@/app/_component/temp/SkeletonScreen';

interface VaccineData {
  vaccineId: string;
  diseaseName: string;
  vaccineName: string;
  inoculatedDate: string;
  isCompleted: boolean;
  iconImage: string;
}

const initialVaccineData: VaccineData[] = [];

export default function Vachistory() {
  const [NationData, setNationData] =
    useState<VaccineData[]>(initialVaccineData);
  const [EtcData, setEtcData] = useState<VaccineData[]>(initialVaccineData);
  const [CertificateData, setCertificateData] =
    useState<VaccineData[]>(initialVaccineData);
  const [loading, setLoading] = useState<boolean>(false);
  const accessToken = LocalStorage.getItem('accessToken');
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const fetchList = async () => {
    try {
      setLoading(true);
      const nationData = await getInoculationSimple('NATION', []);
      const extraData = await getInoculationSimple('EXTRA', []);
      const certificateData = await getCertificate();
      setCertificateData(certificateData);
      setNationData(nationData);
      setEtcData(extraData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCerti = async () => {
    try {
      setLoading(true);
      const certificateData = await getCertificate();
      setCertificateData(certificateData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
    fetchCerti();
  }, []);

  const onClickHandler = (id: string) => {
    LocalStorage.setItem('vaccineId', id);
    router.push(PATH.VACHISTORY_CERTI + '/' + id);
  };

  useEffect(() => {
    fetch(`${apiDevUrl}/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserName(data.name);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Container>
      <MainHeader title="접종내역" />
      <div className="body_wrap">
        <div className="content_head">
          <MenuTitle
            title={'접종 인증서'}
            rightIconUrl={PATH.VACHISTORY_LIST}
          />
        </div>
        <div className="content_body">
          {loading ? (
            <>
              <VaccineCard loading={loading} />
              <VaccineCard loading={loading} />
              <VaccineCard loading={loading} />
            </>
          ) : (
            CertificateData.map((item, key) => (
              <VaccineCard
                key={key}
                variant={'small'}
                image={item.iconImage}
                vaccineName={item.vaccineName}
                date={item.inoculatedDate}
                onClick={() => onClickHandler(item.vaccineId)}
              />
            ))
          )}
        </div>

        <MenuTitle
          username={userName}
          title={'님의 예방접종내역을 확인해보세요!'}
          rightIconUrl={PATH.VACHISTORY_VAC}
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

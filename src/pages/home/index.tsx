import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import { MenuTitleContainer } from '@/app/_component/atom/MenuTitle/styles';
import MenuTitle from '@/app/_component/atom/MenuTitle';
import VaccineItem from '@/app/_component/atom/VaccineItem';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import HomeDiseaseCard from '@/app/_component/atom/HomeDiseaseCard';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoneHome from '@/app/_component/atom/NoneHome';
import { apiDevUrl } from '@/hooks/api';
import { LocalStorage } from '@/hooks/useUtil';
import { getCertificate } from '../_lib/getCertificate';
import { Colors, fontGenerator } from '@/styles';
import { VaccineData } from '@/types/globalType';

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  box-sizing: border-box;

  & > .head {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    text-align: left;
  }

  & > .body_wrap {
    //padding: 0 20px;
    margin-left: 15px;
    color: #000000;

    & > .content_body {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      gap: 10px;
      //margin: 10px;
      & > .item {
        width: 100px;
        height: 100px;
        flex-shrink: 0;
        opacity: 1;
        flex-shrink: 0;
        background-color: ${Colors.Gray200};
      }
    }
    & > .content_body::-webkit-scrollbar {
      display: none;
    }
    & > .content_more {
      margin-bottom: 30px;
    }
    & > .vaccine_wrap {
      padding: 10px 0;
      & > .category {
        ${fontGenerator('14px', '600', '16.71px')}
        color: ${Colors.Gray700};
        font-family: 'Pretendard', sans-serif;
        padding: 10px 0;
      }
      & > .vaccine_list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        overflow-x: scroll;
        & > .item {
          width: 245px;
          height: 92px;
          border: 1px solid Black;
          flex-shrink: 0;
        }
      }
      & > .vaccine_list::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserName = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #333d4b;
`;

const GreetingMessage = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #333d4b;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  margin-left: 20px;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  margin-bottom: 10px;
`;

export default function Home() {
  const [userName, setUserName] = useState('');
  const [recommendVaccine, setRecommendVaccine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentImage, setCurrentImage] = useState(Images.ico_home_1);
  const [imageKey, setImageKey] = useState(0);
  const [certificateData, setCertificateData] = useState<VaccineData[]>([]);

  const accessToken = LocalStorage.getItem('accessToken');

  useEffect(() => {
    fetch(`${apiDevUrl}/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserName(data.name);
      })
      .catch((error) => {
        setError(error.message);
      });

    fetch(`${apiDevUrl}/search/recommend`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRecommendVaccine(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const images = [ Images.ico_home_2, Images.ico_home_3];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
      setImageKey((prevKey) => prevKey + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(`${apiDevUrl}/inoculation/certificate`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }

        const data = await response.json();
        setCertificateData(data);
      } catch (error) {
        console.error('Error fetching certificate data:', error);
      }
    };

    fetchCertificates();
  }, [accessToken]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Container>
        <MainHeader title="홈" />
        <GreetingContainer>
          <UserName>{userName}님, </UserName>
          <GreetingMessage>반가워요!</GreetingMessage>
        </GreetingContainer>
        <ImageContainer key={imageKey}>
          <Image src={currentImage} alt="추천하는 이미지" />
        </ImageContainer>
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle
              title={`${userName}님을 위한 추천 백신`}
              rightIconUrl={'/recomvac'}
            />
          </div>
          <div className="content_body">
            {recommendVaccine.length > 0 ? (
              recommendVaccine.map((vaccine) => (
                <HomeDiseaseCard
                  key={vaccine.id}
                  id={vaccine.id}
                  diseaseName={vaccine.name}
                  imageUrl={vaccine.iconImage}
                />
              ))
            ) : (
              <NoneHome title="앗! 추천 백신이 없어요" />
            )}
          </div>
        </div>
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle
              title="접종 인증서"
              rightIconUrl={'/vachistory/certificate/list'}
            />
          </div>
          <div className="content_body">
            {certificateData.map((item, key) => (
              <VaccineCard
                key={key}
                variant={'small'}
                image={item.iconImage}
                vaccineName={`${item.diseaseName}(${item.vaccineName})`}
                date={item.inoculatedDate}
                onClick={() => {
                  LocalStorage.setItem('vaccineId', item.vaccineId);
                  window.location.href =
                    '/vachistory/certificate/' + item.vaccineId;
                }}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <NavigationFixed />
      </Container>
    </>
  );
}

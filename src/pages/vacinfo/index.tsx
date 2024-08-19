import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Link from 'next/link';
import { LocalStorage } from '@/hooks/useUtil';

const VaccineInfoContainer = styled.div`
  padding: 20px 0 0 0;
`;

const WhoisText = styled.div`
  display: flex;
  padding: 6px 14px 6px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const WhatVaccineContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
`;

const WhatVaccineTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  justify-content: space-between;
  width: 100%;
`;

const WhatVaccineText = styled.div`
  color: var(--Gray-Gray-900, #191f28);
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

const VaccineButton = styled.div`
  display: flex;
  height: 33px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--Gray-Gray-100, #f2f4f6);
  color: var(--Gray-Gray-500, #8b95a1);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const NotVaccineText = styled.div`
  color: var(--Primary, #4196fd);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  align-self: stretch;
`;

const VaccineListContainer = styled.div`
  display: flex;
  padding: 20px 20px 30px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-bottom: 1px solid var(--Gray-Gray-200, #e5e8eb);
  background: var(--Gray-White, #fff);
`;

const OneVaccine = styled.div`
  display: flex;
  padding: 18px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 14px;
  border: 1px solid var(--Gray-Gray-200, #e5e8eb);
`;

const NavVacContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f9fafb;
`;

const OneNav = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 14px;
  border: 1px solid var(--Gray-Gray-200, #e5e8eb);
  background: var(--Gray-White, #fff);
  border: 1px solid var(--Gray-Gray-200, #e5e8eb);
  background: var(--Gray-White, #fff);
`;

const ListInfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ListItemText = styled.span`
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LinkButton = styled.a`
  cursor: pointer;
`;

export default function VacInfo() {
  const [userName, setUserName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const accessToken = LocalStorage.getItem('accessToken');

  useEffect(() => {
    fetch('https://api-dev.vacgom.co.kr/api/v1/me', {
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
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <MainHeader title="백신" />
      <VaccineInfoContainer>
        <WhoisText>{userName}의 접종인증서</WhoisText>
        <WhatVaccineContainer>
          <WhatVaccineTextContainer>
            <WhatVaccineText>2개</WhatVaccineText>
            <Link href="/vachistory/certificate/list" passHref>
              <VaccineButton as="a">접종 인증서</VaccineButton>
            </Link>
          </WhatVaccineTextContainer>
          <NotVaccineText>필수접종백신 2개 미접종</NotVaccineText>
        </WhatVaccineContainer>
        <VaccineListContainer>
          <OneVaccine>임의로 백신 개수 아직 연결 X</OneVaccine>
          <OneVaccine>임의로 백신 개수 아직 연결 X</OneVaccine>
          <OneVaccine>임의로 백신 개수 아직 연결 X</OneVaccine>
        </VaccineListContainer>
      </VaccineInfoContainer>
      <NavVacContainer>
        <OneNav>
          <ListInfoItem>
            <Image src={Images.ico_vacinfo_look} alt="" />
            <ListItemText>백신 정보 살펴보기</ListItemText>
          </ListInfoItem>
          <Link href="/vaclookup" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </OneNav>
        <OneNav>
          <ListInfoItem>
            <Image src={Images.ico_vacinfo_list} alt="" />
            <ListItemText>예방 접종 내역</ListItemText>
          </ListInfoItem>
          <Link href="/vachistory/vaccine" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </OneNav>
      </NavVacContainer>
      <NavigationFixed />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Link from 'next/link';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserGreeting = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #191F28;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  margin-right: 20px;
`;

const TextContainer = styled.span`
  display: inline;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: Fill (313px)px;
  height: Hug (70px)px;
  gap: 25px;
  opacity: 0px;
  margin-left: 100px;
`;

const NavContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

const AccountTitle = styled.h2`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #191F28;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

const ListItemText = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #333D4B;
`;

const LinkButton = styled.a`
  cursor: pointer;
`;

export default function My() {
  const [userName, setUserName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDkxOGUwOC05YzcxLTQxNWUtOWIxMC00ZmQyNWYxMDRkNzEiLCJpYXQiOjE3MTExNzI1OTUsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MjAxNzI1OTV9.V3FsYMvYqqKAV76ryZkX_2TEO9WSlR43koBWgrBcA78';

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <MainHeader title="마이페이지" />
      <GreetingContainer>
        <UserGreeting>
          <ImageWrapper>
            <Image src={Images.ico_my_profile} alt="" />
          </ImageWrapper>
          <TextContainer>
            {userName}님,<br />
            오늘도 건강하세요!
          </TextContainer>
        </UserGreeting>
      </GreetingContainer>
      <ImageContainer>
      <Link href="/recomvac" passHref>
      <Image src={Images.ico_my_recom} alt=""/>
      </Link>
      <Link href="/vachistory/certificate/list" passHref>
        <Image src={Images.ico_my_docs} alt="" /> 
        </Link>
      </ImageContainer>
      <NavContainer>
        <AccountTitle>계정 관리</AccountTitle>
        <ListItem>
          <ListItemText>내 정보 수정</ListItemText>
          <Link href="/myrevise" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>개인정보방침</ListItemText>
          <Link href="https://www.notion.so/been2spring/da1fae9ce9f54a7980a0782c91b7551f" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>이용약관</ListItemText>
          <Link href="https://www.notion.so/been2spring/f17c3687e1f24279a76e9797a51677f6" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>로그아웃</ListItemText>
          <Link href="/seeagain" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>계정 탈퇴</ListItemText>
          <Link href="/quit" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
      </NavContainer>
      <NavigationFixed />
    </>
  );
}

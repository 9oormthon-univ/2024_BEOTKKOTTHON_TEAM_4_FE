import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import MainMap from '@/app/_component/organism/mainMap';
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
  const userName = '오소현';
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
        <Image src={Images.ico_my_recom} alt="" />
        <Image src={Images.ico_my_docs} alt="" />
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
          <Link href="/your-destination-url" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>이용약관</ListItemText>
          <Link href="/your-destination-url" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>로그아웃</ListItemText>
          <Link href="/your-destination-url" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemText>계정 탈퇴</ListItemText>
          <Link href="/your-destination-url" passHref>
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

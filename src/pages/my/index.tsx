import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Link from 'next/link';
import { LocalStorage } from '@/hooks/useUtil';
import router from 'next/router';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserGreeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.03em;
  color: #191f28;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  margin-right: 20px;
`;

const NameContainer = styled.span`
  display: inline;
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const EmailContainer = styled.span`
  display: inline;
  color: var(--Gray-Gray-400, #b0b8c1);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

`;
const InfoWrapper = styled.div`
  display: flex;
  gap:8px;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 14px 0px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: var(--Gray-White, #fff);
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const SubTitleContainer = styled.div`
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 14px
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--Gray-White, #fff);
`;

const NavContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

const AccountTitle = styled.h2`
  color: var(--Gray-Gray-900, #191f28);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const LinkButton = styled.a`
  cursor: pointer;
`;

const SettingContainer = styled.div``;

const QuitText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: var(--Gray-Gray-500, #8b95a1);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const VersionText = styled.div`
  color: var(--Gray-Gray-500, #8b95a1);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export default function My() {
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

  const handleClick = () => {
    router.push('/myrevise');
  };

  return (
    <>
      <MainHeader title="마이페이지" />
      <GreetingContainer>
        <UserGreeting>
          <InfoWrapper>
          <ImageWrapper onClick={handleClick}>
            <Image src={Images.ico_my_profile} alt="" />
          </ImageWrapper>
          <InfoContainer>
            <NameContainer>{userName}</NameContainer>
            <EmailContainer>가든 돌보미</EmailContainer>
          </InfoContainer>
          </InfoWrapper>
        </UserGreeting>
      </GreetingContainer>
      <NavContainer>
        <AccountTitle>우리 아이</AccountTitle>
        <ListItem>
          <ListInfoItem>
            <Image src={Images.ico_my_info_revise} alt="" />
            <ListItemText>정보 수정</ListItemText>
          </ListInfoItem>
          <Link href="/mybabyrevise" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListInfoItem>
            <Image src={Images.ico_my_baby} alt="" />
            <ListItemText>공동 돌보미</ListItemText>
          </ListInfoItem>
          <Link href="/mybaby" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
      </NavContainer>
      <NavContainer>
        <AccountTitle>설정</AccountTitle>
        <ListItem>
        <ListInfoItem>
            <ListItemText>개인정보 수집 및 활용 동의서</ListItemText>
          </ListInfoItem>
          <Link
            href="https://been2spring.notion.site/143ea9e50cd9471a856fd1ce52e47ed3?pvs=4"
            passHref
          >
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
        <ListInfoItem>
            <ListItemText>이용약관</ListItemText>
          </ListInfoItem>
          <Link
            href="https://been2spring.notion.site/104c56edfef54ae3bd36657f8824d24e?pvs=4"
            passHref
          >
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
        <ListInfoItem>
            <ListItemText>개인정보처리방침</ListItemText>
          </ListInfoItem>
          <Link
            href="https://been2spring.notion.site/37c4eb9131f944a3981f97e9a80cb933?pvs=4"
            passHref
          >
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListInfoItem>

            <ListItemText>1:1 문의</ListItemText>
          </ListInfoItem>
          <Link href="/ask" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
        <ListItem>
          <ListInfoItem>
            <ListItemText>로그 아웃</ListItemText>
          </ListInfoItem>
          <Link href="/seeagain" passHref>
            <LinkButton>
              <Image src={Images.ico_my_right} alt="" />
            </LinkButton>
          </Link>
        </ListItem>
      </NavContainer>
      <Link href="/quit" passHref>
        <QuitText>탈퇴하기</QuitText>
      </Link>
      <NavigationFixed />
    </>
  );
}

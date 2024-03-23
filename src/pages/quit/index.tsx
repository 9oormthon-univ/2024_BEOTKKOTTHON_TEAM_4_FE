import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Quit() {
  const [userNickname, setUserNickname] = useState('');
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
        setUserNickname(data.nickname);
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
    <div>
      <MainHeader title="계정 탈퇴" url="/my" />
      <ImageWrapper>
        <Image src={Images.ico_quit_intro} alt="" />
      </ImageWrapper>
    </div>
  );
}

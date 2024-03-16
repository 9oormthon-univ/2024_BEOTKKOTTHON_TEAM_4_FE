// components/MainHeader.tsx

import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
  color: #333D4B;
`;

const NotificationIcon = styled.span`
  color: #B0B8C1;
`;

interface MainHeaderProps {
  title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <NotificationIcon className="material-icons">notifications</NotificationIcon>
    </HeaderContainer>
  );
};

export default MainHeader;

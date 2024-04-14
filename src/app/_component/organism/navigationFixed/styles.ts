import styled from '@emotion/styled';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 68px;
  border-radius: 30px 30px 0 0;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  max-width: 500px;
  margin: 0 auto;
  background: #ffffff;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;
  padding: 9px 24px;
  gap: 6px;

  color: ${({ isActive }) => (isActive ? '#4196FD' : '#B0B8C1')};

  span {
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

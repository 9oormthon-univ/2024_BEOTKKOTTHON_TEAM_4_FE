import React from 'react';
import { Images } from '@globalStyles';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

// 다른 페이지 디자인이 안나와서 네비게이션이 전 페이지 다 되는지 안되는지 모르겠네요...
// 그래서 우선 컴포넌트로 만들고 페이지에 불러와서 사용하도록 구현했습니다
// 전체 디자인 다 나오고, 페이지 고정되는 부분들 (네비게이션이나 헤더 나) 있다면 최상위로 만들고 자동 적용되도록해둘게요
// 우선 사용하는 페이지에서 <NavigationFixed /> 이렇게 불러만 주시면 됩니다

const navItems = [
  { iconSelected: 'nav_home_selec', iconUnselected: 'nav_home_unselec', label: '홈', route: '/home' },
  { iconSelected: 'nav_vachistory_selec', iconUnselected: 'nav_vachistory_unselec', label: '접종내역', route: '/vachistory' },
  { iconSelected: 'nav_map_selec', iconUnselected: 'nav_map_unselec', label: '병원조회', route: '/map' },
  { iconSelected: 'nav_vaclookup_selec', iconUnselected: 'nav_vaclookup_unselec', label: '백신정보', route: '/vaclookup' },
  { iconSelected: 'nav_my_selec', iconUnselected: 'nav_my_unselec', label: '마이', route: '/my' },
];

const NavigationContainer = styled.div`
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

const NavItem = styled.div<{ isActive: boolean }>`
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
  }
`;

export default function NavigationFixed() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <NavigationContainer>
      {navItems.map((item) => {
        const isActive = router.pathname === item.route;
        const icon = isActive ? Images[item.iconSelected] : Images[item.iconUnselected];
        return (
          <NavItem
            key={item.label}
            isActive={isActive}
            onClick={() => handleNavigation(item.route)}
          >
            <Image
              src={icon}
              alt={item.label}
              width={24}
              height={24}
            />
            <span>{item.label}</span>
          </NavItem>
        );
      })}
    </NavigationContainer>
  );
}

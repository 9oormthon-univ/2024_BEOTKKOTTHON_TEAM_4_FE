'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Images } from '@globalStyles';
import Image from 'next/image';
import styled from '@emotion/styled';
import { NavigationContainer, NavItem } from './styles';
import { PATH } from '@/routes/path';

const navItems = [
  {
    iconSelected: 'nav_home_selec',
    iconUnselected: 'nav_home_unselec',
    label: '홈',
    route: PATH.HOME,
    subRoutes: [PATH.RECOMVAC, PATH.FAILVAC],
  },
  {
    iconSelected: 'nav_vachistory_selec',
    iconUnselected: 'nav_vachistory_unselec',
    label: '접종내역',
    route: PATH.VACHISTORY,
    subRoutes: [
      PATH.VACHISTORY_LIST,
      PATH.VACHISTORY_VAC,
      PATH.VACHISTORY_CERTI,
      { route: PATH.VACHISTORY_CERTI, as: '/vachistory/certificate' },
    ],
  },
  {
    iconSelected: 'nav_map_selec',
    iconUnselected: 'nav_map_unselec',
    label: '병원조회',
    route: PATH.MAP,
    subRoutes: [PATH.MAP_HPV, PATH.MAP_INFLU],
  },
  {
    iconSelected: 'nav_vaclookup_selec',
    iconUnselected: 'nav_vaclookup_unselec',
    label: '백신정보',
    route: PATH.VACLOOKUP,
  },
  {
    iconSelected: 'nav_my_selec',
    iconUnselected: 'nav_my_unselec',
    label: '마이',
    route: PATH.MY,
  },
];

const NavigationFixed = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (route: string, subRoutes?: string[]) => {
    if (subRoutes && subRoutes.includes(pathname)) {
      router.push(route);
    } else {
      router.push(route);
    }
  };

  const [isDetailPage, setIsDetailPage] = useState(false);

  useEffect(() => {
    if (pathname) {
      setIsDetailPage(pathname.includes('/detaildis/'));
    }
  }, [pathname]);

  return (
    <NavigationContainer>
      {navItems.map((item) => {
        const isActive =
          pathname === item.route || item.subRoutes?.includes(pathname);
        const icon = isActive
          ? Images[item.iconSelected]
          : Images[item.iconUnselected];
        return (
          <NavItem
            key={item.label}
            isActive={isActive}
            onClick={() => handleNavigation(item.route, item.subRoutes)}
          >
            <Image src={icon} alt={item.label} width={24} height={24} />
            <span>{item.label}</span>
          </NavItem>
        );
      })}
    </NavigationContainer>
  );
};

export default NavigationFixed;

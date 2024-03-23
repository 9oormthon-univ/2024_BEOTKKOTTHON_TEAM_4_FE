import React, { ReactNode } from 'react';

import NavigationFixed from '@/app/_component/organism/navigationFixed';

type Props = { children: ReactNode };
export default function VachistoryLayout({ children }: Props) {
  return (
    <div className="container">
      {children}
      <NavigationFixed />
    </div>
  );
}

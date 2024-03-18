import { SerializedStyles } from '@/app/_component/atom/atomType';
import React from 'react';

export interface MainHeaderType {
  title: string;
  url?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

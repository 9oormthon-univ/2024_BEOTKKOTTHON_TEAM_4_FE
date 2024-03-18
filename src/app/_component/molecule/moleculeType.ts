import { SerializedStyles } from '@/app/_component/atom/atomType';
import React from 'react';

export interface MainHeaderType {
  title: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

'use client';

import React, { MouseEvent } from 'react';
import { css } from '@emotion/react';

import { ButtonType } from '@/app/_component/atom/atomType';
import { ButtonContent } from './styles';
import Icon from '../Icon/Icon';

// typings

/**
 * @description 버튼
 * @param {string | undefined} className
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} label
 * @param {IconDetailType | undefined} icon
 * @param {string | undefined} variant
 * @param {string | undefined} iconSize
 * @param {((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined} onClick
 * @returns {JSX.Element}
 */

function Button({
  className = '',
  customStyle = css``,
  label = '버튼',
  icon,
  prevIcon,
  iconSize = '24',
  variant = 'primary',
  size = 'medium',
  onClick = (e: MouseEvent<HTMLButtonElement>) => {},
}: React.PropsWithChildren<ButtonType>) {
  return (
    <ButtonContent
      className={className}
      customStyle={customStyle}
      variant={variant}
      size={size}
      onClick={onClick}
      icon={icon}
      prevIcon={prevIcon}
    >
      {prevIcon && (
        <Icon
          icon={prevIcon}
          size={iconSize}
          color="inherit"
          style={{ marginRight: '0.8rem' }}
        />
      )}
      {label}
      {icon && (
        <Icon
          icon={icon}
          size={iconSize}
          color="inherit"
          style={{ marginLeft: '0.8rem' }}
        />
      )}
    </ButtonContent>
  );
}

export default Button;

'use client';

import React, { useId } from 'react';
import { css } from '@emotion/react';

// Styles
import { Colors, Icons } from '@globalStyles';
import { CheckBox } from './styles';

import Icon from '../Icon/Icon';

// Typings

/**
 * @description Check box 컴포넌트
 * @param {string | undefined} className
 * @param {string | undefined} keyId
 * @param {string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} label
 * @param {boolean | undefined} checked
 * @param {string | undefined} variant
 * @param {SerializedStyles | undefined} customStyle className 명 혹은 emotion/react 로 커스텀 스타일링 지정
 * @param {string | undefined} size
 * @param {boolean | undefined} disabled
 * @param {boolean | undefined} indeterminate
 * @param {((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined} onChange
 * @return {JSX.Element}
 */

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

export interface CheckBoxType {
  className?: string;
  keyId?: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  variant?: string;
  size?: string;
  customStyle?: SerializedStyles;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index = ({
  className = '',
  keyId = useId(),
  label = '',
  checked = false,
  variant = 'medium',
  customStyle = css``,
  size = '1.6rem',
  disabled = false,
  indeterminate = false,
  onChange,
}: React.PropsWithChildren<CheckBoxType>) => {
  return (
    <CheckBox
      htmlFor={`check_box${keyId}`}
      variant={variant}
      checked={checked}
      className={className}
      customStyle={customStyle}
    >
      <Icon
        icon={
          disabled
            ? checked
              ? Icons.checkBox_selec_dis
              : Icons.checkBox_unselec_dis
            : checked
              ? Icons.checkBox_selec_en
              : Icons.checkBox_unselec_en
        }
        size={size}
        color={indeterminate || checked ? Colors.Primary : '#8f959d'}
      />
      <input
        id={`check_box${keyId}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        readOnly
      />
      {label && <span className="check__box--description">{label}</span>}
    </CheckBox>
  );
};

export default Index;

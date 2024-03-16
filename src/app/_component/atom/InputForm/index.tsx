'use client';

import React, { useId } from 'react';

// Styles
import { css } from '@emotion/react';
import { InputFormType } from '../atomType';
import { InputWrapper } from './styles';

// Components
import Icon from '../Icon/Icon';

// Typings

/**
 * @description Input form 컴포넌트
 * @param {string | undefined} id
 * @param {string | undefined} width
 * @param {React.RefObject<HTMLInputElement> | undefined} inputRef
 * @param {boolean | undefined} readOnly
 * @param {boolean | undefined} disabled
 * @param {string | undefined} placeholder
 * @param {any} value
 * @param {string | undefined} type
 * @param {number | undefined} maxLength
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyPress
 * @param {((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined} onKeyDown
 * @param {((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined} onChange
 * @param {((event: React.FocusEvent<HTMLInputElement>) => void) | undefined} onBlur
 * @param {((event: React.MouseEvent<HTMLInputElement>) => void) | undefined} onClick
 * @param {SerializedStyles | undefined} customStyle
 * @param {Omit<React.PropsWithChildren<InputFormType>, "onKeyDown" | "onClick" | "onChange" | "customStyle" | "inputRef" | "onKeyPress" | "readOnly" | "type" | "onBlur" | "width" | "disabled" | "id" | "placeholder" | "value" | "maxLength">} otherProps
 * @return {JSX.Element}
 */

const Index = ({
  id = useId(),
  inputRef,
  readOnly = false,
  disabled = false,
  placeholder = '',
  value,
  type = 'text',
  maxLength = 255,
  onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {},
  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {},
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {},
  onClick = (event: React.MouseEvent<HTMLInputElement>) => {},
  leftIcon,
  rightIcon,
  onClickLeftIcon = (event: React.MouseEvent<HTMLSpanElement>) => {},
  onClickRightIcon = (event: React.MouseEvent<HTMLSpanElement>) => {},
  description,
  customStyle = css``,
  className,
  size = '',
  variant = '',
  children,
  autoComplete = 'one-time-code',
}: React.PropsWithChildren<InputFormType>) => {
  return (
    <InputWrapper
      key={`input--wrapper${id}`}
      className={className}
      customStyle={customStyle}
      size={size}
      variant={variant}
      disabled={disabled}
    >
      <div className="input__content">
        {leftIcon && (
          <Icon
            className="input__content--left__icon"
            icon={leftIcon}
            onClick={onClickLeftIcon}
            size="2.4rem"
          />
        )}
        <input
          className="input__content--input"
          id={id}
          type={type}
          ref={inputRef}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          autoComplete={autoComplete}
        />
        {rightIcon && (
          <Icon
            className="input__content--right__icon"
            icon={rightIcon}
            onClick={onClickRightIcon}
            size="2.4rem"
          />
        )}
        {children}
      </div>
      {description && (
        <div className="input-form__description">{description}</div>
      )}
    </InputWrapper>
  );
};

export default Index;

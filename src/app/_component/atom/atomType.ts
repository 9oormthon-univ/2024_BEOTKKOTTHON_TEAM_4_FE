import { SerializedStyles } from "@emotion/react";
import React from "react";

export interface CssArchiveType
  extends Record<string, string | SerializedStyles> {}

export type CustomStyleType = {
  customStyle?: SerializedStyles;
  className?: string;
  variant?: string;
  size?: string;
  isChecked?: boolean;
  isOpen?: boolean;
};

// ------------------------------------------------
// atom/Button 의 타입
export interface ButtonType {
  className?: string;
  customStyle?: SerializedStyles;
  label?: string;
  prevIcon?: IconDetailType;
  icon?: IconDetailType;
  iconSize?: string;
  variant?: string;
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyleType {
  className?: string;
  customStyle?: SerializedStyles;
  variant?: string;
  size?: string;
  icon?: string;
  prevIcon?: IconDetailType;
}

// atom/Icon 의 타입
export interface IconType extends CustomStyleType {
  icon: IconDetailType;
  src: string;
  size?: string;
  alt?: string;
  className?: string;
  style?: CssArchiveType;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IconDetailType {
  type?: string;
  src: string;
}

// atom/InputForm 의 타입
export interface InputFormType {
  // 아래는 input태그 외에 사용되는 props 의 type을 나타냄
  // otherProps 형태로 반환
  leftIcon?: IconDetailType;
  rightIcon?: IconDetailType;
  onClickLeftIcon?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onClickRightIcon?: (event: React.MouseEvent<HTMLSpanElement>) => void;

  description?: string;
  customStyle?: SerializedStyles;
  className?: string;
  size?: string;
  variant?: string;
  inputType?: string;
  // 아래는 input에 들어가는 props 들을 나타냄
  id?: string;
  width?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?: string | number;
  type?: string;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  maxLength?: number;
  autoComplete?: string;
}

// atom/RadioBox 의 타입
export interface OptionType {
  label: string | React.ReactNode;
  value: string | number;
  disabled?: boolean;
  isChecked?: boolean;
  isAll?: string;
}

export interface RadioBoxType {
  field?: string;
  value: string;
  options: OptionType[];
  onChange?: (value: string | number) => void;
  variant?: string;
  style?: CssArchiveType;
  customStyle?: SerializedStyles;
  className?: string;
}

// atom/CheckBox 의 타입
export interface CheckBoxType {
  className?: string;
  keyId?: string;
  label?: string | React.ReactNode;
  checked?: boolean;
  variant?: string;
  size?: string;
  customStyle?: SerializedStyles;
  icon?: IconDetailType;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckBoxStyleType {
  checked?: boolean;
  variant?: string;
  size?: string;
  customStyle?: SerializedStyles;
  disabled?: boolean;
  indeterminate?: boolean;
}

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

//atoms/MainHeader 의 타입
//계속 고치자!!
export interface MainHeaderType {
  title: string;
  customStyle?: SerializedStyles;
}

//atoms/SectionHeader 의 타입
export interface SectionHeaderProps {
  sections: string[];
  onSectionChange: (section: string) => void;
  customStyle?: SerializedStyles;
}

//atoms/Information 의 타입
export interface InformationProps {
  message: string;
  containerProps?: React.CSSProperties;
  iconProps?: {
    color?: string;
    marginRight?: string;
    className?: string;
  };
  textProps?: React.CSSProperties;
}

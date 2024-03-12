'use client'

import React, { useId } from 'react';
import { css } from '@emotion/react';

// Styles
import { Colors, Icons } from '@/styles';
import { RadioBoxType } from '@typings/common/atom';
import Icon from '../Icon/Icon';
import { RadioBoxWrapper } from './styles';

// Typings

/**
 *
 * @param {string | undefined} field
 * @param {string} value
 * @param {OptionType[]} options
 * @param {string | undefined} variant
 * @param {CssArchiveType | undefined} style
 * @param {SerializedStyles | undefined} customStyle
 * @param {string | undefined} className
 * @param {((value: (string | number)) => void) | undefined} onChange
 * @returns {JSX.Element}
 */
function RadioBox({
  field,
  value,
  options,
  variant = 'medium',
  style = {},
  customStyle = css``,
  className = '',
  onChange = (value: string | number) => {},
}: React.PropsWithChildren<RadioBoxType>) {
  const radioKey = useId();

  return (
    <RadioBoxWrapper
      className={className}
      customStyle={customStyle}
      variant={variant}
      style={style}
    >
      {options.map((option) => {
        const isChecked = value === option.value;
        return (
          <label
            key={`${radioKey}_${field}_${option.value}`}
            htmlFor={`${radioKey}_${field}_${option.value}`}
          >
            <Icon
              icon={
                option.disabled
                  ? Icons.radioDisabled
                  : isChecked
                    ? Icons.radio
                    : Icons.radioBlank
              }
              color={
                option.disabled
                  ? Colors.Gray600
                  : isChecked
                    ? Colors.Primary
                    : Colors.Gray600
              }
            />
            <input
              id={`${radioKey}_${field}_${option.value}`}
              type="radio"
              checked={isChecked}
              onChange={(e) => onChange(e.target.value)}
              disabled={option.disabled}
              value={value}
            />
            {option.label}
          </label>
        );
      })}
    </RadioBoxWrapper>
  );
}

export default RadioBox;

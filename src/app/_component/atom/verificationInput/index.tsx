'use client';

import * as React from 'react';
import { VerificationInputWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useRef, useState } from 'react';
import { OnChangePasswordType } from '@/types/globalType';

type props = {
  inputLength: number;
  password: string | null;
  onChangeValue: OnChangePasswordType;
};
export default function VerificationInput({
  inputLength,
  password,
  onChangeValue,
}: props): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const Button = Array.from(
    { length: inputLength },
    (_, index) => `cell${index + 1}`,
  );
  const [active, setActive] = React.useState(0);

  return (
    <VerificationInputWrap>
      <button
        className="button"
        onClick={() => {
          inputRef.current?.focus();
          setActive(password.length);
        }}
      >
        {Button.map((item, index) => (
          <div
            id={item}
            key={index}
            className={
              active === index
                ? 'password_cell_active'
                : 'password_cell_disabled'
            }
          >
            <div className="mt-2">{password[index]}</div>
          </div>
        ))}
      </button>
      <input
        className={'input'}
        ref={inputRef}
        id="password"
        type="number"
        maxLength={inputLength}
        value={password} //password
        onChange={(e) => {
          onChangeValue(e.target.value);
          setActive(e.target.value.length - 1);
        }}
      />
    </VerificationInputWrap>
  );
}

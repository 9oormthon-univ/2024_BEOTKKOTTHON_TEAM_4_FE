'use client';

import * as React from 'react';
import { VerificationInputWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useRef, useState } from 'react';
import { OnChangeValueType } from '@/types/globalType';

type props = {
  inputLength: number;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};
export default function VerificationInput({
  inputLength,
  password,
  setPassword,
}: props): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const Button = Array.from(
    { length: inputLength },
    (_, index) => `cell${index + 1}`,
  );

  const [active, setActive] = React.useState(0); //현재 입력된 숫자 인덱스

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
          setPassword(e.target.value);
          setActive(e.target.value.length - 1);
        }}
      />
    </VerificationInputWrap>
  );
}

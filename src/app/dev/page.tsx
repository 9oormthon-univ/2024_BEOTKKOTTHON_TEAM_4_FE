'use client';

import * as React from 'react';
import { DevMain } from './style';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';

import InputForm from '@/app/_component/atom/InputForm';
import CheckBox from '@/app/_component/atom/CheckBox';
import RadioBox from '../_component/atom/RadioBox';

export default function Home() {
  return (
    <DevMain>
      <div className="full_screen">
        <div className="title"> | 색깔 |</div>
        <div className="full_screen_content">
          {Object.entries(Colors).map(([colorKey, hex]) => (
            <h6 style={{ width: '9rem' }}>
              <div
                key={colorKey}
                style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: hex,
                  margin: '0.8rem 0',
                }}
              />
              {colorKey} : {hex}
            </h6>
          ))}
        </div>
      </div>
      <div className="screen">
        <div className="section">
          <div className="title"> | 버튼 - Large |</div>

          <div className="content-column">
            <Button label="Button" variant={'Primary'} size={'large'} />
            <Button label="Button" variant={'Secondary'} size={'large'} />
            <Button label="Button" variant={'OutlineWhite'} size={'large'} />
            <Button label="Button" variant={'Disabled'} size={'large'} />
          </div>
        </div>
        <div className="section">
          <div className="title"> | 버튼 - medium |</div>

          <div className="content-column">
            {/*<Button*/}
            {/*  label="버튼입니다"*/}
            {/*  variant={'default'}*/}
            {/*  size={'default'}*/}
            {/*  icon={Icons.arrow_forward_ios}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*  label="버튼입니다"*/}
            {/*  variant={'default'}*/}
            {/*  size={'medium'}*/}
            {/*  icon={Icons.arrow_forward_ios}*/}
            {/*  iconSize={'5'}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*  label="버튼입니다"*/}
            {/*  variant={'default'}*/}
            {/*  size={'small'}*/}
            {/*  icon={Icons.arrow_forward_ios}*/}
            {/*/>*/}
            <Button label="Button" variant={'Primary'} size={'medium'} />
            <Button label="Button" variant={'Secondary'} size={'medium'} />
            <Button label="Button" variant={'OutlineWhite'} size={'medium'} />
            <Button label="Button" variant={'Disabled'} size={'medium'} />
          </div>
        </div>
        <div className="section">
          <div className="title"> | 버튼 - icon |</div>

          <div className="content-column">
            <Button
              label={'카카오톡 계정으로 계속하기'}
              variant={'kakao'}
              size={'default'}
              prevIcon={Icons.kakao}
              iconSize={'28'}
            />

            <Button
              label={'카카오톡 계정으로 계속하기'}
              variant={'kakao'}
              size={'small'}
              prevIcon={Icons.kakao}
              iconSize={'20'}
            />
          </div>
        </div>
        <div className="section">
          <div className="title"> | 버튼 - icon |</div>
          <div className="content-column">
            <Button
              label={'Google 계정으로 계속하기'}
              variant={'OutlineWhite'}
              size={'default'}
              prevIcon={Icons.google}
              iconSize={'28'}
            />
            <Button
              label={'Google 계정으로 계속하기'}
              variant={'OutlineWhite'}
              size={'small'}
              prevIcon={Icons.google}
              iconSize={'20'}
            />
          </div>
        </div>
      </div>
      <div className="full_screen">
        <div className="title"> | icon |</div>

        <div className="full_screen_content">
          {Object.entries(Icons).map(([IconKey, Icon]) => {
            return (
              <div
                key={IconKey}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '15rem',
                  gap: '1rem',
                  margin: '0.5rem 0',
                }}
              >
                <span className={Icon.type}>{Icon.src}</span>
                <h5>{Icon.src}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="screen">
        <div className="section">
          <div className="title"> | inputForm |</div>
          <div className="content-column">
            <InputForm
              placeholder="텍스트를 입력하세요."
              value="텍스트 입력했습니다."
              type="text"
            />
            <InputForm
              placeholder="텍스트를 입력하세요."
              value="텍스트 입력했습니다."
            />
            <InputForm
              placeholder="텍스트를 입력하세요."
              variant="error"
              rightIcon={Icons.error}
              description="비밀번호가 유효하지 않습니다. 다시 확인해주세요."
            />
            <InputForm
              placeholder="텍스트를 입력하세요."
              variant="default"
              rightIcon={Icons.eye}
            />
            <InputForm
              placeholder="텍스트를 입력하세요."
              variant="default"
              rightIcon={Icons.eyeSlash}
            />
            <InputForm placeholder="텍스트를 입력하세요." disabled />
          </div>
        </div>
        <div className="section">
          <div className="content-column">
            <h4>| 체크박스 size = m |</h4>

            <CheckBox label="selected, enabled" checked disabled={false} />
            <CheckBox
              label="unSelected, enabled"
              checked={false}
              disabled={false}
            />
            <CheckBox label="selected, disabled" disabled checked />
            <CheckBox label="unSelected, disabled" disabled />
          </div>
        </div>
        <div className="section">
          <div className="content-column">
            <h4>라디오 size = medium</h4>
            <RadioBox
              value="Checked"
              options={[
                {
                  value: 'Checked',
                  label: 'Checked',
                },
                {
                  value: 'Unchecked',
                  label: 'Unchecked',
                },
                {
                  value: 'Disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
            <h4>라디오 size = small</h4>
            <RadioBox
              variant="small"
              value="Checked"
              options={[
                {
                  value: 'Checked',
                  label: 'Checked',
                },
                {
                  value: 'Unchecked',
                  label: 'Unchecked',
                },
                {
                  value: 'Disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
          </div>
          <div className="content-column">
            <RadioBox
              value="Checked"
              options={[
                {
                  value: 'Checked',
                  label: 'Checked',
                },
                {
                  value: 'Unchecked',
                  label: 'Unchecked',
                },
                {
                  value: 'Disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </DevMain>
  );
}

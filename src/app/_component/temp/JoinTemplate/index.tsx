'use client';
import React, { useState } from 'react';
import { JoinTemplateContainer } from './style';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
import { useNavigate } from 'react-router-dom';
import Button from '@/app/_component/atom/button/button';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import BottomButton from '@/app/_component/atom/BottomButton';
import TermsDetail from '@/app/_component/molecule/TermsDetail';

type props = {
  title: string;
  titleBottom?: string;
  subTop?: string;
  subBottom?: string;
  useterm?: boolean;
  falseLabel?: string;
  trueLabel?: string;
  oneLabel?: string;
  params: ParamsType;
  field: string;
  onChangeValue: OnChangeValueType;
};
const JoinTemplate: React.FC<props> = ({
  params,
  title,
  titleBottom,
  useterm,
  subTop,
  subBottom,
  falseLabel,
  trueLabel,
  oneLabel,
  field,
  onChangeValue,
}) => {
  return (
    <JoinTemplateContainer>
      <div className={'top'}>
        <div className={'title'}>{title}</div>
        {useterm && (
          <div className={'useterm title'}>
            <p>약관 내용에 동의</p>해주세요
          </div>
        )}
        {subTop && <div className={'subTop'}>{subTop}</div>}
        <div className={'subBottom'}>{subBottom}</div>
      </div>
      <div className={'button'}>
        {falseLabel && (
          <Button
            label={falseLabel}
            prevIcon={
              params[field] === false
                ? Icons.checkBox_selec_en
                : Icons.checkBox_unselec_en
            }
            onClick={() => onChangeValue(field, false)}
            variant={'OutlineWhite'}
            size={'large'}
          />
        )}
        {trueLabel && (
          <Button
            label={trueLabel}
            prevIcon={
              params[field] === true
                ? Icons.checkBox_selec_en
                : Icons.checkBox_unselec_en
            }
            onClick={() => onChangeValue(field, true)}
            variant={'OutlineWhite'}
            size={'large'}
          />
        )}
        {oneLabel && (
          <Button
            label={oneLabel}
            prevIcon={
              params[field] === true
                ? Icons.checkBox_selec_en
                : Icons.checkBox_unselec_en
            }
            onClick={() => {
              if (params[field] === true) onChangeValue(field, false);
              else onChangeValue(field, true);
            }}
            variant={'OutlineWhite'}
            size={'large'}
          />
        )}
      </div>
    </JoinTemplateContainer>
  );
};

export default JoinTemplate;

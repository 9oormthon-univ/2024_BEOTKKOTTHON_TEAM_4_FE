'use client';
import React, { useState } from 'react';
import { JoinTemplateContainer } from './style';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
import { useNavigate } from 'react-router-dom';
import Button from '@/app/_component/atom/button/button';
import { OnChangeValueType } from '@/types/globalType';

type props = {
  title: string;
  subTop?: string;
  subBottom?: string;
  falseLabel: string;
  trueLabel: string;
  field: string;
};
const JoinTemplate: React.FC<props> = ({
  title,
  subTop,
  subBottom,
  falseLabel,
  trueLabel,
  field,
}) => {
  const [params, setParams] = useState({
    [field]: null,
  });

  const onClickHandler = (value) => {
    setParams({
      ...params,
      [field]: value,
    });
  };

  return (
    <JoinTemplateContainer>
      <div className={'top'}>
        <div className={'title'}>{title}</div>
        <div className={'subTop'}>{subTop}</div>
        <div className={'subBottom'}>{subBottom}</div>
      </div>
      <div className={'button'}>
        <Button
          label={falseLabel}
          prevIcon={
            params[field] === false
              ? Icons.checkBox_selec_en
              : Icons.checkBox_unselec_en
          }
          onClick={() => onClickHandler(false)}
          variant={'OutlineWhite'}
          size={'large'}
        />
        <Button
          label={trueLabel}
          prevIcon={
            params[field] === true
              ? Icons.checkBox_selec_en
              : Icons.checkBox_unselec_en
          }
          onClick={() => onClickHandler(true)}
          variant={'OutlineWhite'}
          size={'large'}
        />
      </div>
    </JoinTemplateContainer>
  );
};

export default JoinTemplate;

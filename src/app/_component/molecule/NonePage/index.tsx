import React from 'react';
import { NonePageContainer } from './style';

import { useRouter } from 'next/navigation';
import { ParamsType } from '@/types/globalType';
import Image from 'next/image';
import { ImgSyringe } from '../../../../../public/assets/image';
import Button from '@/app/_component/atom/button/button';
import { Images } from '@/styles';
import syringe from '../../../../../public/assets/image/img-syringe.svg';
type props = {
  title: string;
  content: string;
  subcontent: string;
  params?: ParamsType;
  isButton?: boolean;
  onClickButton?: () => void;
};
const NonePage: React.FC<props> = ({
  title,
  content,
  subcontent,
  params,
  isButton,
  onClickButton,
}) => {
  const router = useRouter();
  return (
    <NonePageContainer>
      <div className="wrap">
        <Image src={Images.syringe} alt={'주사기'} />
        <div className="title">{title}</div>
        <div className="content">
          {content}
          <br />
          {subcontent}
        </div>
      </div>
      {isButton && <Button onClick={onClickButton} />}
    </NonePageContainer>
  );
};

export default NonePage;

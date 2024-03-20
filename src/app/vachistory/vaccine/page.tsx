'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate';
import { Icons, Images } from '@/styles';
import CertificateDetail from '@/app/vachistory/certificate/list/page';
import MainHeader from '@/app/_component/atom/MainHeader';
import VacLookupFixed from '@/app/_component/organism/vaclookupFixed';
import {
  agencyRanges,
  diseaseRanges,
  introMessages,
  situationRanges,
  vaccine,
} from '@/constants';
import { Fragment, useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { css } from '@emotion/react';
import FilterModal from '@/app/_component/organism/filterModal';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import VaccineDetail from '@/app/_component/atom/VaccineDetail';

export default function Vaccination() {
  const [params, setParams] = useState<ParamsType>({
    disease: '',
  });
  const [selectedSection, setSelectedSection] = useState('필수예방접종');
  const sectionTexts = ['국가예방접종', '기타예방접종'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAgencySelect = (selectedOptions: string[]) => {
    onChangeValue('disease', selectedOptions);
    setIsModalOpen(false);
  };

  const resetAgencyOptions = () => {
    onChangeValue('disease', []);
  };

  return (
    <Container>
      <BackHeader title={'접종 상세'} url={'/vachistory'} />
      <SectionHeader
        sections={sectionTexts}
        onSectionChange={setSelectedSection}
      />
      <div className="body">
        <InputForm
          placeholder="병명"
          value={params.disease}
          rightIcon={Icons.arrow_down}
          type="text"
          customStyle={css`
            & > .input__content > .input__content--right__icon > img {
              width: 24px;
              height: 24px;
            }
          `}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <div className="content_wrap">
          <VaccineDetail />
          <VaccineDetail />
          <VaccineDetail />
          <VaccineDetail />
        </div>
      </div>
      <Fragment>
        <FilterModal
          isOpen={isModalOpen}
          title="병명"
          options={diseaseRanges}
          selectedOptions={params.disease}
          onClose={() => setIsModalOpen(false)}
          onOptionSelect={handleAgencySelect}
          onReset={resetAgencyOptions}
        />
      </Fragment>
    </Container>
  );
}

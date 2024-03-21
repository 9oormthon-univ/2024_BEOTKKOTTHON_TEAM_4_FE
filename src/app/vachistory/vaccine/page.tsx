'use client';

import * as React from 'react';
import { Container } from './style';
import { Icons, Images } from '@/styles';

import { diseaseRanges } from '@/constants';
import { Fragment, useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { css } from '@emotion/react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import VaccineDetail from '@/app/_component/atom/VaccineDetail';
import VaccineStatus from '@/app/_component/atom/VaccineStatus';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';

export default function Vaccine() {
  const [params, setParams] = useState<ParamsType>({
    disease: '',
  });
  const [selectedSection, setSelectedSection] = useState('국가예방접종');
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
      <BackHeader title={'예방접종 내역'} url={'/vachistory'} />
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

        {selectedSection === '국가예방접종' ? (
          <>
            {params.disease === '전체' ? (
              <div className="content_wrap">
                <VaccineStatus />
                <VaccineStatus />
                <VaccineStatus />
              </div>
            ) : (
              <div className="content_wrap">
                <VaccineDetail />
                <VaccineDetail />
                <VaccineDetail />
                <VaccineDetail />
              </div>
            )}
          </>
        ) : (
          ''
        )}
      </div>
      <Fragment>
        <FilterRadioModal
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

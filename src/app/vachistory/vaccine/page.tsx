'use client';

import * as React from 'react';
import { Container } from './style';
import { Icons, Images } from '@/styles';

import { diseaseRanges } from '@/constants';
import { Fragment, useEffect, useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { css } from '@emotion/react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import VaccineDetail from '@/app/_component/atom/VaccineDetail';
import VaccineStatus from '@/app/_component/atom/VaccineStatus';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import detailJson from '@/utils/user-vacDetail-api.json';
import listJson from '@/utils/user-vacList-api.json';
import { getInoculationSimple } from '@/app/_lib/getInoculationSimple';
import { getInoculationDetail } from '@/app/_lib/getInoculationDetail';

export default function Vaccine() {
  const [params, setParams] = useState<ParamsType>({
    disease: '전체',
  });
  const [selectedSection, setSelectedSection] = useState('국가예방접종');
  const sectionTexts = ['국가예방접종', '기타예방접종'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('nation');
  const detail = detailJson;
  const [list, setList] = useState([]);

  const handleAgencySelect = (selectedOptions) => {
    onChangeValue('disease', selectedOptions);
    setIsModalOpen(false);
  };
  console.log(params.disease);
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  useEffect(() => {
    if (selectedSection === '국가예방접종') {
      setType('nation');
    } else {
      setType('extra');
    }
  }, [selectedSection]);

  const resetAgencyOptions = () => {
    onChangeValue('disease', []);
  };

  const fetchDetail = async () => {
    try {
      const detailData = await getInoculationDetail(type, params.disease);
      console.log(detailData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      try {
        const listData = await getInoculationSimple(type);
        console.log(listData);
        setList(listData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchList();
    // fetchDetail();
    console.log('type 바꿈', type);
  }, [type]);

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
                {list.map((item, key) => (
                  <VaccineStatus
                    vaccineType={item.vaccineName}
                    diseaseName={item.diseaseName}
                    maxOrder={item.maxOrder}
                    minOrder={item.minOrder}
                    inoculationOrders={item.inoculationOrders}
                    isCompleted={item.isCompleted}
                  />
                ))}
              </div>
            ) : (
              <div className="content_wrap">
                {detail.map((item, key) => (
                  <VaccineDetail
                    vaccineDose={item.order}
                    vaccineProductName={item.vaccineProductName}
                    vaccineBrandName={item.vaccineBrandName}
                    inoculatedAt={item.date}
                    inoculationAgency={item.agency}
                    lotNo={item.lotNumber}
                  />
                ))}
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

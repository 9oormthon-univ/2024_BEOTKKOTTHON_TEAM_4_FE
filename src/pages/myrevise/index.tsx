import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Image from 'next/image';
import { Images } from '@globalStyles';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { LocalStorage } from '@/hooks/useUtil';
import CompeleteToast from '@/app/_component/atom/CompeleteToast';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  padding: 24px;
  opacity: 1;
`;

const ContextContainer = styled.div`
  margin-bottom: 60px;
`;
const FormSection = styled.div`
  padding: 10px;
`;

const FormItemLabel = styled.label`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: left;
  color: #333d4b;
  display: block;
  margin-bottom: 10px;
`;

const FormDisplay = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 8px;
  border: 1px solid #e5e8eb;
  background-color: #f9fafb;
  font-color: #8b95a1;
  color: #333d4b;
  display: flex;
  align-items: center;
  opacity: 1;
`;

const DropdownContainer = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e5e8eb;
  background-color: #ffffff;
  margin-bottom: 10px;
  opacity: 1;
  color: #000000;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: #4196fd;
`;

const ButtonText = styled.div`
  font-color: #ffffff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.30000001192092896px;
  text-align: center;
  padding: 20px;
`;

export default function Myrevise() {
  const [isConditionModalOpen, setConditionModalOpen] = useState(false);
  const [isPregnantModalOpen, setPregnantModalOpen] = useState(false);
  const [isMedicalWorkerModalOpen, setMedicalWorkerModalOpen] = useState(false);
  const [isTransplantModalOpen, setTransplantModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const conditionOptions = ['기저질환 있음', '기저질환 없음'];
  const pregnantOptions = ['임신 중이예요', '임신 중이 아니예요'];
  const medicalWorkerOptions = [
    '의료기관 종사자예요',
    '의료기관 종사자가 아니예요',
  ];
  const transplantOptions = [
    '장기이식 경험이 있어요',
    '장기이식 경험이 없어요',
  ];

  const [selectedCondition, setSelectedCondition] = useState('선택하세요');
  const [selectedPregnant, setSelectedPregnant] = useState('선택하세요');
  const [selectedMedicalWorker, setSelectedMedicalWorker] =
    useState('선택하세요');
  const [selectedTransplant, setSelectedTransplant] = useState('선택하세요');

  const [userNickname, setUserNickname] = useState('');
  const [userName, setUserName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const accessToken = LocalStorage.getItem('accessToken');

  useEffect(() => {
    fetch('https://api-dev.vacgom.co.kr/api/v1/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserNickname(data.nickname);
        setUserName(data.name);
        // 설정 초기화
        const healthCodes = data.healthConditions.map(
          (condition) => condition.code,
        );
        setSelectedCondition(
          healthCodes.includes('SICKLE_CELL_DISEASE')
            ? '기저질환 있음'
            : '기저질환 없음',
        );
        setSelectedPregnant(
          healthCodes.includes('PREGNANCY')
            ? '임신 중이예요'
            : '임신 중이 아니예요',
        );
        setSelectedMedicalWorker(
          healthCodes.includes('MEDICAL_WORKER')
            ? '의료기관 종사자예요'
            : '의료기관 종사자가 아니예요',
        );
        setSelectedTransplant(
          healthCodes.includes('ORGAN_TRANSPLANTATION')
            ? '장기이식 경험이 있어요'
            : '장기이식 경험이 없어요',
        );
        setIsLoading(false);

      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [accessToken]);

  if (isLoading) return;
  if (error) return <div>Error: {error}</div>;

  const updateHealthCondition = async () => {
    const allHealthCodes = {
      '기저질환 있음': 'SICKLE_CELL_DISEASE',
      '임신 중이예요': 'PREGNANCY',
      '의료기관 종사자예요': 'MEDICAL_WORKER',
      '장기이식 경험이 있어요': 'ORGAN_TRANSPLANTATION'
    };
  
    const healthProfiles = Object.entries(allHealthCodes)
      .filter(([key, code]) => {
        return (key === selectedCondition && code === 'SICKLE_CELL_DISEASE') ||
               (key === selectedPregnant && code === 'PREGNANCY') ||
               (key === selectedMedicalWorker && code === 'MEDICAL_WORKER') ||
               (key === selectedTransplant && code === 'ORGAN_TRANSPLANTATION');
      })
      .map(([_, code]) => code);
  
      try {
        const response = await fetch('https://api-dev.vacgom.co.kr/api/v1/me/healthCondition', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ healthProfiles })
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`API Error: ${errorData.message}`);
        }
    
        const data = await response.json();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        console.error('Error updating health condition:', error);
        setTimeout(() => setShowToast(false), 3000);
      }
    };
  

  return (
    <div>
      <MainHeader title="내 정보 수정" url="/my" />
      <ImageWrapper>
        <Image src={Images.ico_my_profile} alt="" width={100} height={100} />
      </ImageWrapper>
      <ContextContainer>
        <FormSection>
          <FormItemLabel htmlFor="username">이름</FormItemLabel>
          <FormDisplay>{userName}</FormDisplay>
        </FormSection>
        <FormSection>
          <FormItemLabel htmlFor="nickname">닉네임</FormItemLabel>
          <FormDisplay>{userNickname}</FormDisplay>
        </FormSection>
        <FormSection>
          <FormItemLabel>기저 질환</FormItemLabel>
          <DropdownContainer onClick={() => setConditionModalOpen(true)}>
            <span>{selectedCondition}</span>
            <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
          </DropdownContainer>
          <FilterRadioModal
            isOpen={isConditionModalOpen}
            title="기저 질환 선택"
            options={conditionOptions}
            selectedOptions={[selectedCondition]}
            onClose={() => setConditionModalOpen(false)}
            onOptionSelect={(option) => setSelectedCondition(option)}
            onReset={() => setSelectedCondition('선택하세요')}
          />
        </FormSection>

        <FormSection>
          <FormItemLabel>임신 여부</FormItemLabel>
          <DropdownContainer onClick={() => setPregnantModalOpen(true)}>
            <span>{selectedPregnant}</span>
            <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
          </DropdownContainer>
          <FilterRadioModal
            isOpen={isPregnantModalOpen}
            title="임신 여부 선택"
            options={pregnantOptions}
            selectedOptions={[selectedPregnant]}
            onClose={() => setPregnantModalOpen(false)}
            onOptionSelect={(option) => setSelectedPregnant(option)}
            onReset={() => {}}
          />
        </FormSection>
        <FormSection>
          <FormItemLabel>의료기관 종사자 여부</FormItemLabel>
          <DropdownContainer onClick={() => setMedicalWorkerModalOpen(true)}>
            <span>{selectedMedicalWorker}</span>
            <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
          </DropdownContainer>
          <FilterRadioModal
            isOpen={isMedicalWorkerModalOpen}
            title="의료기관 종사자 선택"
            options={medicalWorkerOptions}
            selectedOptions={[selectedMedicalWorker]}
            onClose={() => setMedicalWorkerModalOpen(false)}
            onOptionSelect={(option) => setSelectedMedicalWorker(option)}
            onReset={() => {}}
          />
        </FormSection>
        <FormSection>
          <FormItemLabel>장기이식 경험 여부</FormItemLabel>
          <DropdownContainer onClick={() => setTransplantModalOpen(true)}>
            <span>{selectedTransplant}</span>
            <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
          </DropdownContainer>
          <FilterRadioModal
            isOpen={isTransplantModalOpen}
            title="장기의식 경험 선택"
            options={transplantOptions}
            selectedOptions={[selectedTransplant]}
            onClose={() => setTransplantModalOpen(false)}
            onOptionSelect={(option) => setSelectedTransplant(option)}
            onReset={() => {}}
          />
        </FormSection>
      </ContextContainer>
      <CompeleteToast isVisible={showToast} />
      <ButtonContainer onClick={updateHealthCondition}>
        <ButtonText>저장하기</ButtonText>
      </ButtonContainer>
    </div>
  );
}

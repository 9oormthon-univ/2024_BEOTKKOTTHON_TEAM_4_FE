import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Image from 'next/image';
import { Images } from '@globalStyles';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  padding: 24px 0px;
  opacity: 1;
`;

const ContextContainer= styled.div`
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
  color: #333D4B;
  display: block;
  margin-bottom: 10px;
`;

const FormDisplay = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 8px;
  border: 1px solid #E5E8EB;
  background-color: #F9FAFB;
  font-color: #8B95A1;
  color: #333D4B;
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
  border: 1px solid #E5E8EB;
  background-color: #FFFFFF; 
  margin-bottom: 10px;
  opacity: 1;
  color: #000000;
`;

export default function Myrevise() {

    const [isConditionModalOpen, setConditionModalOpen] = useState(false);
    const [isPregnantModalOpen, setPregnantModalOpen] = useState(false);
    const [isMedicalWorkerModalOpen, setMedicalWorkerModalOpen] = useState(false);
    const [isTransplantModalOpen, setTransplantModalOpen] = useState(false);
  
    const conditionOptions = ["기저질환 있음", "기저질환 없음"];
    const pregnantOptions = ["임신 중이예요", "임신 중이 아니예요"];
    const medicalWorkerOptions = ["의료기관 종사자예요", "의료기관 종사자가 아니예요"];
    const transplantOptions = ["장기이식 경험이 있어요", "장기이식 경험이 없어요"];

    const [selectedCondition, setSelectedCondition] = useState("선택하세요");
    const [selectedPregnant, setSelectedPregnant] = useState("선택하세요");
    const [selectedMedicalWorker, setSelectedMedicalWorker] = useState("선택하세요");
    const [selectedTransplant, setSelectedTransplant] = useState("선택하세요");

    const [userNickname, setUserNickname] = useState("");
    const [userName, setUserName] = useState("");
  
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDkxOGUwOC05YzcxLTQxNWUtOWIxMC00ZmQyNWYxMDRkNzEiLCJpYXQiOjE3MTExNzI1OTUsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MjAxNzI1OTV9.V3FsYMvYqqKAV76ryZkX_2TEO9WSlR43koBWgrBcA78';
    
    useEffect(() => {
      fetch('https://api-dev.vacgom.co.kr/api/v1/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUserNickname(data.nickname);
        setUserName(data.name);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
    }, []);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
            selectedOptions={[]}
            onClose={() => setConditionModalOpen(false)}
            onOptionSelect={(option) => setSelectedCondition(option)}
            onReset={() => {}}
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
            selectedOptions={[]}
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
            selectedOptions={[]}
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
            selectedOptions={[]}
            onClose={() => setTransplantModalOpen(false)}
            onOptionSelect={(option) =>setSelectedTransplant(option)}
            onReset={() => {}}
          />
        </FormSection>
      </ContextContainer>
      <NavigationFixed />
    </div>
  );
}
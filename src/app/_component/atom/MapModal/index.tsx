import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 373px;
  height: auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 22px;
  color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  margin-bottom: -400px;
`;


const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  margin-bottom: 20px;

  ::before {
    content: '';
    width: 60px;
    height: 5px;
    border-radius: 5px;
    background: #d9d9d9;
  }
`;

const MainSection = styled.div`
  width:321px
  height:48px;
  padding: 6px 0px 10px 0px;
  gap: 10px;
  opacity: 0px;
`;

const HospitalName = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  color: #333d4b;
`;

const Major = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #4196fd;
  text-align: right;
  margin-top: -20px;
  margin-right: 5px;
`;

const SubSection = styled.div`
  display: flex;
  align-items: center;
  width: 321px;
  padding: 4px 0px 4px 0px;
  gap: 10px;
`;

const HospitalNow = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  text-align: left;
  color: #333d4b;
`;

const HospitalHow = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.09px;
  text-align: left;
  color: #4e5968;
`;

const Address = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #4e5968;
  text-align: left;
  margin-top: 10px;
`;

export const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <Bar />
        <MainSection>
          <HospitalName>{content.name}</HospitalName>
          <Major>{content.major}</Major>
        </MainSection>
        <SubSection>
          <HospitalNow>진료 종료</HospitalNow>
          <HospitalHow>일요일 휴무</HospitalHow>
        </SubSection>
        <Address>{content.address}</Address>
      </ModalContainer>
    </Overlay>
  );
};
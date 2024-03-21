import styled from '@emotion/styled';

const ModalContainer = styled.div`
  width: 373px;
  height: auto;
  position: fixed;
  top: 590px;
  left: 10px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 22px 0px 0px 0px;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 22px;
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

  return (
    <ModalContainer>
      <Bar />
      <HospitalName>{content.name}</HospitalName>
      <Major>{content.major}</Major>
      <Address>{content.address}</Address>
      <button onClick={onClose}>닫기</button>
    </ModalContainer>
  );
};
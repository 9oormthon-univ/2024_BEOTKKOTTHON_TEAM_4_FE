import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #191f2880;
  z-index: 9;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 373px;
  max-height: 527px;
  background: #ffffff;
  border-radius: 22px;
  padding: 14px 20px;
  z-index: 10;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
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

export const ModalContent = styled.div`
  max-height: 398px;
  overflow-y: auto;
  padding: 0 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ModalTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #333d4b;
  text-align: center;
  margin: 10px 0;
  margin-top: -5px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ModalOption = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
`;

export const OptionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #000000;
  text-align: left;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const FooterButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

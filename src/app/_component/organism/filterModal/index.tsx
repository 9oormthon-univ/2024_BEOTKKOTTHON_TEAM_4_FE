import React,  {useState} from 'react';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #191f2880;
  z-index: 9;
`;

const ModalContainer = styled.div`
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

const ModalHeader = styled.div`
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

const ModalContent = styled.div`
  max-height: 398px;
  overflow-y: auto;
  padding: 0 30px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ModalTitle = styled.h2`
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

const ModalOption = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
`;

const OptionText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #000000;
  text-align: left;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FooterButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

interface ModalProps {
  isOpen: boolean;
  title: string;
  options: string[];
  selectedOptions: string[];
  onClose: () => void;
  onOptionSelect: (option: string) => void;
  onReset: () => void;
}

const FilterModal: React.FC<ModalProps> = ({
  isOpen,
  title,
  options,
  selectedOptions,
  onClose,
  onOptionSelect,
  onReset,
}) => {
  const [localSelectedOptions, setLocalSelectedOptions] = useState<string[]>(selectedOptions || []);

  const handleOptionSelect = (option: string) => {
    const isOptionSelected = localSelectedOptions.includes(option);
    setLocalSelectedOptions(isOptionSelected ? [] : [option]);
  };

  const handleConfirm = () => {
    onOptionSelect(localSelectedOptions);
    onClose();
  };

  const handleReset = () => {
    setLocalSelectedOptions([]);
    onReset();
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalHeader />
        <ModalContent>
          <ModalTitle>{title}</ModalTitle>
          {options.map((option) => (
            <ModalOption key={option} onClick={() => handleOptionSelect(option)}>
              <Image
                src={localSelectedOptions.includes(option) ? Images.checkBox_selec_en : Images.checkBox_unselec_dis} // 여기를 수정했습니다.
                alt={option}
                width={20}
                height={20}
              />
              <OptionText>{option}</OptionText>
            </ModalOption>
          ))}
        </ModalContent>
        <ModalFooter>
          <FooterButton onClick={handleReset}>초기화</FooterButton>
          <FooterButton onClick={handleConfirm}>확인</FooterButton>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};


export default FilterModal;
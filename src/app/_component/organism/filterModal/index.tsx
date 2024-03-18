import React, { useEffect, useState } from 'react';
import { Images } from '@globalStyles';
import Image from 'next/image';
import Button from '../../atom/button/button';
import WarningToast from '../../atom/WarningToast';
import { Overlay, ModalContainer, ModalHeader, ModalContent, ModalTitle, ModalOption, OptionText, ButtonSection, FogEffect } from './styles';

// 나머지 코드는 동일하며, ModalContent 내부에 FogEffect 추가 부분만 보여줍니다.

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
  const [localSelectedOptions, setLocalSelectedOptions] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  // 옵션 개수에 따른 안개 효과 표시 구현 내용입니다.옵션의 개수가 7개 이상일때만 안개 효과 있어요!
  const [showFogEffect, setShowFogEffect] = useState(false);

  useEffect(() => {
    setShowFogEffect(options.length > 7);
  }, [options.length]);

  useEffect(() => {
    setLocalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const handleOptionSelect = (option: string) => {
    const index = localSelectedOptions.indexOf(option);
    if (index > -1) {
      setLocalSelectedOptions(localSelectedOptions.filter((o) => o !== option));
    } else {
      setLocalSelectedOptions([...localSelectedOptions, option]);
    }
  };
  

  const handleConfirm = () => {
    if (localSelectedOptions.length === 0) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    } else {
      onOptionSelect(localSelectedOptions);
      onClose();
    }
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
              <Image src={localSelectedOptions.includes(option) ? Images.choice_selec : Images.choice_unselec} alt={option} width={20} height={20} />
              <OptionText>{option}</OptionText>
            </ModalOption>
          ))}
          <FogEffect showFogEffect={showFogEffect} /> 
        </ModalContent>
        {showWarning && <WarningToast message="조건을 선택해주세요!" />}
        <ButtonSection>
          <Button label="초기화" variant={'Disabled'} size={'modal'} onClick={handleReset} />
          <Button label="확인" variant={localSelectedOptions.length > 0 ? 'Primary' : 'Secondary'} size={'modal'} onClick={handleConfirm} />
        </ButtonSection>
      </ModalContainer>
    </>
  );
};

export default FilterModal;
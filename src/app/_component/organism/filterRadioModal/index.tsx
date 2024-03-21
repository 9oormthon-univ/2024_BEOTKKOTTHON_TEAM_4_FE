import React, { useEffect, useState } from 'react';
import { Images } from '@globalStyles';
import Image from 'next/image';
import Button from '../../atom/button/button';
import WarningToast from '../../atom/WarningToast';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalTitle,
  ModalOption,
  OptionText,
  ButtonSection,
  FogEffect,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  title: string;
  options: string;
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
  const [localSelectedOption, setLocalSelectedOption] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // 옵션 개수에 따른 안개 효과 표시 구현 내용입니다.옵션의 개수가 7개 이상일때만 안개 효과 있어요!
  const [showFogEffect, setShowFogEffect] = useState(false);

  useEffect(() => {
    setShowFogEffect(options.length > 7);
  }, [options.length]);

  useEffect(() => {
    setLocalSelectedOption(selectedOptions[0]);
  }, [selectedOptions]);

  const handleOptionSelect = (option) => {
    if (localSelectedOption !== option) {
      setLocalSelectedOption(option);
    }
  };

  const handleConfirm = () => {
    if (!localSelectedOption) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
    } else {
      onOptionSelect(localSelectedOption);
      onClose();
    }
  };

  const handleReset = () => {
    setLocalSelectedOption(null);
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
            <ModalOption
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              <Image
                src={
                  localSelectedOption === option
                    ? Images.radio_selec
                    : Images.radio_unselec
                }
                alt={option}
                width={20}
                height={20}
              />
              <OptionText>{option}</OptionText>
            </ModalOption>
          ))}
          <FogEffect showFogEffect={showFogEffect} />
        </ModalContent>
        {showWarning && <WarningToast message="조건을 선택해주세요!" />}
        <ButtonSection>
          <Button
            label="초기화"
            variant={'Disabled'}
            size={'modal'}
            onClick={handleReset}
          />
          <Button
            label="확인"
            variant={localSelectedOption ? 'Primary' : 'Secondary'}
            size={'modal'}
            onClick={handleConfirm}
          />
        </ButtonSection>
      </ModalContainer>
    </>
  );
};

export default FilterModal;

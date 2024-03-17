import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalTitle,
  ModalOption,
  OptionText,
  ModalFooter,
  FooterButton,
} from './styles';

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
  const [localSelectedOptions, setLocalSelectedOptions] = useState<string[]>(
    [],
  );

  useEffect(() => {
    setLocalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

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
            <ModalOption
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              <Image
                src={
                  localSelectedOptions.includes(option)
                    ? Images.checkBox_selec_en
                    : Images.checkBox_unselec_dis
                }
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

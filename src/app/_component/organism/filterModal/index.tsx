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
  const [localSelectedOptions, setLocalSelectedOptions] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setLocalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const handleOptionSelect = (option: string) => {
    const isOptionSelected = localSelectedOptions.includes(option);
    setLocalSelectedOptions(isOptionSelected ? [] : [option]);
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
              <Image src={localSelectedOptions.includes(option) ? Images.checkBox_selec_en : Images.checkBox_unselec_dis} alt={option} width={20} height={20} />
              <OptionText>{option}</OptionText>
            </ModalOption>
          ))}
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
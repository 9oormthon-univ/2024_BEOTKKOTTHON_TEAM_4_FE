import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  color: black;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: auto;
  max-width: 90%;
`;

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const filterModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return <ModalContainer>{children}</ModalContainer>;
};

export default filterModal;

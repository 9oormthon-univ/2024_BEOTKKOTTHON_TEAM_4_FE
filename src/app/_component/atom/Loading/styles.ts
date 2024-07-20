import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const LoadingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  & > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $gray-100;
    animation: loading 1s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }

  @keyframes loading {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

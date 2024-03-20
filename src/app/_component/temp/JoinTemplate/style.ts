import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const JoinTemplateContainer = styled.div`
  & > * {
    font-family: 'Pretendard', sans-serif;
  }
  & > .top {
    padding: 20px;
    & > .title {
      margin-bottom: 6px;
      ${fontGenerator('20px', '700', '28px')}
      margin-bottom: 6px;
    }
    & > .subTop,
    .subBottom {
      ${fontGenerator('14px', '500', '20px')}
      color: ${Colors.Gray600}
    }
  }
  & > .button {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    & > button {
      justify-content: flex-start;
    }
    & > button:hover {
      background-color: ${Colors.PrimaryLight};
      border: none;
    }
  }
`;

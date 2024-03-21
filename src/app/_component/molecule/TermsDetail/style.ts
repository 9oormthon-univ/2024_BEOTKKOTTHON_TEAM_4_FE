import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const TermsDetailContainer = styled.main`
  & > .wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    & > .title {
      font-family: 'Pretendard', sans-serif;

      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.03em;
      text-align: left;
    }
    margin-bottom: 5px;
  }
  & > .content_wrap {
    border: 1px solid ${Colors.Gray200};
    border-radius: 8px;
    padding: 16px 20px;
    overflow-y: scroll;
    max-height: 146px;
    &::-webkit-scrollbar {
      visibility: hidden;
    }
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: ${Colors.Gray500};
  }
`;

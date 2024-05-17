import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const NonePageContainer = styled.main`
  height: calc(100vh - 150px);
  & > .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    & > img {
      margin-bottom: 22px;
    }
    & > div {
      max-width: 217px;
    }
    & > .title {
      font-family: 'Pretendard', sans-serif;

      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      text-align: center;
    }
    & > .content {
      font-family: 'Pretendard', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      color: ${Colors.Gray600};
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

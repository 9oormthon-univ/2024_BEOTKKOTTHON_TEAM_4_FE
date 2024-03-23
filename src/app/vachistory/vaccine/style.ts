import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  & > .body {
    padding: 14px 20px;
    & > .content_wrap {
      padding: 14px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  & > .bottom {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: ${Colors.Gray600};
    background-color: ${Colors.Gray100};
    padding: 15px 20px 100px 20px;
    margin-bottom: 100px;
  }
`;

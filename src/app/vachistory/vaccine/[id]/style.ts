import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  & > .top {
    padding: 20px;
    & > .title {
      ${fontGenerator('24px', '700', '28px')}
    }
    & > .subTop {
      margin-top: 10px;

      ${fontGenerator('14px', '400', '20px')}
      color: ${Colors.Gray500}
    }
  }
  & > .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px 14px 20px;
    min-height: 70%;
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
    padding: 15px 20px 120px 20px;
    margin-bottom: 100px;
  }
`;

import styled from '@emotion/styled';
import { Colors, fontGenerator } from '@/styles';
export const LoadingPageWrap = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
  background-color: ${Colors.Primary};
  & > .container {
    & > .top {
      margin: 8lh 20px 0 20px;
      & > .title {
        ${fontGenerator('24px', '700', '32px')}
        color: ${Colors.White};
        margin-bottom: 14px;
      }
      & > .subTitle {
        ${fontGenerator('12px', '500', '18px')}
        color: #FFFFFF66;
      }
    }
    & > .body {
      & > img {
        width: 100%;
        position: absolute;
        z-index: 1;
        bottom: 53px;
      }
    }
    & > .bottom {
      background-color: ${Colors.White};
      width: 100%;
      height: 95px;
      position: absolute;
      bottom: 0;
      & > .progress {
        width: 100%;
        height: 4px;
        background-color: #ffffff66;
      }
    }
  }
`;

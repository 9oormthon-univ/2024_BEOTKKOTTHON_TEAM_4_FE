import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const HomeWrap = styled.main`
  background-color: ${Colors.Primary};
  height: 100vh;
  text-align: center;

  & > .main {
    height: 60%;
    align-items: center;
    display: flex;
    justify-content: center;
    & > .title {
      & > .sub_title {
        margin-top: 10px;

        ${fontGenerator('22.56px', '500', '26.92px')};
        color: ${Colors.White};
      }
    }
  }
  & > .splash_image {
    display: flex;
    & > .vacgom_icon {
      width: 100%;
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }
`;

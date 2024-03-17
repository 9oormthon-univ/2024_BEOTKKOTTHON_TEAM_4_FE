import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const LoginWrapper = styled.main`
  background-color: ${Colors.Primary};
  height: 100vh;
  text-align: center;

  & > .main {
    padding-top: 2rem;
    height: 37vh;
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
      position: relative;
      top: 10px;
      z-index: 0;
    }
  }

  & > .bottom {
    & > button {
      position: relative;
      z-index: 1;
      margin-bottom: 10px;
    }
    & > .privacy {
      ${fontGenerator('14px', '600', '16px', '-0.3px')}
      color: ${Colors.Gray50};
      cursor: pointer;
    }
    padding: 0 20px;
  }

  @media screen and (max-height: 718px) {
    & > .main {
      padding-top: 1rem;
      height: 28vh;
      transition: 0.2s;
    }
  }
`;

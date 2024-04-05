import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const HomeWrap = styled.main`
  background-color: ${Colors.Primary};
  height: 100vh;
  text-align: center;

  & > .main {
    padding-top: 2rem;
    height: 37vh;
    align-items: center;
    display: flex;
    justify-content: center;

    &.show-content > .title {
      transform: translateY(0);
    }
    &.show-content {
      display: flex; /* show-content 클래스가 적용된 경우에만 flex로 설정됩니다 */
    }

    & > .title {
      transition:
        transform 0.7s ease,
        opacity 0.2s ease;
      transform: translateY(200px);
      opacity: 0;
      &.show-title {
        opacity: 1;
      }
      & > .sub_title {
        margin-top: 10px;

        ${fontGenerator('22.56px', '500', '26.92px')};
        color: ${Colors.White};
      }
    }
  }
  & > .bottom {
    display: none;
  }
  & > .splash_image > img {
    visibility: hidden;
    top: 300px; /* 원하는 위치로 지정합니다 */
  }

  .show-content {
    display: block; /* show-content 클래스가 적용되면 나머지 요소들이 보이도록 설정합니다 */
  }
  .show-content > img {
    visibility: visible;
    top: 21px; /* show-content 클래스가 적용되면 원하는 위치로 이동됩니다 */
    display: block;
  }

  & > .splash_image {
    display: flex;
    & > .vacgom_icon {
      width: 100%;
      position: relative;
      //top: 300px; /* 원하는 위치로 지정합니다 */
      transition: top 1s cubic-bezier(0.18, 0.69, 0.32, 1.28);
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

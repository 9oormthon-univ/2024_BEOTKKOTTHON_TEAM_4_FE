import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '../atomType';
import { Colors, fontGenerator, Images } from '@/styles';
import backimg from '../../public/assets/image/img-VaccineCard-back.svg';

export const VaccineCardStyle: CssArchiveType = {
  primary: css`
    background-image: url('/assets/image/img-VaccineCardBack_Large.svg');
    background-color: ${Colors.Primary};
    position: relative;
    max-width: 300px;
    max-height: 414.56px;
    border-radius: 37.97px;

    & > .top {
      padding: 18.8px 18.8px 0 18.8px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      & > .ordercount {
        background-color: #ffffff99;
        max-width: 128.08px;
        padding: 8.86px 12.66px 8.86px 12.66px;
        border-radius: 63.29px;
        ${fontGenerator('15.19px', '700', '18.13px')};
      }
    }

    & > .image_wrapper {
      height: 160px;
      width: 100%;
      text-align: center;
      //position: relative;
      //top: 30px;
      //height: 200px;
      & > .image {
        height: 277.22px;
        width: 225.32px;
        position: relative;
        bottom: -10px;
        z-index: 0;
      }
    }
  `,
  large: css`
    background-image: url('/assets/image/img-VaccineCardBack_Large.svg');
    max-width: 353px;
    max-height: 520px;
    width: 100%;
    border-radius: 28px;
    flex-shrink: 0;
    & > .top {
      padding: 27px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > .ordercount {
        background-color: ${Colors.White};
        max-width: 128.08px;
        padding: 8px 14px;
        border-radius: 63.29px;
        ${fontGenerator('14px', '700', '16.71px')};
      }
      & > .share_button {
        & > img {
          width: 49.19px;
          height: 25px;
        }
      }
    }
    & > .image_wrapper {
      height: 320px;
      width: 100%;
      text-align: center;

      & > .image {
        width: 283.93px;
        height: 349.33px;
        position: relative;
        bottom: -10px;
        z-index: 0;
      }
    }

    & > .bottom_content {
      //height: 100.37px;
      padding: 0 27px 27px 27px;
      z-index: 100;
      position: relative;

      & > .label {
        font-family: 'Pretendard', sans-serif;
        ${fontGenerator('24px', '700', '28.64px')}
        color: ${Colors.White};
        margin-bottom: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & > .sublabel_wrap {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding-bottom: 7px;

        & > .sublabel {
          ${fontGenerator('14px', '500', '16.71px')}
          color: ${Colors.White};
        }
        & > .percent {
          font-family: 'Pretendard', sans-serif;
          ${fontGenerator('14px', '400', '16.71px')}
          color: ${Colors.Gray200};
        }
      }
      & > .definition {
        ${fontGenerator('12px', '500', '14.32px')}
        color: #FFFFFF80;
      }
    }

    & > .bottom {
      position: absolute;
      height: 40%;
      width: 100%;
      bottom: 0;
      z-index: 0;
      border-radius: 28px;
      background: linear-gradient(
        180deg,
        rgba(65, 150, 253, 0) 10%,
        #4196fd 55%
      );
    }
  `,
  small: css`
    width: 160px;
    height: 220px;
    background-image: url('/assets/image/img-VaccineCard-back.svg');
    border-radius: 14px;
    flex-shrink: 0;

    & > .image_wrapper {
      height: 141px;
      width: 100%;
      text-align: center;

      & > .image {
        width: 141px;
        height: 174px;
        position: relative;
        bottom: -30px;
        z-index: 0;
      }
    }

    & > .bottom_content {
      //height: 100.37px;
      padding: 0 15px 15px 15px;
      z-index: 100;
      position: relative;
      bottom: -24px;

      & > .label {
        font-family: 'Pretendard', sans-serif;
        ${fontGenerator('16px', '600', '19px')}
        color: ${Colors.White};
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & > .sublabel_wrap {
        display: flex;
        flex-direction: row;
        gap: 10px;

        & > .percent {
          font-family: 'Pretendard', sans-serif;
          ${fontGenerator('14px', '400', '16.71px')}
          color: ${Colors.Gray200};
        }
      }
    }

    & > .bottom {
      position: absolute;
      height: 40%;
      width: 100%;
      bottom: 0;
      z-index: 0;
      //background: linear-gradient(
      //  180deg,
      //  rgba(65, 150, 253, 0) 60%,
      //  #4196fd 85%
      //);
      border-radius: 14px;
      background: linear-gradient(
        180deg,
        rgba(65, 150, 253, 0) 10%,
        #4196fd 55%
      );
    }
  `,
};

export const VaccineCardWrapper = styled.div<CustomStyleType>`
  ${VaccineCardStyle.primary}
  ${(props) => VaccineCardStyle[props.variant || 'primary']}
`;

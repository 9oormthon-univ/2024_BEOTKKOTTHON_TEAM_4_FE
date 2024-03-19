import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '../atomType';
import { Colors, fontGenerator, Images } from '@/styles';
import backimg from '../../public/assets/image/img-VaccineCard-back.svg';

export const VaccineCardStyle: CssArchiveType = {
  primary: css`
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
      & > .share_button {
        cursor: pointer;
        background-color: #ffffff99;
        width: 37.34px;
        height: 37.34px;
        border-radius: 63.29px;
        display: flex;
        align-items: center;
        justify-content: center;
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

    // & > .bottom {
    //   height: 199.37px;
    //   padding: 23px 30.3px;
    //   position: sticky;
    //   z-index: 1;
    //   background: linear-gradient(
    //     180deg,
    //     rgba(255, 255, 255, 0) 22.83%,
    //     #ffffff 59.43%
    //   );
    //   border-radius: 37.97px;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: flex-end;
    //   gap: 5.06px;
    //   & > .label {
    //     ${fontGenerator('27.85px', '800', '33.23px')}
    //   }
    //   & > .sublabel_wrap {
    //     display: flex;
    //     flex-direction: row;
    //     gap: 5px;
    //     & > .sublabel {
    //       ${fontGenerator('15.19px', '600', '18.13px')}
    //       color: #0000007D;
    //     }
    //     & > .percent {
    //       ${fontGenerator('15.19px', '500', '18.13px')}
    //       color: ${Colors.Primary};
    //     }
    //   }
    // }
  `,
  primaryLight: css`
    background-color: #ffffff4d;
  `,
  small: css`
    width: 160px;
    height: 220px;
    background-image: url('assets/image/img-VaccineCard-back.svg');
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
        ${fontGenerator('16px', '600', '19px')}
        color: ${Colors.White};
        margin-bottom: 4px;
      }

      & > .sublabel_wrap {
        display: flex;
        flex-direction: row;
        gap: 10px;

        & > .percent {
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

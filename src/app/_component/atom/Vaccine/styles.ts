import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '../atomType';
import { Colors, fontGenerator } from '@/styles';

export const VaccineCardStyle: CssArchiveType = {
  primary: css`
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      linear-gradient(
        325.27deg,
        rgba(109, 178, 248, 0.3) 7.83%,
        rgba(255, 255, 255, 0.3) 90.94%
      );
  `,
  primaryLight: css`
    background-color: #ffffff4d;
  `,
};

export const VaccineCardWrapper = styled.div<CustomStyleType>`
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

  & > .bottom {
    height: 199.37px;
    padding: 23px 30.3px;
    position: sticky;
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 22.83%,
      #ffffff 59.43%
    );
    border-radius: 37.97px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5.06px;
    & > .label {
      ${fontGenerator('27.85px', '800', '33.23px')}
    }
    & > .sublabel_wrap {
      display: flex;
      flex-direction: row;
      gap: 5px;
      & > .sublabel {
        ${fontGenerator('15.19px', '600', '18.13px')}
        color: #0000007D;
      }
      & > .percent {
        ${fontGenerator('15.19px', '500', '18.13px')}
        color: ${Colors.Primary};
      }
    }
  }

  ${(props) => VaccineCardStyle[props.variant || 'primary']}
`;

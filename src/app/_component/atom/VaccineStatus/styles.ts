import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '../atomType';
import { Colors, fontGenerator, Images } from '@/styles';
import backimg from '../../public/assets/image/img-VaccineCard-back.svg';

export const VaccineStatusContainer = styled.div`
  * {
    font-family: 'Pretendard', sans-serif;
  }
  & > .container {
    align-items: center;
    width: 100%;
    min-width: 230px;
    min-height: 105px;
    height: 100%;
    border-radius: 14px;
    border: 1px solid ${Colors.Gray100};
    padding: 20px;

    & > .top {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 11px;
      gap: 10px;
      & > .status {
        background-color: ${Colors.PrimaryLight};
        width: 52px;
        //height: 19px;
        border-radius: 5px;

        & > .complete {
          color: ${Colors.Primary};
          padding: 2.3px 5px;

          ${fontGenerator('12px', '600', '14.32px')}
        }
      }
      & > .diseaseName {
        ${fontGenerator('16px', '600', '19.09px')}
      }
      & > .vaccineType {
        ${fontGenerator('14px', '500', '16.71px')}
        color: ${Colors.Gray600};
      }
    }
    & > .detail {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: space-between;
      & > .itemWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        & > .index {
          font-family: Pretendard;
          font-size: 14px;
          font-weight: 500;
          line-height: 16.71px;
          text-align: center;
          color: ${Colors.Gray600};
        }
        & > .disable {
          font-family: Pretendard;
          font-size: 14px;
          font-weight: 500;
          line-height: 16.71px;
          text-align: center;
          color: ${Colors.Gray300};
        }
        & > .true {
          font-family: Pretendard;
          font-size: 14px;
          font-weight: 500;
          line-height: 16.71px;
          text-align: center;
          color: ${Colors.Primary};
        }
        & > img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

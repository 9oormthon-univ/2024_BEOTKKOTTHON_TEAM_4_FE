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
      justify-content: space-between;
      margin-bottom: 11px;
      & > .vaccineDose {
        ${fontGenerator('16px', '700', '19.2px', '-0.3px')}
        color: ${Colors.Primary}
      }
      & > .inoculatedAt {
        ${fontGenerator('12px', '500', '14.4px', '-0.3px')}
        color: ${Colors.Gray400}
      }
    }
    & > .inoculationAgency {
      ${fontGenerator('14px', '600', '16.71px')}
      margin-bottom: 4px;
    }
    & > .detail {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
      & > .vaccineProductName {
        ${fontGenerator('12px', '500', '14.4px', '-0.3px')}
        color: ${Colors.Gray600}
      }
      & > .vaccineBrandName {
        ${fontGenerator('12px', '500', '14.4px', '-0.3px')}
        color: ${Colors.Gray600}
      }
      & > .lotNo {
        ${fontGenerator('12px', '500', '14.4px', '-0.3px')}
        color: ${Colors.Gray600}
      }
    }
  }
`;

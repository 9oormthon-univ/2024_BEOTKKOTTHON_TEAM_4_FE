import styled from '@emotion/styled';
import { css } from '@emotion/react';

// typings
import { CssArchiveType, CustomStyleType } from '../atomType';
import { Colors, fontGenerator, Images } from '@/styles';
import backimg from '../../public/assets/image/img-VaccineCard-back.svg';

export const VaccineItemContainer = styled.div`
  * {
    font-family: 'Pretendard', sans-serif;
  }
  & > .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid ${Colors.Gray100};
    width: 245px;
    height: 92px;

    & > .section {
      & > .category {
        ${fontGenerator('14px', '500', '16.8px', '-0.3px')}
        color: ${Colors.Primary};
      }
      & > .about {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        margin-top: 9px;
        & > .vaccineName {
          ${fontGenerator('16px', '600', '19.09px')}
          color: ${Colors.Gray800};
        }
        & > .subLabel {
          ${fontGenerator('14px', '500', '16.71px')}
          color: ${Colors.Gray600};
        }
      }
    }
    & > .vaccineStatus {
    }
  }
`;

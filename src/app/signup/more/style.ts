import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const SignupWrapper = styled.main`
  height: 62px;

  .wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
  }

  .input_title {
    ${fontGenerator('14px', '600', '16.71px')}
    padding-bottom: 8px;
  }
  & > .top {
    padding: 20px 20px;
    //height: 24px;
    ${fontGenerator('20px', '700', '23.87px')}
  }
  & > .container {
    & > .item {
      padding: 14px 20px;
      & > .item_row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        & > .hiden_item {
          display: flex;
          flex-direction: row;
          gap: 6px;
          & > p {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${Colors.Gray600};
          }
          margin-right: 24px;
        }
      }
    }
  }
  & > .bottom {
    & > .confirm_button {
      border: none;
      height: 56px;
      width: 100%;
      max-width: 500px;
      padding: 20px 140px 20px 140px;
      ${fontGenerator('16px', '600', '16px', '-0.3px')}
      color: ${Colors.Gray500};
      background-color: ${Colors.Gray100};
      position: absolute;
      bottom: 0;
    }
    & > .confirm_button_Filled {
      border: none;
      height: 56px;
      width: 100%;
      max-width: 500px;
      padding: 20px 140px 20px 140px;
      ${fontGenerator('16px', '600', '16px', '-0.3px')}
      color: ${Colors.White};
      background-color: ${Colors.Primary};
      position: absolute;
      bottom: 0;
    }
  }
`;

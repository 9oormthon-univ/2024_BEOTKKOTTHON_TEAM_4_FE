import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const VerificationInputWrap = styled.main`
  .mt-2 {
    ${fontGenerator('16px', '500', '16px', '-0.3px')}
  }

  & > button {
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: none;
    background-color: unset;
    height: 56px;
    & > .password_cell_active {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      border: solid 1px ${Colors.Primary};
      background-color: ${Colors.Gray50};
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & > .password_cell_disabled {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      border: solid 1px ${Colors.Gray200};
      background-color: ${Colors.Gray50};
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  & > .input {
    //visibility: hidden;
    color: ${Colors.Primary};
    background-color: ${Colors.Primary};
    border: none;
    height: 0;
    width: 0;
  }
`;

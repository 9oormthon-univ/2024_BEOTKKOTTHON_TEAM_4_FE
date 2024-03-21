import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const VerificationWrap = styled.main`
  height: 62px;
  .input_title {
    ${fontGenerator('14px', '600', '16.71px')}
    padding-bottom: 10px;
  }
  & > .top {
    padding: 18px 20px;
    ${fontGenerator('20px', '700', '28px')}
    & > .time_count {
      display: flex;
      flex-direction: row;
      gap: 6px;
      ${fontGenerator('14px', '500', '25px')}
      color: ${Colors.Primary};
      padding: 10px 0;
    }
  }
  & > .wrap {
    padding: 10px 20px;

    & > .not {
      cursor: pointer;
      margin-top: 12px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      ${fontGenerator('14px', '500', '25px')}
      color: ${Colors.Gray600};
      text-decoration: underline;
    }
  }
`;

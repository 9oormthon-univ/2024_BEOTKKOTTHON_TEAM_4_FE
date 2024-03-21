import styled from '@emotion/styled';
import { Colors, fontGenerator } from '@/styles';

export const DonePageWrap = styled.main`
  width: 100%;
  height: 100%;
  & > .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    //padding: 0 20px;
    text-align: center;

    & > .title {
      //width: 287px;
      ${fontGenerator('24px', '700', '32px')}
      margin-bottom: 5px;
    }
    & > .content {
      //width: 287px;
      color: ${Colors.Gray600};
      ${fontGenerator('14px', '500', '22px')};
    }
  }
  & > button {
  }
`;

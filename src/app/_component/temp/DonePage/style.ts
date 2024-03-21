import styled from '@emotion/styled';
import { Colors, fontGenerator } from '@/styles';
type props = { more: boolean };
export const DonePageWrap = styled.main<props>`
  width: 100%;
  height: 100%;
  & > .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    //padding: 0 20px;
    text-align: center;
    height: ${(props) =>
      props.more ? 'calc(100vh - 186px)' : 'calc(100vh - 130px)'};

    & > .title {
      //width: 287px;
      ${fontGenerator('24px', '700', '32px')}
    }
    & > .content_top {
      margin-top: 5px;
    }
    & > .content_top,
    .content_bottom {
      color: ${Colors.Gray600};
      ${fontGenerator('14px', '500', '22px')};
    }
  }
  & > button {
  }
`;

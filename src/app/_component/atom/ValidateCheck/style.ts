import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';
import ValidateCheck from '@/app/_component/atom/ValidateCheck/index';
type props = { status: string };
export const ValidateCheckWrap = styled.div<props>`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  //align-items: center;
  .content {
    color: ${(props) =>
      props.status === 'default'
        ? Colors.Gray500
        : props.status === 'true'
          ? Colors.Primary
          : Colors.Error};
    ${fontGenerator('14px', '500', '24px', '-0.3%')}
  }
`;

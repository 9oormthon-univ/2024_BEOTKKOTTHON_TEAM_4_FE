import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const JoinWrap = styled.main`
  & > .wrap {
    padding: 20px 20px;

    & > .title {
      ${fontGenerator('16px', '600', '28px')}
      color: ${Colors.Gray800};
    }
    & > .subtitle {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      ${fontGenerator('14px', '500', '20px')}
      color: ${Colors.Gray600};
    }
  }
  & > .contents {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    & > button {
    }
  }
`;

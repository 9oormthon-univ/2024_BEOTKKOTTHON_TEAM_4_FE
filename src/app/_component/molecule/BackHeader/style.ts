import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const HeaderContainer = styled.header`
  display: flex;
  //justify-content: ;
  align-items: center;
  align-items: stretch;
  //height: 54px;
  padding: 14px 20px 12px 20px;
  box-sizing: border-box;

  & > .counter {
    ${fontGenerator('16px', '400', '26px')}
    color: ${Colors.Gray600};
    margin-right: 7px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-right: 24px;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #333d4b;
`;

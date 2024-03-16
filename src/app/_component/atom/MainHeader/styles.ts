import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const titleStyles = css`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: center;
  color: #333d4b;
`;

export const notificationIconStyles = css`
  color: #b0b8c1;
`;

export const HeaderContainer = styled.header`
  ${headerStyles}
`;

export const Title = styled.h1`
  ${titleStyles}
`;

export const NotificationIcon = styled.span`
  ${notificationIconStyles}
`;

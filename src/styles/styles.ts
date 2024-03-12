import { css } from '@emotion/react';

export const globalStyle = {
  // element
  header1: css`
    font-size: 2rem;
    line-height: 2rem;
  `,
  header2: css`
    font-size: 1.4rem;
    line-height: 1.4rem;
  `,
  header3: css`
    font-size: 1.4rem;
    line-height: 1.4rem;
  `,
  header4: css`
    font-size: 1.4rem;
    line-height: 1.4rem;
  `,
  header5: css`
    font-size: 1.4rem;
    line-height: 1.4rem;
  `,
  menu: css`
    font-size: 1.4rem;
    line-height: 1.4rem;
  `,
  // size
  fullSize: css`
    width: 100%;
    height: 100%;
  `,
  // position
  absoluteTopRight: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  absoluteTopLeft: css`
    position: absolute;
    top: 0;
    left: 0;
  `,
  absoluteBottomRight: css`
    position: absolute;
    bottom: 0;
    right: 0;
  `,
  absoluteBottomLeft: css`
    position: absolute;
    bottom: 0;
    left: 0;
  `,
  // text
  textShadow: css`
    text-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);
  `,
};

export const flexCssGenerator = (
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
) => css`
  display: ${display};
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
`;

export const fontGenerator = (
  fontSize = '1.2rem',
  fontWeight = 'normal', // 400
  lineHeight = 'normal', // 1
  letterSpacing = '0rem',
  fontStyle = 'normal',
) => css`
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  font-style: ${fontStyle};
`;

export const textEllipsisGenerator = (line = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;

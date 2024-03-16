import styled from '@emotion/styled';
import { ButtonStyleType, CssArchiveType } from '../atomType';
import { css } from '@emotion/react';
import { Colors, fontGenerator } from '@/styles';

export const ButtonStyles: CssArchiveType = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: ${Colors.Primary};
    color: ${Colors.White};
  `,
  Primary: css`
    background-color: ${Colors.Primary};
    color: ${Colors.White};
    &:hover {
      background-color: ${Colors.PrimaryDark};
    }
  `,
  Secondary: css`
    border: none;
    background-color: ${Colors.PrimaryLight};
    color: ${Colors.Primary};
    ${fontGenerator('1rem', '600', '1rem', '-0.3px')};
    &:hover {
      background-color: ${Colors.PrimaryDark};
    }
  `,
  OutlineWhite: css`
    border: 1px solid ${Colors.Gray200};
    background-color: ${Colors.White};
    color: ${Colors.Black};
    &:hover {
      background-color: ${Colors.Gray300};
    }
  `,
  Disabled: css`
    background-color: ${Colors.Gray100};
    color: ${Colors.Gray500};
  `,
  kakao: css`
    background-color: ${Colors.Kakao};
    color: ${Colors.Black};
    &:hover {
      background-color: ${Colors.KakaoDark};
    }
  `,
};

export const ButtonSizes: CssArchiveType = {
  default: css`
    ${fontGenerator('1rem', '600', '1rem', '-0.3px')}
    padding: 0 1.2rem;
    width: 100%;
    max-width: 30rem;
    height: 56px;
  `,
  large: css`
    ${fontGenerator('1rem', '600', '1rem', '-0.3px')}
    padding: 0 1.2rem;
    width: 100%;
    max-width: 343px;
    height: 56px;
  `,
  medium: css`
    padding: 0 1rem;
    width: 100%;
    max-width: 120px;
    height: 34px;
    ${fontGenerator('14px', '500', '1rem', '-0.3px')}
  `,
  small: css`
    padding: 0 1rem;
    width: 100%;
    max-width: 16rem;
    height: 2.5rem;
    ${fontGenerator('1rem', '400')}
  `,
  xsmall: css``,
  kakao: css`
    ${fontGenerator('16px', '500', '16px', '-0.3px')}
    padding: 13px 10px;
    width: 100%;
  `,
  inputButton: css``,
  half: css``,
};

export const ButtonContent = styled.button<ButtonStyleType>`
  ${ButtonStyles.default}
  ${(props) => props.variant && ButtonStyles[props.variant]}
  ${(props) => props.size && ButtonSizes[props.size]}

  ${(props) =>
    props.icon &&
    css`
      padding: 2rem;
    `} ${(props) =>
    props.prevIcon &&
    css`
      padding-left: 1.2rem;
    `}
  ${(props) => props.customStyle}
`;

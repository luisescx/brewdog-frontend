import styled, { css, DefaultTheme } from "styled-components";
import media from "styled-media-query";

import { HeadingProps, LineColors } from ".";

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;

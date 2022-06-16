import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan("medium")`
      display: none;
    `}

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    top: 35%;
    position: relative;
    z-index: 10;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan("medium")`
      width: 36rem;
    `}

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const ImageWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 3rem;
`;

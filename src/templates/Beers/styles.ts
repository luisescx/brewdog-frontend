import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    max-width: 146.4rem;
    padding-top: ${theme.spacings.medium};
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;

    ${media.lessThan("large")`
      padding-left: 64px;
      padding-right: 64px;
    `}
  `};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `};
`;

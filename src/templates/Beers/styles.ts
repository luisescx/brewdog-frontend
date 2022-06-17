import ReactPaginate from "react-paginate";
import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 146.4rem;
    padding: ${theme.spacings.medium} 3.2rem;
    margin-left: auto;
    margin-right: auto;

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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.xxlarge};
  `};
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.mainBg};
    left: 0px;
    right: 0px;
    padding: 16px;
    border-top: solid 3px ${theme.colors.primary};
  `}
`;

export const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active"
})`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
    padding: 0 5rem;

    li a {
      border-radius: 7px;
      padding: 0.1rem 1rem;
      border: gray 1px solid;
      background-color: ${theme.colors.gray};
      color: ${theme.colors.mainBg};

      margin: 0 0.6rem;
      cursor: pointer;
    }

    li.previous a,
    li.next a,
    li.break a {
      border-color: transparent;
    }

    li.active a {
      background-color: ${theme.colors.primary};
      border-color: transparent;
      color: ${theme.colors.mainBg};
      min-width: 32px;
    }

    li.disabled a {
      color: #5a5959;
    }

    li.disable,
    li.disabled a {
      cursor: default;
    }
  `}
`;

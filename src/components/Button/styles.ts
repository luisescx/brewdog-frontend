import styled, { css } from "styled-components";

const wrapperModifiers = {
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button`
  ${({ theme, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: 0.4rem;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    width: 100%;
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
    }

    &:hover {
      background: ${`rgba(246, 193, 1, 0.7)`};
    }

    ${disabled && wrapperModifiers.disabled()};
  `}
`;

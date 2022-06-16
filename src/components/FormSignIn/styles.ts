import styled, { css } from "styled-components";

export const ButtonLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;

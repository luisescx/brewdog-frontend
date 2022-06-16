import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.ts";
import theme from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />

      <Story />
    </ThemeProvider>
  )
];

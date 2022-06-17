import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.ts";
import theme from "../src/styles/theme";

export const parameters = {
  backgrounds: {
    default: "brewDog-dark",
    values: [
      {
        name: "brewDog-light",
        value: theme.colors.lightBg
      },
      {
        name: "brewDog-dark",
        value: theme.colors.mainBg
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />

      <Story />
    </ThemeProvider>
  )
];

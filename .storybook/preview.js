import GlobalStyles from "../src/styles/global.ts";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />

      <Story />
    </>
  )
];

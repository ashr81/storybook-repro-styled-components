import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from "styled-components";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import theme from "../src/styles/theme";

addDecorator(withA11y)
addDecorator(withKnobs);
addDecorator(storyFn => {
  return (
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  );
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

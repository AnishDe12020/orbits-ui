import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export * from "./colors";
export * from "./borders";

export * from "./components";

import {
  mainColors,
  accentBlue,
  accentBlueTokens,
  stateColors,
} from "./colors";

import { components } from "./components";

const theme = extendTheme({
  components,
  colors: {
    ...accentBlue,
  },
  semanticTokens: {
    colors: { ...mainColors, ...accentBlueTokens, ...stateColors },
  },
  styles: {
    global: {
      "html, body": {
        background: "brand.primary",
      },
    },
  },
}) as ChakraTheme;

export { theme };

export default theme;

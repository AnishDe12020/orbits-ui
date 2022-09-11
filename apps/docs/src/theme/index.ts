import { extendTheme } from "@chakra-ui/react";
import {
  components,
  mainColors,
  accentBlue,
  accentBlueTokens,
  stateColors,
} from "@orbits-ui/chakra-theme";

const theme = extendTheme({
  components,
  colors: { ...accentBlue },
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
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

export default theme;

import { extendTheme } from "@chakra-ui/react";

const { theme } = require("../../../packages/orbi-chakra-theme/src/index");

export const parameters = {
  chakra: {
    theme: theme,
  },
};

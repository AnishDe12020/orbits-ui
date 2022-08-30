const {
  mainColors,
  components,
  accentBlue,
} = require("../../../packages/orbi-chakra-theme/src/index");

export const parameters = {
  chakra: {
    theme: {
      components,
      semanticTokens: { colors: { ...mainColors, ...accentBlue } },
      styles: {
        global: {
          "html, body": {
            background: "brand.primary",
          },
        },
      },
    },
  },
};

const {
  mainColors,
  components,
} = require("../../../packages/orbi-chakra-theme/src/index");

export const parameters = {
  chakra: {
    theme: {
      components,
      semanticTokens: { colors: { ...mainColors } },
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

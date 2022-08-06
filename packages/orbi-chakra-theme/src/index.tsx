import { ChakraTheme, extendTheme } from "@chakra-ui/react";

import Button from "./components/Button";

const theme = extendTheme({
  components: {
    Button,
  },
}) as ChakraTheme;

export { theme };

export default theme;

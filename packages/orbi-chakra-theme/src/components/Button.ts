import type {
  ComponentStyleConfig,
  SystemStyleFunction,
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const variantSolid: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  const bg = mode(`${c}.200`, `${c}.700`)(props);

  return {
    bg,
    color: mode(`gray.900`, `gray.100`)(props),
    _hover: {
      bg: mode(`${c}.300`, `${c}.800`)(props),
      _disabled: {
        bg,
      },
    },
    _active: { bg: mode(`${c}.400`, `${c}.800`)(props) },
  };
};

const Button: ComponentStyleConfig = {
  baseStyle: { borderRadius: "lg" },
  sizes: {
    sm: {
      fontSize: "sm",
      px: "3",
      py: "0.5",
    },
    md: {
      fontSize: "md",
      px: "4",
      py: "1",
    },
    lg: {
      fontSize: "lg",
      px: "5",
      py: "2",
      borderRadius: "xl",
    },
  },
  variants: { solid: variantSolid },
};

export default Button;

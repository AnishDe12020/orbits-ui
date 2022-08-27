import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/styled-system";
import { transparentize } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/system";

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: "yellow.500",
    color: "black",
    hoverBg: "yellow.600",
    activeBg: "yellow.700",
  },
  cyan: {
    bg: "cyan.500",
    color: "black",
    hoverBg: "cyan.600",
    activeBg: "cyan.700",
  },
};

const variantSolid: SystemStyleFunction = props => {
  const { colorScheme: c, theme } = props;

  if (c === "brand") {
    return {
      color: mode("black", "white")(props),
      bg: "brand.secondary",
      _hover: { bg: "brand.tertiary" },
      _active: { bg: "brand.quaternary" },
    };
  }

  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const {
    bg = `${c}.500`,
    color = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`,
  } = accessibleColorMap[c] ?? {};

  const background = mode(bg, `${c}.400`)(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  };
};

const defaultProps = {
  colorScheme: "brand",
};

const sizes: Record<string, SystemStyleObject> = {
  xl: {
    h: 11,
    minW: 11,
    fontSize: "xl",
    px: 5,
  },
  lg: {
    h: 9,
    minW: 9,
    fontSize: "lg",
    px: 4,
  },
  md: {
    h: 8,
    minW: 8,
    fontSize: "md",
    px: 3,
  },
  sm: {
    h: 7,
    minW: 7,
    fontSize: "sm",
    px: 2.5,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2,
  },
};

export const Button = {
  baseStyle: {
    transition: "transform 0.08s ease-out, background 0.3s, opacity 0.3s",
    _active: { transform: "scale(0.99)" },
    _disabled: {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
  variants: {
    solid: variantSolid,
  },
  defaultProps,
  sizes,
};

export default Button;

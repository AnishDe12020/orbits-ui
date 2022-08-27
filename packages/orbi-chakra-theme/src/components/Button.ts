import { mode, transparentize } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/styled-system";
import { SystemStyleObject } from "@chakra-ui/system";

type AccessibleColor = {
  bg?: string;
  color?: string;
  hoverBg?: string;
  activeBg?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    color: "black",
  },
  cyan: {
    color: "black",
  },
};

const variantSolid: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  if (c === "brand") {
    return {
      color: mode("black", "white")(props),
      bg: "brand.secondary",
      _hover: { bg: "brand.tertiary" },
      _active: { bg: "brand.quaternary" },
      border: "1px",
      borderColor: "brand.tertiary",
    };
  } else if (c === "gray") {
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

  const background = mode(bg, `${c}.300`)(props);

  return {
    bg: background,
    color: mode(color, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.400`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.500`)(props) },
  };
};

const variantLink: SystemStyleFunction = props => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color:
      c === "brand"
        ? mode(`gray.700`, `gray.300`)(props)
        : mode(`${c}.700`, `${c}.300`)(props), // TODO: make this accent color or smth
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color:
        c === "brand"
          ? mode(`gray.900`, `gray.500`)(props)
          : mode(`${c}.900`, `${c}.500`)(props), // TODO: make this accent color or smth
    },
  };
};

const variantGhost: SystemStyleFunction = props => {
  const { colorScheme: c, theme } = props;

  if (c === "gray" || c === "brand") {
    // TODO: Use accent for brand? IDK
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.300`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.300`, 0.24)(theme);

  const lightHoverBg = transparentize(`${c}.600`, 0.12)(theme);
  const lightActiveBg = transparentize(`${c}.600`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.300`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(lightHoverBg, darkHoverBg)(props),
    },
    _active: {
      bg: mode(lightActiveBg, darkActiveBg)(props),
    },
  };
};

const variantOutline: SystemStyleFunction = props => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" || c === "brand" ? borderColor : "currentColor", // TODO: Use accent for brand? IDK
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px",
    },
    ...variantGhost(props),
  };
};

const defaultProps = {
  colorScheme: "brand",
};

const variants = {
  solid: variantSolid,
  link: variantLink,
  ghost: variantGhost,
  outline: variantOutline,
};

const sizes: Record<string, SystemStyleObject> = {
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
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  variants,
  defaultProps,
  sizes,
};

export default Button;

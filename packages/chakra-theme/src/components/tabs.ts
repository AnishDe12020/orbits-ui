import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { getColor, mode } from "@chakra-ui/theme-tools";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleRoot = defineStyle(props => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block",
  };
});

const baseStyleTab = defineStyle(props => {
  const { isFitted } = props;

  return {
    flex: isFitted ? 1 : undefined,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  };
});

const baseStyleTablist = defineStyle(props => {
  const { align = "start", orientation } = props;

  const alignments: Record<string, string> = {
    end: "flex-end",
    center: "center",
    start: "flex-start",
  };

  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row",
  };
});

const baseStyleTabpanel = defineStyle({
  p: 4,
});

const baseStyle = definePartsStyle(props => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel,
}));

const sizes = {
  sm: definePartsStyle({
    tab: {
      py: 0.5,
      px: 2,
      fontSize: "sm",
    },
  }),
  md: definePartsStyle({
    tab: {
      fontSize: "md",
      py: 1,
      px: 3,
    },
  }),
  lg: definePartsStyle({
    tab: {
      fontSize: "lg",
      py: 2,
      px: 4,
    },
  }),
};

const variantLine = definePartsStyle(props => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp =
    orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";

  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit",
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "currentColor",
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
      },
      _disabled: {
        _active: { bg: "none" },
      },
    },
  };
});

const variantEnclosed = definePartsStyle(props => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "inherit",
        borderBottomColor: mode(`white`, `gray.800`)(props),
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
  };
});

const variantEnclosedColored = definePartsStyle(props => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode(`gray.50`, `whiteAlpha.50`)(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px",
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent",
      },
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit",
    },
  };
});

const variantSoftRounded = definePartsStyle(props => {
  const { colorScheme: c, theme } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme, `${c}.700`),
        bg: getColor(theme, `${c}.100`),
      },
    },
  };
});

const variantSolidRounded = definePartsStyle(props => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode(`#fff`, "gray.800")(props),
        bg: mode(`${c}.600`, `${c}.300`)(props),
      },
    },
  };
});

const variantWrapped = definePartsStyle(props => {
  return {
    tab: {
      borderRadius: "md",
      fontWeight: "semibold",
      color: mode("gray.700", "gray.300")(props),
      _selected: {
        color: mode("gray.900", "white")(props),
        bg: `brand.tertiary`,
      },
      _hover: {
        bg: "brand.tertiary",
      },
    },
    tablist: {
      borderRadius: "md",
      backgroundColor: "brand.secondary",
      py: 1,
      px: 1,
      experimental_spaceX: 2,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "brand.tertiary",
    },
  };
});

const variantWrappedColored = definePartsStyle(props => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "md",
      fontWeight: "semibold",
      color: mode("gray.700", "gray.300")(props),
      _selected: {
        color: "white",
        bg: `${c}.600`,
      },
      _hover: {
        color: "white",
        bg: `${c}.600`,
      },
    },
    tablist: {
      borderRadius: "md",
      backgroundColor: "brand.secondary",
      py: 1,
      px: 1,
      experimental_spaceX: 2,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "brand.tertiary",
    },
  };
});

const variantUnstyled = definePartsStyle({});

const variants = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  wrapped: variantWrapped,
  "wrapped-colored": variantWrappedColored,
  unstyled: variantUnstyled,
};

export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "wrapped",
    colorScheme: "accent",
  },
});

export default tabsTheme;

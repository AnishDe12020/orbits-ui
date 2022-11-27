import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { runIfFn } from "../utils/run-if-fn";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleDialog = defineStyle((props) => {
  const { scrollBehavior } = props;

  return {
    borderRadius: "lg",
    bg: "brand.secondary",
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
    boxShadow: mode("lg", "dark-lg")(props),
    border: "1px",
    borderColor: "brand.tertiary",
  };
});
const baseStyle = definePartsStyle((props) => ({
  dialog: runIfFn(baseStyleDialog, props),
}));

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: { size: "md" },
});

export default modalTheme;

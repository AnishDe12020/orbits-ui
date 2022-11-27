import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { cssVar, mode } from "@chakra-ui/theme-tools";

const $bg = cssVar("tooltip-bg");
const $fg = cssVar("tooltip-fg");
const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle = defineStyle((props) => {
  const bg = "brand.secondary";
  const fg = mode("gray.800", "gray.200")(props);
  return {
    color: $fg.reference,
    [$bg.variable]: `colors.${bg}`,
    [$fg.variable]: `colors.${fg}`,
    [$arrowBg.variable]: $bg.reference,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "brand.tertiary",
    borderRadius: "md",
  };
});

export const tooltipTheme = defineStyleConfig({
  baseStyle,
});

export default tooltipTheme;

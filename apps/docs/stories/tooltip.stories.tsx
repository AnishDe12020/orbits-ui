import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Tooltip } from "@chakra-ui/react";

export const Default = args => {
  return (
    <Tooltip
      label="Lorem ipsum idk im typing this out, autocomplete bad bad"
      {...args}
    >
      Hover me
    </Tooltip>
  );
};
export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    hasArrow: { control: { type: "boolean" } },
    placement: {
      control: {
        type: "select",
        options: [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ],
      },
    },
  },
  args: { hasArrow: false, placement: "auto" },
} as ComponentMeta<typeof Tooltip>;

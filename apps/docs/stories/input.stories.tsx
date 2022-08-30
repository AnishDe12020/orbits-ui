import React from "react";

import { ComponentMeta } from "@storybook/react";

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

export const Default = args => <Input {...args} placeholder="Default" />;
Default.args = {
  size: "md",
  variant: "outline",
};

export const Disabled = args => (
  <Input {...args} isDisabled placeholder="Disabled" />
);
Disabled.args = {
  size: "md",
  variant: "outline",
};

export const WithAddons = ({ size, variant, ...args }) => (
  <InputGroup size={size} variant={variant}>
    <InputLeftAddon>https://</InputLeftAddon>
    <Input {...args} placeholder="With Addons" />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
);
WithAddons.args = {
  size: "md",
  variant: "outline",
};

export default {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      control: { type: "select", options: ["xs", "sm", "md", "lg"] },
    },
    variant: {
      control: {
        type: "select",
        options: ["outline", "filled", "flushed", "unstyled"],
      },
    },
  },
} as ComponentMeta<typeof Input>;

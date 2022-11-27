import React from "react";

import { ComponentMeta } from "@storybook/react";

import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

export const Default = (args) => <Input {...args} placeholder="Default" />;

export const Disabled = (args) => (
  <Input {...args} isDisabled placeholder="Disabled" />
);

export const WithAddonsAndButton = ({ size, variant, ...args }) => (
  <Flex experimental_spaceX={4}>
    <InputGroup size={size} variant={variant}>
      <InputLeftAddon>https://</InputLeftAddon>
      <Input {...args} placeholder="With Addons" />
      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>
    <Button size={size}>Submit</Button>
  </Flex>
);

export const Invalid = (args) => (
  <Input {...args} isInvalid placeholder="Invalid" />
);

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
  args: {
    size: "md",
    variant: "outline",
  },
} as ComponentMeta<typeof Input>;

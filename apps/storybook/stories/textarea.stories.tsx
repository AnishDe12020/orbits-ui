import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Textarea } from "@chakra-ui/react";

export const Default = (args) => <Textarea {...args} placeholder="Default" />;

export const Disabled = (args) => (
  <Textarea {...args} isDisabled placeholder="Disabled" />
);

export const Invalid = (args) => (
  <Textarea {...args} isInvalid placeholder="Invalid" />
);

export default {
  title: "Textarea",
  component: Textarea,
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
} as ComponentMeta<typeof Textarea>;

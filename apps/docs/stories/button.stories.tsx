import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Button } from "@chakra-ui/react";

export const Default = args => <Button {...args}>Default</Button>;
Default.args = {
  size: "md",
  variant: "solid",
  colorScheme: "brand",
};

export const Disabled = args => (
  <Button {...args} isDisabled>
    Disabled
  </Button>
);
Disabled.args = {
  size: "md",
  variant: "solid",
  colorScheme: "brand",
};

export const Loading = args => (
  <Button {...args} isLoading>
    Loading
  </Button>
);
Loading.args = {
  size: "md",
  variant: "solid",
  colorScheme: "brand",
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select", options: ["xs", "sm", "md", "lg"] },
    },
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "ghost", "link"],
      },
    },
    colorScheme: {
      control: {
        type: "select",
        options: [
          "brand",
          "accent",
          "cyan",
          "gray",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
        ],
      },
    },
  },
} as ComponentMeta<typeof Button>;

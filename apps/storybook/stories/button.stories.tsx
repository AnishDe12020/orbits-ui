import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Button } from "@chakra-ui/react";

export const Default = args => <Button {...args}>Default</Button>;

export const Disabled = args => (
  <Button {...args} isDisabled>
    Disabled
  </Button>
);
export const Loading = args => (
  <Button {...args} isLoading>
    Loading
  </Button>
);
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
  args: {
    size: "md",
    variant: "solid",
    colorScheme: "brand",
  },
} as ComponentMeta<typeof Button>;

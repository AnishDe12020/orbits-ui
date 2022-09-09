import React from "react";

import { ComponentMeta } from "@storybook/react";

import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

export const Default = (args) => {
  return (
    <Popover {...args}>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        <PopoverFooter>This is the footer</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
export default {
  title: "Popover",
  component: Popover,
  argTypes: {
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
  args: { placement: "auto" },
} as ComponentMeta<typeof Popover>;

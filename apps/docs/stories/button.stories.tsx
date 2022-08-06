import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Button } from "@chakra-ui/react";

export const Default = () => <Button bg="brand.100">Text</Button>;

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

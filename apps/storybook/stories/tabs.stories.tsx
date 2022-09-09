import React from "react";

import { ComponentMeta } from "@storybook/react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export const Default = args => {
  return (
    <Tabs {...args}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "line",
          "enclosed",
          "enclosed-colored",
          "soft-rounded",
          "solid-rounded",
          "wrapped",
          "wrapped-colored",
          "unstyled",
        ],
      },
    },
    colorScheme: {
      control: {
        type: "select",
        options: [
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
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
  args: {
    variant: "wrapped",
    size: "md",
    colorScheme: "accent",
  },
} as ComponentMeta<typeof Tabs>;

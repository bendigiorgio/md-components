import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import React from "react";

const meta: Meta<typeof Collapsible> = {
  title: "Component/Collapsible",
  component: Collapsible,
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger>Trigger</CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  ),
};
import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import React from "react";

const meta: Meta<typeof Accordion> = {
  title: "Component/Accordion",
  component: Accordion,
};
type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = {
  // @ts-expect-error
  render: ({ items, ...args }) => (
    <Accordion {...args}>
      {items.map(({ value, triggerText, contentText }) => (
        <AccordionItem value={value} key={value}>
          <AccordionTrigger>{triggerText}</AccordionTrigger>
          <AccordionContent>{contentText}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Multiple = {
  ...AccordionTemplate,
  args: {
    type: "multiple",
    defaultValue: ["item-2"],
    items: [
      {
        value: "item-1",
        triggerText: "First Item",
        contentText: "Content for the first item",
      },
      {
        value: "item-2",
        triggerText: "Second Item",
        contentText: "Content for the second item",
      },
    ],
  },
};

export const Single = {
  ...AccordionTemplate,
  args: {
    type: "single",
    defaultValue: "item-2",
    items: [
      {
        value: "item-1",
        triggerText: "First Item",
        contentText: "Content for the first item",
      },
      {
        value: "item-2",
        triggerText: "Second Item",
        contentText: "Content for the second item",
      },
    ],
  },
};

export default meta;

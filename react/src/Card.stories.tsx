import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card, CardContent, CardFooter, CardHeader } from "./Card";

const meta = {
  component: Card,
  title: "Card",
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>Header</CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </>
    ),
  },
};

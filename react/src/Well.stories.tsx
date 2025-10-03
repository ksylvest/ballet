import type { Meta, StoryObj } from "@storybook/react-vite";

import { Well } from "./Well";

const meta = {
  component: Well,
  title: "Well",
  tags: ["autodocs"],
} satisfies Meta<typeof Well>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

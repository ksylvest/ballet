import type { Meta, StoryObj } from "@storybook/react-vite";

import { Code } from "./Code";

const meta = {
  component: Code,
  title: "Code",
  tags: ["autodocs"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

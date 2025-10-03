import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "e.g. George Harrison",
    type: "text",
  },
};

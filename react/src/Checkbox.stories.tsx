import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

const meta = {
  component: Checkbox,
  title: "Checkbox",
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

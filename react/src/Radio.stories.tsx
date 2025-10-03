import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta = {
  component: Radio,
  title: "Radio",
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

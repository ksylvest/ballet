import type { Meta, StoryObj } from "@storybook/react-vite";

import { Progress, ProgressBar } from "./Progress";

const meta = {
  component: Progress,
  title: "Progress",
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ProgressBar value={0.1} color="red" />
        <ProgressBar value={0.2} color="green" />
        <ProgressBar value={0.3} color="blue" />
      </>
    ),
  },
};

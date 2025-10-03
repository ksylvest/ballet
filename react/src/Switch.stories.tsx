import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "./Switch";

const meta = {
  component: Switch,
  title: "Switch",
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <button type="button" aria-checked={false}>
          Option A
        </button>
        <button type="button" aria-checked={true}>
          Option B
        </button>
        <button type="button" aria-checked={false}>
          Option C
        </button>
      </>
    ),
  },
};

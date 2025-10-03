import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "./Field";
import { Input } from "./Input";
import { Label } from "./Label";

const meta = {
  component: Field,
  title: "Field",
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" placeholder="e.g. George Harrison" />
      </>
    ),
  },
};

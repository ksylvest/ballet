import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";
import { Field } from "./Field";
import { Form } from "./Form";
import { Input } from "./Input";
import { Label } from "./Label";

const meta = {
  component: Form,
  title: "Form",
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="e.g. George Harrison" />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g. george.harrison@beatles.com"
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="e.g. beatles" />
        </Field>

        <Button type="submit">Go!</Button>
      </>
    ),
  },
};

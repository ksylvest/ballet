import type { Meta, StoryObj } from "@storybook/react-vite";

import { Modal } from "./Modal";

const meta = {
  component: Modal,
  title: "Modal",
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <>Header</>,
    footer: <>Footer</>,
    content: <>Content</>,
  },
};

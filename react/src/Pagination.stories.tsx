import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination, PaginationContent, PaginationSummary } from "./Pagination";

const meta = {
  component: Pagination,
  title: "Pagination",
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PaginationSummary>
          Page <strong>1</strong> of <strong>5</strong>
        </PaginationSummary>
        <PaginationContent>
          <a href="#prev" aria-label="Prev">
            ‹ Prev
          </a>
          <span>…</span>
          <a href="#">2</a>
          <a href="#" aria-current="page">
            3
          </a>
          <a href="#">4</a>
          <span>…</span>
          <a href="#next" aria-label="Next">
            Next ›
          </a>
        </PaginationContent>
      </>
    ),
  },
};

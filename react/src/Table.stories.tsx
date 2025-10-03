import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "./Table";

const meta = {
  component: Table,
  title: "Table",
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
          </tr>
          <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
          </tr>
          <tr>
            <td>Cell 7</td>
            <td>Cell 8</td>
            <td>Cell 9</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer 1</td>
            <td>Footer 2</td>
            <td>Footer 3</td>
          </tr>
        </tfoot>
      </>
    ),
  },
};

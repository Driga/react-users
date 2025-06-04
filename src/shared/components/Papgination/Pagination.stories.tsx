import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items to paginate',
    },
    perPage: {
      control: { type: 'number', min: 1 },
      description: 'Items per page',
    },
    current: {
      control: { type: 'number', min: 1 },
      description: 'Current active page number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Static preview with 3 pages and page 1 active
 */
export const Default: Story = {
  args: {
    total: 30,
    perPage: 10,
    current: 1,
  },
};

/**
 * Interactive story with internal state to test pagination clicks
 */
export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
        <div style={{ padding: '1rem' }}>
          <Pagination total={50} perPage={10} current={page} onPageChange={setPage} />
          <p className="text-muted text-center mt-3">Current page: {page}</p>
        </div>
    );
  },
};

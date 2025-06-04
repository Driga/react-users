import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import UserSearch from './UserSearch';

const meta: Meta<typeof UserSearch> = {
    title: 'Components/UserSearch',
    component: UserSearch,
    tags: ['autodocs'],
    argTypes: {
        value: {
            description: 'The current value of the input field',
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof UserSearch>;

/**
 * Default static version with initial value
 */
export const WithInitialValue: Story = {
    args: {
        value: 'Alice',
    },
};

/**
 * Interactive example using useState to manage input
 */
export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div style={{ maxWidth: 400, padding: '1rem' }}>
                <UserSearch value={value} onChange={setValue} />
                <p className="text-muted">Current value: {value}</p>
            </div>
        );
    },
    parameters: {
        docs: {
            description: {
                story: 'An interactive version with local state for manual testing.',
            },
        },
    },
};

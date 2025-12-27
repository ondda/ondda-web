import { Button } from '../app/components/Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { onClick: () => alert('Button clicked!') },
};

export const Disabled: Story = {
    args: {
        onClick: () => alert('Button clicked!'),
        disabled: true,
    },
};

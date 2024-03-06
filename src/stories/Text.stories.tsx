import { Text } from '../app/components/Text';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Lorem ipsum whatever else you want to read here',
    },
};

export const PositiveTone: Story = {
    args: {
        children: 'Lorem ipsum whatever else you want to read here',
        tone: 'positive',
    },
};

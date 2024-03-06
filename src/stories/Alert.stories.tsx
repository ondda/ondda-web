import { Alert } from '../app/components/Alert';
import { Text } from '../app/components/Text';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Alert',
    component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
    args: {
        tone: 'positive',
        children: (
            <Text tone="positive" weight="bold" alignment="left">
                ¡listo! te agendamos
            </Text>
        ),
    },
};

export const Critical: Story = {
    args: {
        tone: 'critical',
        children: (
            <Text tone="critical" weight="bold" alignment="left">
                email inválido
            </Text>
        ),
    },
};

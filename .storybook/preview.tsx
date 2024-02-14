import type { Preview } from "@storybook/react";
import { Baloo_Chettan_2, Public_Sans } from 'next/font/google'
import React from "react";

const balooChettan = Baloo_Chettan_2({
  subsets: ['latin'],
  variable: '--font-baloo-chettan'
})

const publicSans = Public_Sans({
    subsets: ['latin'],
    variable: '--font-public-sans',
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`${balooChettan.variable} ${publicSans.variable}`}>
        <Story />
      </main>
    ),
]
};

export default preview;

import { createGlobalTheme, fontFace, globalStyle } from '@vanilla-extract/css'

const publicSans = fontFace({
    src: `url('/fonts/public-sans.woff2') format('woff2')`,
    fontWeight: '100 900',
})

const balooChettan = fontFace({
    src: `url('/fonts/baloo-chettan.woff2') format('woff2')`,
    fontWeight: '400 800',
})

export const globalVars = createGlobalTheme(':root', {
    color: {
        pink: '#EA3788',
        lightPink: '#FD4799',
        white: '#FEFEFE',
        gray: '#2D313B',
        lightGray: '#2D313B40',
    },
    font: {
        ui: {
            family: publicSans,
        },
        display: {
            family: `${balooChettan}, sans-serif`,
        },
    },
    animation: {
        transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
})

globalStyle('*', {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
})

globalStyle('html', {
    fontSize: '62.5%',
})

globalStyle('body', {
    fontSize: '1.6rem',
})

globalStyle('html, body', {
    maxWidth: '100vw',
    overflowX: 'hidden',
})

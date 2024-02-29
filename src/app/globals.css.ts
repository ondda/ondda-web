import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const globalVars = createGlobalTheme(':root', {
    color: {
        pink: '#EA3788',
        lightPink: '#FD4799',
        white: '#FEFEFE',
        gray: '#2D313B',
        lightGray: '#2D313B40',
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

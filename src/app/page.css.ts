import { style } from '@vanilla-extract/css'

export const main = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6rem',
    minHeight: '100vh',
})

export const center = style({
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '4rem 0',
})

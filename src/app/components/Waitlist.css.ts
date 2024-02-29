import { globalStyle, style } from '@vanilla-extract/css'

export const waitlistGrid = style({
    display: 'grid',
    rowGap: '3.2rem',
    '@media': {
        'only screen and (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr',
        },
    },
})

globalStyle(`${waitlistGrid} > *`, {
    gridColumn: 1,
    '@media': {
        'only screen and (min-width: 768px)': {
            gridColumn: 2,
        },
    },
})

globalStyle(`${waitlistGrid} > img`, {
    '@media': {
        'only screen and (min-width: 768px)': {
            rotate: '45deg',
            gridColumn: 1,
            gridRow: '1 / span 2',
        },
    },
})

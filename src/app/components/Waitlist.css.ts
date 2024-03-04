import { globalStyle, style } from '@vanilla-extract/css';

export const gridOnDesktopTwoColumns = style({
    display: 'grid',
    rowGap: '3.2rem',
    '@media': {
        'only screen and (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr',
        },
    },
});

globalStyle(`${gridOnDesktopTwoColumns} > img`, {
    margin: 'auto',
});

export const flexDirectionColumn = style({
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3.2rem',
});

export const onDesktopFirstColumn = style({
    '@media': {
        'only screen and (min-width: 768px)': {
            gridColumn: 1,
        },
    },
});

export const onDesktopSpanTwoRows = style({
    '@media': {
        'only screen and (min-width: 768px)': {
            gridRow: '1 / span 2',
        },
    },
});

export const onDesktopSecondColumn = style({
    '@media': {
        'only screen and (min-width: 768px)': {
            gridColumn: 2,
        },
    },
});

export const onDesktopRotate45Deg = style({
    '@media': {
        'only screen and (min-width: 768px)': {
            rotate: '45deg',
        },
    },
});

export const alignSelfEnd = style({
    alignSelf: 'end',
});

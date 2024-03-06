import { style } from '@vanilla-extract/css';

export const main = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.6rem',
    minHeight: '100vh',
    maxWidth: '768px',
    marginInline: 'auto',
    rowGap: '1.6rem',
});

export const footerSpacing = style({
    height: '9.6rem',
});

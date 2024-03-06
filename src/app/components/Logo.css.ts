import { globalVars } from '../theme/globals.css';
import { style } from '@vanilla-extract/css';

export const logoDisplay = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    '@media': {
        'only screen and (min-width: 768px)': {
            justifyContent: 'center',
        },
    },
});

export const logoFont = style({
    fontFamily: globalVars.font.logo.family,
    fontWeight: 600,
    fontSize: '3.6rem',
    marginLeft: '0.8rem',
});

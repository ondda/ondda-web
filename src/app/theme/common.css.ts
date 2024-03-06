import { globalVars } from './globals.css';
import { style } from '@vanilla-extract/css';

const shadow = style({
    boxShadow: '3px 4px 0 rgba(0, 0, 0, 0.25)',
});

const shadowNotActive = style([
    shadow,
    {
        ':active': {
            translate: '3px 3px',
            boxShadow: 'none',
        },
    },
]);

const shadowNoFocus = style([
    shadow,
    {
        ':focus': {
            translate: '3px 3px',
            boxShadow: 'none',
        },
    },
]);

export const addShadowHiddenOn = (selector: 'active' | 'focus') =>
    selector === 'active' ? shadowNotActive : shadowNoFocus;

export const rounded = style({
    borderRadius: 8,
});

export const roundedGrayBorder = style({
    border: `3px solid ${globalVars.color.gray}`,
    borderRadius: 8,
});

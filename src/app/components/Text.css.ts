import { ColorTone, TextAlignment, TextWeight } from '../../app/theme/types';
import { globalVars } from '../theme/globals.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const neoText = style({
    margin: 0,
    fontFamily: globalVars.font.sans.family,
    lineHeight: '2.4rem',
});

globalStyle(`${neoText} b`, {
    fontWeight: 500,
});

export const colorTones: { [K in ColorTone]: string } = {
    positive: style({
        color: globalVars.color.darkGreen,
    }),
    neutral: style({
        color: globalVars.color.gray,
    }),
    critical: style({
        color: globalVars.color.pink,
    }),
};

const normalWeight = style({
    fontWeight: 200,
});

const boldWeight = style({
    fontWeight: 600,
});

export const textWeight: { [K in TextWeight]: string } = {
    normal: normalWeight,
    bold: boldWeight,
};

export const textAlignment: { [K in TextAlignment]: string } = {
    center: style({
        textAlign: 'center',
    }),
    left: style({
        textAlign: 'left',
    }),
};

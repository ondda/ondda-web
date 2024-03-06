import { globalVars } from '../../app/theme/globals.css';
import { rounded } from '../../app/theme/common.css';
import { style } from '@vanilla-extract/css';

export const shadowAndBackgroundColor = {
    positive: style({
        boxShadow: `3px 4px 0 ${globalVars.color.darkGreen}`,
        backgroundColor: globalVars.color.lightGreen,
    }),
    critical: style({
        boxShadow: `3px 4px 0 ${globalVars.color.pink}`,
        backgroundColor: globalVars.color.veryLightPink,
    }),
};

export const roundedBoxWithPadding = style([
    rounded,
    {
        padding: '1.2rem 1.2rem',
    },
]);

export const flexDirectionRow = style({
    display: 'flex',
    flexDirection: 'row',
    columnGap: '0.8rem',
});

export const paddingTopSmall = style({
    paddingTop: '0.8rem',
});

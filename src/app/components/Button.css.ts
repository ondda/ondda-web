import { style } from '@vanilla-extract/css';
import { globalVars } from '../theme/globals.css';
import {
    roundedGrayBorder,
    addShadowHiddenOn,
    shadow,
} from '../theme/common.css';

export const neoButton = style([
    roundedGrayBorder,
    addShadowHiddenOn('active'),
    {
        // font
        fontSize: '2.2rem',
        fontWeight: 600,
        fontFamily: globalVars.font.sans.family,
        backgroundColor: globalVars.color.pink,
        color: globalVars.color.white,
        cursor: 'pointer',
        padding: '1.2rem 0.8rem',
        transition: globalVars.animation.transition,
        ':hover': {
            backgroundColor: globalVars.color.lightPink,
        },
    },
]);

export const disabledNeoButton = style([
    roundedGrayBorder,
    {
        // font
        fontSize: '2.2rem',
        fontWeight: 600,
        fontFamily: globalVars.font.sans.family,
        backgroundColor: globalVars.color.veryLightPink,
        color: globalVars.color.lighterPink,
        cursor: 'auto',
        padding: '1.2rem 0.8rem',
        translate: '3px 3px',
        transition: globalVars.animation.transition,
    },
]);

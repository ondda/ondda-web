import { style } from '@vanilla-extract/css'
import { globalVars } from '../theme/globals.css'
import { roundedBorder, addShadowHiddenOn } from '../theme/utils.css'

export const neoButton = style([
    roundedBorder,
    addShadowHiddenOn('active'),
    {
        // font
        fontSize: '2.2rem',
        fontWeight: 600,
        fontFamily: globalVars.font.ui.family,
        backgroundColor: globalVars.color.pink,
        color: globalVars.color.white,
        cursor: 'pointer',
        padding: '1.2rem 0.8rem',
        transition: globalVars.animation.transition,
        ':hover': {
            backgroundColor: globalVars.color.lightPink,
        },
    },
])

import { roundedBorder, addShadowHiddenOn } from '../theme/common.css'
import { globalVars } from '../theme/globals.css'
import { style } from '@vanilla-extract/css'

export const neoTextField = style([
    roundedBorder,
    addShadowHiddenOn('focus'),
    {
        // font
        fontSize: '2.2rem',
        fontWeight: 600,
        fontFamily: globalVars.font.ui.family,
        color: globalVars.color.gray,
        padding: '1.2rem 0.8rem',
        transition: globalVars.animation.transition,
        '::placeholder': {
            color: globalVars.color.lightGray,
        },
        ':focus': {
            outline: 'none',
        },
    },
])

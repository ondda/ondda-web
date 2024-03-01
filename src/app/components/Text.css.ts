import { globalVars } from '../theme/globals.css'
import { style } from '@vanilla-extract/css'
export const neoText = style({
    color: globalVars.color.gray,
    margin: 0,
    fontFamily: globalVars.font.sans.family,
    fontWeight: 200,
    textAlign: 'center',
})

import { globalVars } from '../theme/globals.css'
import { style } from '@vanilla-extract/css'

export const neoHeading = style({
    color: globalVars.color.gray,
    fontFamily: globalVars.font.sans.family,
    fontWeight: 200,
    textAlign: 'center',
    margin: 0,
})

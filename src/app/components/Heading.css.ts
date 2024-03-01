import { globalVars } from '../globals.css'
import { style } from '@vanilla-extract/css'

export const neoHeading = style({
    color: globalVars.color.gray,
    fontFamily: globalVars.font.display.family,
    fontWeight: 'lighter',
    textAlign: 'center',
    margin: 0,
})

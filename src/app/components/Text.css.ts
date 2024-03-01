import { globalVars } from '../globals.css'
import { style } from '@vanilla-extract/css'
export const neoText = style({
    color: globalVars.color.gray,
    margin: 0,
    fontFamily: globalVars.font.display.family,
    textAlign: 'center',
})

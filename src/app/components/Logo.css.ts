import { globalVars } from '../../app/theme/globals.css'
import { style } from '@vanilla-extract/css'

export const logoDisplay = style({
    display: 'flex',
    alignItems: 'center',
})

export const logoFont = style({
    fontFamily: globalVars.font.logo.family,
    fontWeight: 600,
    fontSize: '3.6rem',
    marginLeft: '0.8rem',
})

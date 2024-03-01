import { globalVars } from '../globals.css'
import { style } from '@vanilla-extract/css'

export const neoTextField = style({
    // font
    fontSize: '2.2rem',
    fontWeight: 600,
    fontFamily: globalVars.font.ui.family,
    color: globalVars.color.gray,
    padding: '1.2rem 0.8rem',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // shadow
    boxShadow: '3px 4px 1px rgba(0, 0, 0, 0.25)',
    // rounded border
    border: `3px solid ${globalVars.color.gray}`,
    borderRadius: 8,
    '::placeholder': {
        color: globalVars.color.lightGray,
    },
    ':focus': {
        outline: 'none',
        translate: '3px 3px',
        boxShadow: 'none',
    },
})

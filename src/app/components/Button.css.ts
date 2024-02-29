import { style } from '@vanilla-extract/css'
import { globalVars } from '../globals.css'

export const neoButton = style({
    // font
    fontSize: '2.2rem',
    fontWeight: 600,
    backgroundColor: globalVars.color.pink,
    color: globalVars.color.white,
    cursor: 'pointer',
    padding: '1.2rem 0.8rem',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // shadow
    boxShadow: '3px 4px 1px rgba(0, 0, 0, 0.25)',
    // rounded border
    border: `3px solid ${globalVars.color.gray}`,
    borderRadius: 8,
    ':hover': {
        backgroundColor: globalVars.color.lightPink,
    },
    ':active': {
        translate: '3px 3px',
        boxShadow: 'none',
    },
})

import { style } from '@vanilla-extract/css'

export const neoButton = style({
    fontSize: '2.2rem',
    fontWeight: 600,
    backgroundColor: 'var(--primary-main-color)',
    color: 'var(--text-light-color)',
    cursor: 'pointer',
    padding: '1.2rem 0.8rem',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '3px 4px 1px rgba(0, 0, 0, 0.25)',
    border: '3px solid #2D313B',
    borderRadius: 8,
    ':hover': {
        backgroundColor: 'var(--primary-light-color)',
    },
    ':active': {
        translate: '3px 3px',
        boxShadow: 'none',
    },
})

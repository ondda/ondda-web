import { forwardRef } from 'react';
import { neoTextField } from './TextField.css';

export const TextField = forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <input
            className={neoTextField}
            type="email"
            placeholder="ingresar email"
            ref={ref}
        />
    );
});

TextField.displayName = 'TextField';

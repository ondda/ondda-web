import { disabledNeoButton, neoButton } from './Button.css';

type ButtonProps = {
    disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
    const { disabled = false } = props;

    return (
        <button
            className={disabled ? disabledNeoButton : neoButton}
            disabled={disabled}
        >
            unirme
        </button>
    );
};

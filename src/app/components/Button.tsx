import { disabledNeoButton, neoButton } from './Button.css';

type ButtonProps = {
    onClick: () => unknown;
    disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
    const { disabled = false, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={disabled ? disabledNeoButton : neoButton}
            disabled={disabled}
        >
            unirme
        </button>
    );
};

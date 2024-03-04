import { neoTextField } from './TextField.css';

export const TextField = () => {
    return (
        <input
            className={neoTextField}
            type="email"
            placeholder="ingresar email"
        ></input>
    );
};

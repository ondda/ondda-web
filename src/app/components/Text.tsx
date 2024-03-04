import { PropsWithChildren } from 'react';
import { neoText } from './Text.css';

export const Text = (props: PropsWithChildren<object>) => {
    return <p className={neoText}>{props.children}</p>;
};

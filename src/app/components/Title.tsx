import { PropsWithChildren } from 'react';
import { neoHeading } from './Heading.css';

export const Title = (props: PropsWithChildren<object>) => {
    return <h1 className={neoHeading}>{props.children}</h1>;
};

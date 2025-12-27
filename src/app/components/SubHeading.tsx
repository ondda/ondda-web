import { PropsWithChildren } from 'react';
import { neoHeading } from './Heading.css';

export const SubHeading = (props: PropsWithChildren<object>) => {
    return <h3 className={neoHeading}>{props.children}</h3>;
};

import { PropsWithChildren } from 'react'
import { neoHeading } from './Heading.css'

export const Heading = (props: PropsWithChildren<object>) => {
    return <h2 className={neoHeading}>{props.children}</h2>
}

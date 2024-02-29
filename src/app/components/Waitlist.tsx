import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'
import { TextField } from './TextField'
import { waitlistGrid } from './Waitlist.css'
import Image from 'next/image'

export const Waitlist = () => {
    return (
        <div className={waitlistGrid}>
            <Image
                src={'star.svg'}
                alt={'star drawing'}
                width={212}
                height={125}
            />
            <Heading />
            <Text />
            <TextField />
            <Button />
        </div>
    )
}

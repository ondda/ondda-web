import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'
import { TextField } from './TextField'
import utils from './css/utils.module.css'
import Image from 'next/image'

export const Waitlist = () => {
    return (
        <div
            className="grid gap-y-12 md:grid-cols-2
            [&_>_*]:col-span-1 md:[&_>_*]:col-start-2
            md:[&_>_img]:col-start-1 md:[&_>_img]:row-span-2 md:[&_>_img]:rotate-45"
        >
            <Image
                className={utils.marginAuto}
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

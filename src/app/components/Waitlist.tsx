import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'
import { TextField } from './TextField'
import styles from './Waitlist.module.css'

export const Waitlist = () => {
    return (
        <div className={styles.waitlist}>
            <Heading />
            <Text />
            <TextField />
            <Button />
        </div>
    )
}

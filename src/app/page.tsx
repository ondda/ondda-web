import styles from './page.module.css'
import { Waitlist } from './components/Waitlist'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Waitlist />
            </div>
        </main>
    )
}

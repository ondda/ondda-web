import { Waitlist } from './components/Waitlist'
import { center, main } from './page.css'

export default function Home() {
    return (
        <main className={main}>
            <div className={center}>
                <Waitlist />
            </div>
        </main>
    )
}

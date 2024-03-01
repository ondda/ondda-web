import { Logo } from './components/Logo'
import { Waitlist } from './components/Waitlist'
import { main } from './page.css'

export default function Home() {
    return (
        <main className={main}>
            <Logo />
            <Waitlist />
        </main>
    )
}

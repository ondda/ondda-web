import { logoDisplay, logoFont } from './Logo.css';
import Image from 'next/image';

export const Logo = () => (
    <div className={logoDisplay}>
        <Image src={'logo.svg'} alt={'ondda logo'} width={96} height={96} />
        <h1 className={logoFont}>ondda</h1>
    </div>
);

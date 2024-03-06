import { PropsWithChildren } from 'react';
import {
    flexDirectionRow,
    paddingTopSmall,
    roundedColorBox,
} from './Alert.css';
import { ColorTone } from '../../app/theme/types';
import Image from 'next/image';

type AlertProps = {
    tone: Extract<ColorTone, 'positive'>;
};

export const Alert = (props: PropsWithChildren<AlertProps>) => (
    <div className={[roundedColorBox, flexDirectionRow].join(' ')}>
        <Image src={'check.svg'} alt={'green check'} width={34} height={34} />
        <div className={paddingTopSmall}>{props.children}</div>
    </div>
);

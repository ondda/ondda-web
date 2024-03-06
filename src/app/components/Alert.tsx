import { PropsWithChildren } from 'react';
import {
    flexDirectionRow,
    paddingTopSmall,
    roundedBoxWithPadding,
    shadowAndBackgroundColor,
} from './Alert.css';
import { ColorTone } from '../../app/theme/types';
import Image from 'next/image';

type AlertProps = {
    tone: Extract<ColorTone, 'positive' | 'critical'>;
};

export const Alert = (props: PropsWithChildren<AlertProps>) => {
    const { children, tone } = props;
    return (
        <div
            className={[
                roundedBoxWithPadding,
                flexDirectionRow,
                shadowAndBackgroundColor[tone],
            ].join(' ')}
        >
            <Image
                src={tone === 'positive' ? 'check.svg' : 'attention.svg'}
                alt={tone === 'positive' ? 'green check' : 'exclamation mark'}
                width={34}
                height={34}
            />
            <div className={paddingTopSmall}>{children}</div>
        </div>
    );
};

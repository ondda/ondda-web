import { PropsWithChildren } from 'react';
import { colorTones, neoText, textAlignment, textWeight } from './Text.css';
import { ColorTone, TextAlignment, TextWeight } from '@app/theme/types';

type TextProps = {
    tone?: ColorTone;
    weight?: TextWeight;
    alignment?: TextAlignment;
};

export const Text = (props: PropsWithChildren<TextProps>) => {
    const {
        children,
        tone = 'neutral',
        weight = 'normal',
        alignment = 'center',
    } = props;

    return (
        <p
            className={[
                neoText,
                colorTones[tone],
                textWeight[weight],
                textAlignment[alignment],
            ].join(' ')}
        >
            {children}
        </p>
    );
};

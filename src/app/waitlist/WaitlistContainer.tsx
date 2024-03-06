'use client';

import { useState } from 'react';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { SignUpForm } from './SignUpForm';
import {
    onDesktopFirstColumn,
    onDesktopSecondColumn,
    onDesktopSpanTwoRows,
    gridOnDesktopTwoColumns,
    onDesktopRotate45Deg,
    alignSelfEnd,
} from './WaitlistContainer.css';
import Image from 'next/image';

export const Waitlist = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className={gridOnDesktopTwoColumns}>
            <div className={[onDesktopFirstColumn, alignSelfEnd].join(' ')}>
                <Heading>conexión fuera de línea</Heading>
            </div>
            <Image
                className={[onDesktopSecondColumn, onDesktopSpanTwoRows].join(
                    ' '
                )}
                src={'graph.svg'}
                alt={'network of circles connected by edges'}
                width={212}
                height={125}
            />
            <div className={onDesktopFirstColumn}>
                <Text>
                    Con <b>ondda</b> vas a poder comunicarte con gente a tu
                    alrededor sin necesidad de estar conectado a internet.
                </Text>
            </div>
            <Image
                className={[onDesktopFirstColumn, onDesktopRotate45Deg].join(
                    ' '
                )}
                src={'star.svg'}
                alt={'star drawing'}
                width={212}
                height={125}
            />
            <div className={[onDesktopSecondColumn].join(' ')}>
                <SignUpForm
                    loading={loading}
                    handleSignUp={(email) => {
                        setLoading(true);

                        const putRequest = new Request(
                            `/api/v0/waitlist-subscribers/${email}`,
                            { method: 'PUT' }
                        );
                        fetch(putRequest)
                            .catch()
                            .then()
                            .finally(() => setLoading(false));
                    }}
                />
            </div>
        </div>
    );
};

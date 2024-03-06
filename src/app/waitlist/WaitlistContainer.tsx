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
    onDesktopPaddintTopMedium,
} from './WaitlistContainer.css';
import Image from 'next/image';

export const Waitlist = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
                className={[
                    onDesktopFirstColumn,
                    onDesktopRotate45Deg,
                    onDesktopPaddintTopMedium,
                ].join(' ')}
                src={'star.svg'}
                alt={'star drawing'}
                width={212}
                height={125}
            />
            <div className={[onDesktopSecondColumn].join(' ')}>
                <SignUpForm
                    loading={loading}
                    errorMessage={errorMessage ?? undefined}
                    successMessage={successMessage ?? undefined}
                    handleSignUp={(email) => {
                        setLoading(true);

                        const putRequest = new Request(
                            `/api/v0/waitlist-subscribers/${email}`,
                            { method: 'PUT' }
                        );

                        fetch(putRequest)
                            .then((response) => {
                                if (
                                    response.status >= 200 &&
                                    response.status < 300
                                ) {
                                    setErrorMessage(null);
                                    setSuccessMessage('¡listo! te agendamos');
                                } else if (response.status === 400) {
                                    throw new Error('email inválido');
                                } else {
                                    throw new Error(
                                        'oops, algo falló ¿podrías intentar de nuevo?'
                                    );
                                }
                            })
                            .catch((error) => {
                                if (error instanceof Error) {
                                    setSuccessMessage(null);
                                    setErrorMessage(error.message);
                                }
                            })
                            .finally(() => setLoading(false));
                    }}
                />
            </div>
        </div>
    );
};

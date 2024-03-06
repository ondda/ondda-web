import { Button } from '../../app/components/Button';
import { Heading } from '../../app/components/Heading';
import { TextField } from '../../app/components/TextField';
import { Text } from '../../app/components/Text';
import { flexDirectionColumn } from './SignUpForm.css';
import { Alert } from '../../app/components/Alert';
import { useRef } from 'react';

type SignUpFormProps = {
    handleSignUp: (email: string) => unknown;
    errorMessage?: string;
    successMessage?: string;
    loading?: boolean;
};

export const SignUpForm = (props: SignUpFormProps) => {
    const {
        handleSignUp,
        loading = false,
        successMessage,
        errorMessage,
    } = props;

    const emailInputRef = useRef<null | HTMLInputElement>(null);

    return (
        <div className={flexDirectionColumn}>
            <Heading>lista de espera</Heading>
            <Text>
                Suscribite para más información y sé de las primeras personas en{' '}
                <b>ondda</b>.
            </Text>
            <TextField ref={emailInputRef} />
            <Button
                onClick={() => {
                    if (emailInputRef.current) {
                        handleSignUp(emailInputRef.current.value);
                    }
                }}
                disabled={loading}
            />

            {successMessage && (
                <Alert tone="positive">
                    <Text tone="positive" alignment="left">
                        {successMessage}
                    </Text>
                </Alert>
            )}

            {errorMessage && (
                <Alert tone="critical">
                    <Text tone="critical" alignment="left">
                        {errorMessage}
                    </Text>
                </Alert>
            )}
        </div>
    );
};

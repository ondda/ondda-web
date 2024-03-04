import { Pool } from 'pg';

const UNIQUE_VIOLATION = '23505';

const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_URL,
    max: 1,
});

export async function PUT(
    _request: Request,
    { params }: { params: { email: string } }
) {
    const { email } = params;

    if (!isValidEmail(email)) {
        return new Response('Invalid email', { status: 400 });
    }

    try {
        await pool.query(
            'INSERT INTO waitlist_subscriber (email) VALUES ($1)',
            [email.toLowerCase()]
        );
    } catch (error) {
        if (!isPgError(error) || error.code !== UNIQUE_VIOLATION) {
            console.log(error);
            return new Response(null, { status: 500 });
        }
    }

    return new Response(null, { status: 204 });
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Check if the email matches the regular expression
    return emailRegex.test(email.toLowerCase());
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPgError = (error: any): error is { code: string } => 'code' in error;

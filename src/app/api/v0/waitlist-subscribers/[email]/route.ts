import { Pool } from 'pg';

const pool = new Pool({
    connectionString:
        'postgresql://root@127.0.0.1:26257/defaultdb?sslmode=disable',
    max: 1,
});

export async function PUT(
    request: Request,
    { params }: { params: { email: string } }
) {
    const { email } = params;
    if (!isValidEmail(email)) {
        return new Response('Invalid email', { status: 400 });
    }

    try {
        await pool.query(
            'INSERT INTO waitlist_subscriber (email) VALUES ($1)',
            [email]
        );
    } catch (err) {
        console.log(err);
    }

    return new Response(null, { status: 204 });
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Check if the email matches the regular expression
    return emailRegex.test(email.toLowerCase());
};

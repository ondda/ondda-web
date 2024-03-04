export async function PUT(
    request: Request,
    { params }: { params: { email: string } }
) {
    if (!isValidEmail(params.email)) {
        return new Response('Invalid email', { status: 400 });
    }

    return new Response(null, { status: 204 });
}

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Check if the email matches the regular expression
    return emailRegex.test(email.toLowerCase());
};

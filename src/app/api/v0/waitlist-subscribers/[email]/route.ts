export async function PUT(
    request: Request,
    { params }: { params: { email: string } }
) {
    console.log(request);
    console.log(params);

    return new Response(null, { status: 204 });
}

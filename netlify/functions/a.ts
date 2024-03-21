import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {

    // call function B
    const response = await fetch(Netlify.env.get("URL") + '/.netlify/functions/b')

    // return response from function B
    return new Response(response.body, {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });

}
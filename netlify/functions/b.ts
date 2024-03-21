import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {

  const response = JSON.stringify({
    message: "Hello from function B!"
  })

  return new Response(response, {
    status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
  });
}
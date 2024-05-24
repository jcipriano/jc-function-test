import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {

  const response = JSON.stringify({
    message: "Hello from function B!"
  })

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(30000);

  return new Response(response, {
    status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
  });
}
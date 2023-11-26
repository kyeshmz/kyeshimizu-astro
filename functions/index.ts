async function handleRequest(request: Request): Promise<Response> {
  let response: Response = await fetch(request)

  response = new Response(response.body, response)

  response.headers.set(
    'Content-Security-Policy',
    "script-src 'self' ajax.cloudflare.com; script-src static.cloudflareinsights.com; connect-src cloudflareinsights.com; worker-src 'self' blob:; child-src 'self' blob:;",
  )

  return response
}

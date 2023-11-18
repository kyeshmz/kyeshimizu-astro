export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)

  return fetch(`https://cf-cloudinary-image.kyeshimizu.workers.dev${url.pathname}`, {
    headers: context.request.headers,
    body: context.request.body,
    method: context.request.method,
  })
}

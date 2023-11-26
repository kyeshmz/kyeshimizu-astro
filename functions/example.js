/**
 * GET /api/example
 */
 export const onRequestGet = async function onRequestGet(context) {
   return new Response("Hello", {
     status: 200,
     headers: {
       'Content-Type': 'application/json;charset=utf-8',
     },
   });
}
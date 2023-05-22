/**
 * @see {@link https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties}
 */
interface Env {}

export const onRequest: PagesFunction<Env> = async (context) => {
  return new Response(JSON.stringify(context.request.cf, null, 2), {
    headers: { 'content-type': 'application/json' },
  });
};
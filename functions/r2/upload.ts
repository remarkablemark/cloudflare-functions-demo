import { Env, KEY } from './shared';

/**
 * @see {@link https://walshy.dev/blog/21_09_10-handling-file-uploads-with-cloudflare-workers}
 * @see {@link https://developers.cloudflare.com/r2/api/workers/workers-multipart-usage/}
 */
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const formData = await context.request.formData();
  const file = formData.get(KEY) as unknown as File;
  const fileData = await file.arrayBuffer();
  const obj = await context.env.R2_BUCKET.put(KEY, fileData);
  obj.writeHttpMetadata(context.request.headers);

  const url = new URL(context.request.url);
  const status = 303;
  return Response.redirect(`${url.origin}/r2`, status);
};

import { Env, KEY } from './shared';

const getHtml = `
<form method="post" enctype="multipart/form-data" action="r2/upload">
  <input type="file" name="${KEY}">
  <br><br>
  <input type="Submit" value="Upload">
<form>
<br><br>
<a href="r2/file" download>
  <img src="r2/file">
</a>
`;

/**
 * @see {@link https://developers.cloudflare.com/pages/platform/functions/bindings/#r2-buckets}
 */
export const onRequestGet: PagesFunction<Env> = async (context) => {
  const obj = await context.env.R2_BUCKET.get(KEY);
  const fileData = await obj.arrayBuffer();
  return new Response(getHtml, {
    headers: { 'content-type': 'text/html' },
  });
};

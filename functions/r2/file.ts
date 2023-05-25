import { Env, KEY } from './shared';

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const obj = await context.env.R2_BUCKET.get(KEY);
  const fileData = await obj.arrayBuffer();
  return new Response(fileData);
};

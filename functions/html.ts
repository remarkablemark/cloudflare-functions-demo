interface Env {}

const html = `
<h1>HTML</h1>
<a href="/">Home</a>
`;

export const onRequest: PagesFunction<Env> = async (context) => {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
};

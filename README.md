# cloudflare-functions-demo

[Cloudflare Functions Demo](https://cloudflare-functions-demo-dqb.pages.dev). See [Cloudflare documentation](https://developers.cloudflare.com/pages/platform/functions/)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/cloudflare-functions-demo.git
cd cloudflare-functions-demo
```

Install the dependencies:

```sh
npm install
```

## Run

Start a local server for developing your Pages:

```sh
npm start
```

Fix error `Address already in use; 0.0.0.0:8788`:

```sh
kill $(lsof -ti :8788)
```

## Functions

<!-- prettier-ignore-start -->
| File | Endpoint |
| --- | --- |
| [dynamic/[name].ts](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/dynamic/[name].ts) | [/dynamic/world](https://cloudflare-functions-demo-dqb.pages.dev/dynamic/world) |
| [cf](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/cf.ts) | [/cf](https://cloudflare-functions-demo-dqb.pages.dev/cf) |
| [cors-proxy](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/cors-proxy.ts) | [/cors-proxy](https://cloudflare-functions-demo-dqb.pages.dev/cors-proxy?url=http://example.com) |
| [cors](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/cors.ts) | [/cors](https://cloudflare-functions-demo-dqb.pages.dev/cors) |
| [fetch](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/fetch.ts) | [/fetch](https://cloudflare-functions-demo-dqb.pages.dev/fetch) |
| [form](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/form.ts) | [/form](https://cloudflare-functions-demo-dqb.pages.dev/form) |
| [helloworld](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/helloworld.js) | [/helloworld](https://cloudflare-functions-demo-dqb.pages.dev/helloworld) |
| [html](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/html.ts) | [/html](https://cloudflare-functions-demo-dqb.pages.dev/html) |
| [ip](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/ip.ts) | [/ip](https://cloudflare-functions-demo-dqb.pages.dev/ip) |
| [json](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/json.ts) | [/json](https://cloudflare-functions-demo-dqb.pages.dev/json) |
| [onRequests](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/onRequests.ts) | [/onRequests](https://cloudflare-functions-demo-dqb.pages.dev/onRequests) |
| [post](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/post.ts) | [/post](https://cloudflare-functions-demo-dqb.pages.dev/post) |
| [querystring](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/querystring.ts) | [/querystring](https://cloudflare-functions-demo-dqb.pages.dev/querystring?key=value) |
| [typescript](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/typescript.ts) | [/typescript](https://cloudflare-functions-demo-dqb.pages.dev/typescript) |
<!-- prettier-ignore-end -->

## License

[MIT](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/LICENSE)

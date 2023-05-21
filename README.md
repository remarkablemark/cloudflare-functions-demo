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
| [helloworld](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/helloworld.js) | [/helloworld](https://cloudflare-functions-demo-dqb.pages.dev/helloworld) |
| [html](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/html.ts) | [/html](https://cloudflare-functions-demo-dqb.pages.dev/html) |
| [json](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/json.ts) | [/json](https://cloudflare-functions-demo-dqb.pages.dev/json) |
| [querystring](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/querystring.ts) | [/querystring](https://cloudflare-functions-demo-dqb.pages.dev/querystring?key=value) |
| [typescript](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/functions/typescript.ts) | [/typescript](https://cloudflare-functions-demo-dqb.pages.dev/typescript) |
<!-- prettier-ignore-end -->

## License

[MIT](https://github.com/remarkablemark/cloudflare-functions-demo/blob/master/LICENSE)

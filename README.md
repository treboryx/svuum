# svuum

[![NPM version](https://img.shields.io/npm/v/svuum?color=a1b858&label=)](https://www.npmjs.com/package/svuum)

# Usage

```bash
npm i svuum
# or
yarn add svuum
# or
pnpm install svuum
```

## parcel

Get Svuum latest parcel update / Track your Svuum parcel

```js
import { parcel } from "svuum";

await parcel("XXXXXXX").then(console.log); // Returns reference number, order number, status, timestamp (unix) and remarks in an object
```

## License

[MIT](./LICENSE) License © 2022 [Robert](https://github.com/treboryx)

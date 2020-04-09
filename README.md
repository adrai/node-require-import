# cjs used like this

```javascript
const { hello } = require('node-require-import')
```

**to test cjs**

```sh
cd test/cjs
npm i
#npm link ../../
node index
```

cjs is generated with `npm run cjs` and could be ignored in .gitignore


# esm used like this

```javascript
import { hello } from 'node-require-import'
```

**to test esm**

```sh
cd test/esm
npm i
#npm link ../../
node --experimental-modules index
```

- Node.js 12+ supports ESM natively behind the flag --experimental-modules
- Node.js 13.2.0+ supports native ESM without that flag.
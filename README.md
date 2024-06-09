# disable-output-plugin
Disables saving output files in Webpack v5.x+.

## install

```sh
npm i -D disable-output-plugin
```

## use

### preventing output for only module file

```javascript
import * as DisableOutputPlugin from 'disable-output-plugin';

module.exports = {
  plugins: [
    // 'index.js' is the output filename
    new DisableOutputPlugin({ test: /^index\.js$/i })
  ]
}
```

### preventing output for some files

```javascript
module.exports = {
  plugins: [
    new DisableOutputPlugin({ test: /\.js$/i })
  ]
}
```
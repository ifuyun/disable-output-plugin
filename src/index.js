class DisableOutputPlugin {
  constructor(options = {}) {
    this.options = {
      test: /\.js$/i,
      ...options
    };
    if (this.options.test instanceof RegExp) {
      this.options.test = [this.options.test];
    }
  }

  apply(compiler) {
    const pluginName = DisableOutputPlugin.name;

    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
        },
        (assets) => {
          Object.keys(assets).forEach((filename) => {
            const output = this.options.test.some((regex) => regex.test(filename));

            if (output) {
              delete assets[filename];
            }
          });
        }
      );
    });
  }
}

module.exports = DisableOutputPlugin;

/** @typedef {import('schema-utils/declarations/validate').Schema} Schema */
/** @typedef {import('webpack').Compiler} Compiler */
/** @typedef {import('webpack').WebpackPluginInstance} WebpackPluginInstance */
/** @typedef {import('webpack').Compilation} Compilation */
/** @typedef {import('webpack').sources.Source} Source */
/** @typedef {import('webpack').Asset} Asset */
/** @typedef {import('webpack').WebpackError} WebpackError */

/**
 * @template T
 * @typedef {T | { valueOf(): T }} WithImplicitCoercion
 */

/** @typedef {RegExp | string} Rule */
/** @typedef {Rule[] | Rule} Rules */

/**
 * @typedef {{ [key: string]: any }} CustomOptions
 */

/**
 * @typedef {boolean | 'keep-source-map' | ((name: string) => boolean)} DeleteOriginalAssets
 */

/**
 * @template T
 * @typedef {Object} BasePluginOptions
 * @property {Rules} [test]
 */

/**
 * @typedef {import('zlib').ZlibOptions} ZlibOptions
 */

/**
 * @template T
 * @typedef {BasePluginOptions<T>} InternalPluginOptions
 */

/**
 * @template [T=ZlibOptions]
 * @implements WebpackPluginInstance
 */
class DisableOutputPlugin {
  /**
   * @param {BasePluginOptions<T>} [options]
   */
  constructor(options) {
    const {
      test = /\.js$/i
    } = options || {};
    this.options = {
      test
    };
    if (!Array.isArray(this.options.test)) {
      this.options.test = [this.options.test];
    }
  }

  /**
   * @param {Compiler} compiler
   * @returns {void}
   */
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
            if (Array.isArray(this.options.test)) {
              const output = this.options.test.some((regex) => {
                return regex instanceof RegExp ? regex.test(filename) : filename === regex;
              });

              if (output) {
                delete assets[filename];
              }
            }
          });
        }
      );
    });
  }
}

module.exports = DisableOutputPlugin;

/// <reference types="node" />
export = DisableOutputPlugin;
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
declare class DisableOutputPlugin<T = import("zlib").ZlibOptions> implements WebpackPluginInstance {
    /**
     * @param {BasePluginOptions<T>} [options]
     */
    constructor(options?: BasePluginOptions<T> | undefined);
    options: {
        test: Rules;
    };
    /**
     * @param {Compiler} compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace DisableOutputPlugin {
    export { Schema, Compiler, WebpackPluginInstance, Compilation, Source, Asset, WebpackError, WithImplicitCoercion, Rule, Rules, CustomOptions, DeleteOriginalAssets, BasePluginOptions, ZlibOptions, InternalPluginOptions };
}
type WebpackPluginInstance = import('webpack').WebpackPluginInstance;
type Schema = import('schema-utils/declarations/validate').Schema;
type Compiler = import('webpack').Compiler;
type Compilation = import('webpack').Compilation;
type Source = import('webpack').sources.Source;
type Asset = import('webpack').Asset;
type WebpackError = import('webpack').WebpackError;
type WithImplicitCoercion<T> = T | {
    valueOf(): T;
};
type Rule = RegExp | string;
type Rules = Rule[] | Rule;
type CustomOptions = {
    [key: string]: any;
};
type DeleteOriginalAssets = boolean | 'keep-source-map' | ((name: string) => boolean);
type BasePluginOptions<T> = {
    test?: Rules | undefined;
};
type ZlibOptions = import('zlib').ZlibOptions;
type InternalPluginOptions<T> = BasePluginOptions<T>;

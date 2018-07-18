// Type definitions for micromarkdown 0.3.4a
// Project: micromarkdown
// Definitions by: 应开翔 <rubykaikai@gmail.com>

export as namespace micromarkdown;

interface IRegexobject {
  [propName: string]: RegExp;
}

export let useajax: boolean;
export const regexobject: IRegexobject;
export let codeblocks: object;

export function parse(str: string, strict?: boolean): string;
export function ajax(str: string): void;
export function crc32(string: string): number;
export function countingChars(str: string, split: string): number;
export function htmlEncode(str: string): string;
export function mmdCSSclass(str: string, strict?: boolean): string;

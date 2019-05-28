import { smallify } from './smallify';
import { parseIntUnary } from './parseIntUnary';

/**
 * Parses result of {@link Maths#smallify} as an integer.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const smallifyFromInt = pipe(parseIntUnary, smallify);
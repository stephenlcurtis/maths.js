import bigify from './bigify';
import parseIntUnary from './parseIntUnary';

/**
 * Parses result of {@link Maths#bigify} as an integer.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const bigifyToInt = pipe(bigify, parseIntUnary);
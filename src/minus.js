import curry from './curry';
import smallifyFromInt from './smallifyFromInt';
import bigifyToInt from './bigifyToInt';

/**
 * Returns difference between given arguments to a specified accuracy.
 * @param {number} [decimals]
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const minus = curry((decimals, a, b) => smallifyFromInt(bigifyToInt(a) - bigifyToInt(b), decimals));
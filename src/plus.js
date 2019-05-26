import curry from './curry';
import smallifyFromInt from './smallifyFromInt';
import bigifyToInt from './bigifyToInt';

/**
 * Returns sum of given arguments to a specified accuracy.
 * @param {number} [decimals]
 * @param {number} a
 * @param {number} b
 */
export const plus = curry((decimals, a, b) => smallifyFromInt(bigifyToInt(a, decimals) + bigifyToInt(b, decimals), decimals));
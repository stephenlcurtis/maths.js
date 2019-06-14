import { curry } from './curry';
import { smallifyFromInt } from './smallifyFromInt';
import { bigifyToInt } from './bigifyToInt';
import { precise } from './precise';

/**
 * Returns product of given arguments to a specified accuracy.
 * @param {number} [decimals]
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const times = curry((decimals, a, b) => smallifyFromInt(bigifyToInt(a, decimals) * precise(b, decimals), decimals));
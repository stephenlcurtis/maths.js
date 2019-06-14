import { curry } from './curry';
import { minus } from './minus';

/**
 * Get the additive inverse of given subtrahend.
 * @param {number} value - subtrahend
 * @param {number} [minuend=1] - minuend defaults to 1
 * @param {number} [decimals]
 * @returns {number}
 */
export const inv = curry((value, minuend = 1, decimals) => minus(decimals, minuend, value));
import curry from './curry';
import times from './times';

/**
 * Get the negative of a given value.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const neg = curry((value, decimals) => times(decimals, value, -1));
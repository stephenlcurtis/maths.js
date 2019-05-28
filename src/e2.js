import { curry } from './curry';
import { exp } from './exp';

/**
 * Get the square of a given value.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const e2 = curry((value, decimals) => exp(decimals, value, 2));
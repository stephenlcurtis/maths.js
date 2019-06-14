import { curry } from './curry';
import { exp } from './exp';

/**
 * Get the cube of a given value.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const e3 = curry((value, decimals) => exp(decimals, value, 3));
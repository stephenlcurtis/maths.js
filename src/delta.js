import { curry } from './curry';
import { minus } from './minus';

/**
 * Get the change (delta) between two values.
 * @param {number} a
 * @param {number} b
 * @param {number} [decimals]
 * @returns {number}
 */
export const delta = curry((a, b, decimals) => minus(decimals, b, a));
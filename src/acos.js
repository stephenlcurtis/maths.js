import { curry } from './curry';
import { precise } from './precise';

/**
 * Maintain decimal accuracy while performing arc cosine (inverse cosine) operation.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const acos = curry((value, decimals) => precise(Math.acos(precise(value, decimals)), decimals));
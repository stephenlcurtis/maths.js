import { curry } from './curry';
import { precise } from './precise';

/**
 * Maintain decimal accuracy while performing cosine operation.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const cos = curry((value, decimals) => precise(Math.cos(precise(value, decimals)), decimals));
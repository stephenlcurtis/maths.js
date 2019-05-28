import { curry } from './curry';
import { precise } from './precise';

/**
 * Maintain decimal accuracy while performing arc tangent (inverse tangent)
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const atan = curry((value, decimals) => precise(Math.atan(precise(value, decimals)), decimals));
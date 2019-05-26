import curry from './curry';
import precise from './precise';

/**
 * Maintain decimal accuracy while performing arc cosine (inverse cosine) operation.
 * @param {number} y
 * @param {number} x
 * @param {number} [decimals]
 * @returns {number}
 */
export const atan2 = curry((y, x, decimals) => precise(Math.atan2(precise(y, decimals), precise(x, decimals)), decimals));
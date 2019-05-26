import curry from "./curry";
import precise from "./precise";

/**
 * Maintain decimal accuracy while performing arc sine operation.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const asin = curry((value, decimals) => precise(Math.asin(precise(value, decimals)), decimals));
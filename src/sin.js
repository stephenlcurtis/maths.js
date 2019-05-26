import curry from "./curry";
import precise from "./precise";

/**
 * Maintain decimal accuracy while performing sine operation.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const sin = curry((value, decimals) => precise(Math.sin(precise(value, decimals)), decimals));
import curry from "./curry";
import precise from "./precise";

/**
 * Maintain decimal accuracy while performing tangent operation.
 * @param {number} value
 * @param {number} [decimals]
 * @returns {number}
 */
export const tan = curry((value, decimals) => precise(Math.tan(precise(value, decimals)), decimals));
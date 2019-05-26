import curry from "./curry";
import precise from "./precise";

/**
 * Returns power of given arguments to a specified accuracy.
 * @param {number} [decimals]
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const exp = curry((decimals, a, b) => precise(a ** precise(b, decimals), decimals));
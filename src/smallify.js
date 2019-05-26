import DECIMALS from "./defaultDecimals";

/**
 * Move the decimal point to the left based on a given number of decimal places.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const smallify = (value, decimals = DECIMALS) => value / Math.pow(10, decimals);
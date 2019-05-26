import DECIMALS from './defaultDecimals';

/**
 * Move the decimal point to the right based on given number of decimal places.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const bigify = (value, decimals = DECIMALS) => value * Math.pow(10, decimals);
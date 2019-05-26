import decimalify from './decimalify';
import times from './times';

/**
 * Maintain decimal accuracy while performing multiplication operation, correcting for floating point arithmetic errors.
 * One argument returns arg*1
 * Two or more arguments returns arg1*arg2*...^arg(n)
 * @param {Maths#Decimals} [decimals]
 * @param {...number} values
 * @returns {number}
 */
export const multiply = decimalify((decimals, ...values) => values.reduce((acc, cur) => times(decimals, acc, cur), 1));
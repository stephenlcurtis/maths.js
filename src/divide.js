import { decimalify } from './decimalify';
import { over } from './over';

/**
 * Maintain decimal accuracy while performing division operation, correcting for floating point arithmetic errors.
 * One argument returns arg/1
 * Two or more arguments returns arg1/arg2/...^arg(n)
 * @param {Maths#Decimals} [decimals]
 * @param {...number} values
 * @returns {number}
 */
export const divide = decimalify((decimals, ...values) => values.reduce((acc, cur, i) => i === 0 ? cur : over(decimals, acc, cur), 0));
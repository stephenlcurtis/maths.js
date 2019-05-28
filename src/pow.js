import { decimalify } from './decimalify';
import { exp } from './exp';

/**
 * Maintain decimal accuracy while performing power operation.
 * One argument returns arg^1 power
 * Two or more arguments returns arg1^arg2...^arg(n) power
 * @param {Maths#Decimals} [decimals]
 * @param {...number} values
 * @returns {number}
 */
export const pow = decimalify((decimals, ...values) => values.reverse().reduce((acc, cur) => exp(decimals, cur, acc), 1));
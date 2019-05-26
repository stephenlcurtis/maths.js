import decimalify from "./decimalify";
import plus from "./plus";

/**
 * Maintain decimal accuracy while performing addition operation, correcting for floating point arithmetic errors.
 * One argument returns arg+0
 * Two or more arguments returns arg1+arg2+...^arg(n)
 * @param {Maths#Decimals} [decimals]
 * @param {...number} values
 * @returns {number}
 */
export const add = decimalify((decimals, ...values) => values.reduce((acc, cur) => plus(decimals, acc, cur), 0));
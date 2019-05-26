import decimalify from "./decimalify";
import minus from "./minus";

/**
 * Maintain decimal accuracy while performing subtraction operation, correcting for floating point arithmetic errors.
 * One argument returns arg-0
 * Two or more arguments returns arg1-arg2-...^arg(n)
 * @param {Maths#Decimals} [decimals]
 * @param {...number} values
 * @returns {number}
 */
export const subtract = decimalify((decimals, ...values) => values.reduce((acc, cur, i) => i === 0 ? cur : minus(decimals, acc, cur), 0));
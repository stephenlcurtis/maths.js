import bigifyToInt from "./bigifyToInt";
import smallifyFromInt from "./smallifyFromInt";

/**
 * Returns given value to specified decimal accuracy.
 * @param {number} value
 * @param {number} [decimals]
 * @return {number}
 */
export const precise = pipe(bigifyToInt, smallifyFromInt);
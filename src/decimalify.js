import Decimals from "./decimals";

/**
 * Finds {@link Maths#Decimals} in arguments and prepends to front of arguments list.
 * @param {function} fn
 * @return {function(number, ...number)}
 */
export const decimalify = fn => {
    return (...values) => {
        const symbol = values.find(value => typeof value === 'symbol');
        const decimals = Object.keys(Decimals).find(key => Decimals[key] === symbol);
        values = values.filter(value => typeof value !== 'symbol');
        return Reflect.apply(fn, null, [decimals, ...values]);
    };
};
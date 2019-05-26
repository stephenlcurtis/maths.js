/**
 * Perfoms right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.
 * @param {...Function} fns
 */
export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
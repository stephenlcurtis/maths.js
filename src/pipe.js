import { compose } from './compose';
/**
 * Performs left-to-right function composition. The leftmost function may have any arity; the remaining functions must be unary.
 * @param {...Function} fns
 */
export const pipe = (...fns) => compose.apply(compose, fns.reverse());
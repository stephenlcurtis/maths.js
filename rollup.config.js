import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: 'maths.js',
        output: {
            name: 'kova',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ]
    },
    {
        input: 'maths.js',
        output: {
            file: pkg.main, 
            format: 'cjs' 
        },
        plugins: [
            terser()
        ]
    },
    {
        input: 'maths.js',
        output: {
            file: pkg.module, 
            format: 'es' 
        },
        plugins: [
            terser()
        ]
    }
];
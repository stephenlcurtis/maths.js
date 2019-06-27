# kova.js
Super light weight math library designed for writing complex but readable equations.

[![Version](https://img.shields.io/npm/v/kova.js.svg)](https://www.npmjs.com/package/kova.js)
[![License](https://img.shields.io/npm/l/kova.js.svg)](https://github.com/stephenthecurt/kova.js/blob/master/LICENSE)

```diff
+ floating point math error correction
+ control decimal precision 
+ no need for grouping operator 
+ unit tested against WolframAlpha 

- big number support 
- normalize mantissa 
- teach you math
```

## Installation

<pre>npm install kova.js</pre>

* **I use a module bundler and install packages from npm.**
    <pre>var kova = require('kova.js');</pre>

* **I use import to use modules.**
    * Import all functions.
        <pre>import * as kova from 'kova.js';</pre>
    * Import a single export.
        <pre>import { add } from 'kova.js';</pre>

* **I want to support all browsers.**
    <pre><script src='https://unpkg.com/kova.js@1.0.1/dist/kova.umd.js'></script></pre>
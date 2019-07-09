# kova.js
Super light weight math library designed for writing complex but readable equations.

[![Version](https://img.shields.io/npm/v/kova.js.svg)](https://www.npmjs.com/package/kova.js)
[![License](https://img.shields.io/npm/l/kova.js.svg)](https://github.com/stephenthecurt/kova.js/blob/master/LICENSE)

```diff
+ floating point math error correction
+ control decimal precision 
+ maintain accuracy while performing operations
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
        
## Usage  

```javascript
// floating point math error 

0.1 + 0.2; // => 0.30000000000000004

// kova.js 

add(Decimals[1], 0.1, 0.2); // => 0.3

// subtraction

.223904811112 - .33111343; // => -0.10720861888799998

// kova.js 

subtract(Decimals[8], .223904811112, .33111343); // => -0.10720862

// multiplication

.223904811112 * .33111343; // => 0.07413789000079643

// kova.js 

multiply(Decimals[5], .223904811112, .33111343); // => 0.07413

// division 

.223904811112 / .33111343; // => 0.6762178481011779

// kova.js 

divide(Decimals[4], .223904811112, .33111343); // => 0.6762

// exponentiation  

Math.pow(.223904811112, .33111343); // => 0.6092524320947788

// kova.js

pow(Decimals[3], .223904811112,  .33111343); // => 0.609
```
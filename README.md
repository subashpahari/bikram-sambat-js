# my-bikram-sambat-js

A lightweight utility library to convert dates between the Gregorian calendar (AD) and the Nepali Bikram Sambat calendar (BS), written in TypeScript.

## Installation

Using NPM:

```bash
npm install my-bikram-sambat-js
```

Using Yarn:

```bash
yarn add my-bikram-sambat-js
```

## Usage

### Server-side (CommonJS)

```javascript
const { ADToBS, BSToAD, BikramSambat } = require('my-bikram-sambat-js');

// AD to BS
console.log(ADToBS('2019-08-25')); // Output: "2076-05-08"

// BS to AD
console.log(BSToAD('2076-05-08')); // Output: "2019-08-25"

// Using the BikramSambat class
const bs = new BikramSambat('2019-08-25');
console.log(bs.toBS()); // Output: "2076-05-08"

const ad = new BikramSambat('2076-05-08', 'BS');
console.log(ad.toAD()); // Output: "2019-08-25"
```

### ES6 Modules

```javascript
import { ADToBS, BSToAD } from 'my-bikram-sambat-js';

console.log(ADToBS("2024-12-31")); // Output: "2081-09-15"
console.log(BSToAD("2081-09-15")); // Output: "2024-12-31"
```

Or using the class:

```javascript
import BikramSambat from 'my-bikram-sambat-js';

const bs = new BikramSambat("2024-12-31");
console.log(bs.toBS()); // Output: "2081-09-15"

const ad = new BikramSambat("2081-09-15", "BS");
console.log(ad.toAD()); // Output: "2024-12-31"
```

## API Reference

### `ADToBS(date)`

Converts a Gregorian date (AD) to Nepali date (BS).

**Parameters:**
- `date`: `string | Date` — format: `YYYY-MM-DD` or JS `Date`

**Returns:**
- `string` — BS date in format `YYYY-MM-DD`

### `BSToAD(date)`

Converts a Nepali BS date to Gregorian AD.

**Parameters:**
- `date`: `string` — format: `YYYY-MM-DD`

**Returns:**
- `string` — AD date in format `YYYY-MM-DD`

### `BikramSambat(date: string, type?: 'AD' | 'BS')`

Class for two-way conversion between AD and BS.

**Methods:**
- `toAD()` – Converts internal BS date to AD string
- `toBS()` – Converts internal AD date to BS string

## Inspiration

https://github.com/puncoz-official/bikram-sambat-js

## License (MIT)

MIT License

Copyright (c) 2020 Puncoz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
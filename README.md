# My Bikram Sambat JS

Utility library to convert dates from AD (Gregorian calendar) to Nepali Bikram Sambat (BS) calendar and vice versa.

---

> **Note:**  
> This project is a fork of the original [bikram-sambat-js](https://github.com/puncoz-official/bikram-sambat-js) library authored by Puncoz Nepal under the MIT license.  
> This fork is maintained and modified by Subash Pahari.

---

[![npm version](https://img.shields.io/npm/v/my-bikram-sambat-js?logo=npm)](https://www.npmjs.com/package/my-bikram-sambat-js)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## Features

- Convert Gregorian (AD) dates to Nepali Bikram Sambat (BS) dates
- Convert Nepali Bikram Sambat (BS) dates back to Gregorian (AD)
- Simple and easy-to-use API

---

## Installation

### Using NPM

```bash
npm install my-bikram-sambat-js
Using Yarn
bash
Copy
Edit
yarn add my-bikram-sambat-js
Usage
Importing the package
ES6 import
js
Copy
Edit
import BikramSambat, { ADToBS, BSToAD } from "my-bikram-sambat-js";
CommonJS require
js
Copy
Edit
const BS = require("my-bikram-sambat-js");
Examples
1. Convert Bikram Sambat (BS) to Gregorian (AD)
js
Copy
Edit
// Using direct function
const adDate = BSToAD("2076-05-08");
console.log(adDate); // Output: "2019-08-25"

// Using class
const bsInstance = new BikramSambat("2076-05-08", "BS");
console.log(bsInstance.toAD()); // Output: "2019-08-25"
2. Convert Gregorian (AD) to Bikram Sambat (BS)
js
Copy
Edit
// Using direct function
const bsDate = ADToBS("2019-08-25");
console.log(bsDate); // Output: "2076-05-08"

// Using class
const adInstance = new BikramSambat("2019-08-25");
console.log(adInstance.toBS()); // Output: "2076-05-08"
API Reference
Method	Description	Parameters	Returns
ADToBS(date)	Converts AD date string or Date object to BS	date: string | Date	string (BS date)
BSToAD(date)	Converts BS date string to AD	date: string	string (AD date)
BikramSambat	Class for date conversion	date: string, `type?: 'AD'	'BS'`
.toAD()	Converts internal BS date to AD string	—	string
.toBS()	Converts internal AD date to BS string	—	string

License
This project is licensed under the MIT License.

Original code copyright © Puncoz Nepal.
Fork and maintenance by Subash Pahari.

Repository and Issues
Repository: https://github.com/subashpahari/bikram-sambat-js

Issues: https://github.com/subashpahari/bikram-sambat-js/issues

Contact
For questions or support, you can reach out to:

Subash Pahari: subashpahari76@gmail.com

Original author: info@puncoz.com
# Randulate

Randulate is an npm package that simplifies the process of generating fake data for development, testing, and various other use cases. It allows you to create randomized data based on provided specifications and data types.

## Installation

You can install Randulate using npm or yarn:

```bash
npm install randulate
# or
yarn add randulate
```

## Random Name Generator

This module provides functions to generate random first names, last names, and full names. You can use it to create arrays or objects of names based on the specified gender and size.

## Functions

### `firstName(gender)`

Generates a random first name.

- `gender` (optional): The gender value. Use `1` for male and `0` for female.

Returns a string representing a random first name.

---

### `lastName()`

Generates a random last name.

Returns a string representing a random last name.

---

### `name(gender)`

Generates a random full name by combining a first name and a last name.

- `gender` (optional): The gender value. Use `1` for male and `0` for female.

Returns a string representing a random full name.

---

### `firstNameObjectOrArray(gender, isArray, size)`

Generates an array or object of first names based on the specified gender and size.

- `gender`: The gender for which first names should be generated. Use `1` for male and `0` for female.
- `isArray`: If `true`, the function returns an array of first names; if `false`, it returns an object.
- `size`: The number of first names to generate.

Returns an array of first names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

---

### `lastNameObjectOrArray(isArray, size)`

Generates an array or object of last names.

- `isArray`: If `true`, the function returns an array of last names; if `false`, it returns an object.
- `size`: The number of last names to generate.

Returns an array of last names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

---

### `nameObjectOrArray(gender, isArray, size)`

Generates an array or object of full names based on the specified gender and size.

- `gender`: The gender for which names should be generated. Use `1` for male and `0` for female.
- `isArray`: If `true`, the function returns an array of full names; if `false`, it returns an object.
- `size`: The number of full names to generate.

Returns an array of full names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

## Usage

Here's an example of how to use these functions:

```javascript
const Randulate = require('randulate');

const randomFirstName = Randulate.firstName(1); // Generate a random male first name
const randomLastName = Randulate.lastName();     // Generate a random last name
const randomFullName = Randulate.name(0);        // Generate a random female full name

const maleFirstNames = Randulate.firstNameObjectOrArray(1, true, 5); // Generate an array of 5 male first names
const femaleLastNames = Randulate.lastNameObjectOrArray(false, 3);  // Generate an object of 3 female last names
const randomNames = Randulate.nameObjectOrArray(1, true, 4);         // Generate an array of 4 random full names
```


## Feedback

I wholeheartedly welcome your feedback, suggestions, and bug reports. Your input is invaluable in improving and maintaining the quality of this code. If you come across any unusual behavior, discover a bug, or have ideas for enhancements, please don't hesitate to reach out. Feel free to open an issue on the repository, or simply drop a message. Enjoy generating random names with this module.
Cheers!

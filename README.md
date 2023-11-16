# Randulate

Randulate is an npm package that simplifies the process of generating fake data for development, testing, and various other use cases.
It allows you to create randomized data based on provided specifications and data types. Please note that this package is a work in progress, and I'm actively working to expand its functionality. Your ideas and suggestions are greatly appreciated, so feel free to share your thoughts and recommendations.

## Installation

You can install Randulate using npm or yarn:

```bash
npm install randulate
# or
yarn add randulate
```

# Table of Contents

- [Person](#person)
  - [age(minAge, maxAge)](#ageminage-maxage)
  - [firstName(gender)](#firstnamegender)
  - [lastName()](#lastname)
  - [name(gender)](#namegender)
  - [firstNameObjectOrArray(gender, isArray, size)](#firstnameobjectorarraygender-isarray-size)
  - [lastNameObjectOrArray(isArray, size)](#lastnameobjectorarrayisarray-size)
  - [nameObjectOrArray(gender, isArray, size)](#nameobjectorarraygender-isarray-size)
  - [emailFromNames(firstName, lastName, nameOrder)](#emailfromnamesfirstname-lastname-nameorder)
  - [randomEmail(gender)](#randomemailgender)
  - [emailByName(name)](#emailbynamename)
  - [gender(preferredGender)](#genderpreferredgender)
  - [job()](#job)
  - [usPhoneNumber()](#usphonenumber)
  - [ssn()](#ssn)
  - [usAddress()](#usaddress)
  - [person(excludeProperties)](#personexcludeproperties)
  - [language()](#language)
  - [maritalStatus()](#maritalstatus)
  - [universityAttended()](#universityattended)
  - [password(length, options)](#passwordlength-options)
- [Boolean](#boolean)
  - [randomBoolean()](#randomboolean)
  - [randomBooleanWithProbability(trueProbability)](#randombooleanwithprobabilitytrueprobability)
  - [randomBooleanArray(length)](#randombooleanarraylength)
  - [randomBooleanSequence(length, trueProbability)](#randombooleansequencelength-trueprobability)
  - [weightedRandomBoolean(trueWeight, falseWeight)](#weightedrandombooleantrueweight-falseweight)
  - [randomBooleanWithCondition(length)](#randombooleanwithconditionlength)
  - [generateRandomBooleanMatrix(rows, columns)](#generaterandombooleanmatrixrows-columns)
  - [binaryLogicOperation(value1, value2, operation)](#binarylogicoperationvalue1-value2-operation)
- [Datetime](#datetime)
  - [getRandomDate(startDate, endDate)](#getrandomdatestartdate-enddate)
  - [getRandomTime()](#getrandomtime)
  - [dateDifference(date1, date2)](#datedifferencedate1-date2)
  - [countdownTimer(futureDate)](#countdowntimerfuturedate)
- [Color](#color)
  - [getHexColor()](#gethexcolor)
  - [getColorName()](#getcolorname)
  - [interpolateColor(color1, color2, percentage)](#interpolatecolorcolor1-color2-percentage)
- [Feedback](#feedback)

---

# Person

### `age(minAge, maxAge)`
Generates a random integer representing an age within the specified range.

- `minAge` (optional): An optional minimum age in the range (inclusive). Defaults to 1 if not provided.
- `maxAge` (optional): An optional maximum age in the range (inclusive). Defaults to 120 if not provided.

Returns a number representing a random age within the specified range.

**Example:**
```javascript
const Randulate = require('randulate');
const randomAge = Randulate.age();
const age = Randulate.age(21, 44);
```

---

### `firstName(gender)`

Generates a random first name.

- `gender` (optional): The gender value. Use `1` for male and `0` for female.

Returns a string representing a random first name.

**Example:**
```javascript
const Randulate = require('randulate');
const femaleFirstName = Randulate.firstName(0);
const maleFirstName = Randulate.firstName(1);
```

---

### `lastName()`

Generates a random last name.

Returns a string representing a random last name.

**Example:**
```javascript
const Randulate = require('randulate');
const lastName = Randulate.lastName();
```

---

### `name(gender)`

Generates a random full name by combining a first name and a last name.

- `gender` (optional): The gender value. Use `1` for male and `0` for female.

Returns a string representing a random full name.

**Example:**
```javascript
const Randulate = require('randulate');
const femaleName = Randulate.name(0);
const maleName = Randulate.name(1);
```

---

### `firstNameObjectOrArray(gender, isArray, size)`

Generates an array or object of first names based on the specified gender and size.

- `gender`: The gender for which first names should be generated. Use `1` for male and `0` for female.
- `isArray`: If `true`, the function returns an array of first names; if `false`, it returns an object.
- `size`: The number of first names to generate.

Returns an array of first names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

**Example:**
```javascript
const Randulate = require('randulate');
const femaleFirstNames = Randulate.firstNameObjectOrArray(0, true, 10);
const maleFirstNames = Randulate.firstNameObjectOrArray(1, false, 5);
```

---

### `lastNameObjectOrArray(isArray, size)`

Generates an array or object of last names.

- `isArray`: If `true`, the function returns an array of last names; if `false`, it returns an object.
- `size`: The number of last names to generate.

Returns an array of last names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

**Example:**
```javascript
const Randulate = require('randulate');
const lastNamesObject = Randulate.lastNameObjectOrArray(false, 4);
const lastNamesArray = Randulate.lastNameObjectOrArray(true, 10);
```

---

### `nameObjectOrArray(gender, isArray, size)`

Generates an array or object of full names based on the specified gender and size.

- `gender`: The gender for which names should be generated. Use `1` for male and `0` for female.
- `isArray`: If `true`, the function returns an array of full names; if `false`, it returns an object.
- `size`: The number of full names to generate.

Returns an array of full names if `isArray` is `true`, or an object with key-value pairs if `isArray` is `false`.

**Example:**
```javascript
const Randulate = require('randulate');
const femaleRandomNamesArray = Randulate.nameObjectOrArray(0, true, 4);
const maleRandomNamesObject = Randulate.nameObjectOrArray(1, false, 4);
```

---

### `emailFromNames(firstName, lastName, nameOrder)`

Creates an email address from the given first and last names.

- `firstName` (string): The first name.
- `lastName` (string): The last name.
- `nameOrder` (optional, string): The order in which the first and last names should be used ('f' for firstName first or 'l' for lastName first).
- **Throws**: An error if either the first name or last name is missing, or if an invalid 'nameOrder' value is provided.

Returns a string representing an email address.

**Example:**
```javascript
const Randulate = require('randulate');
const email1 = Randulate.emailFromNames('Behnam', 'Amiri', 'l');
const email2 = Randulate.emailFromNames('Kelly', 'Smith', 'f');
const email3 = Randulate.emailFromNames('Julie', 'Gonzales');
```

---

### `randomEmail(gender)`

Generates a random email address based on optional gender-specific names.

- `gender` (optional, string): An optional parameter representing the gender. Use 1 for male and 0 for female.
- **Throws**: An error if an invalid gender value is provided.

Returns a string, the generated random email address.

**Example:**
```javascript
const Randulate = require('randulate');
const randomFemaleEmail = Randulate.randomEmail(0);
const randomMaleEmail = Randulate.randomEmail(1);
```

---

### `emailByName(name)`

Generates an email address based on a name and a list of domains.
- `name` (string): The name to create an email address from.

Returns a string, an email address in the format 'name@domain'.

**Example:**
```javascript
const Randulate = require('randulate');
const email = Randulate.emailByName('Behnam Amiri');
```

---

### `gender(preferredGender)`

 Generates a gender based on the specified preference or randomly if no preference is provided.


Returns a string, a randomly chosen gender, either 'Female' or 'Male'.

**Example:**
```javascript
const Randulate = require('randulate');
const randomGender = Randulate.gender();
const female = Randulate.gender(0);
const male = Randulate.gender(1);
```

---

### `job()`

Generates a random job title from a predefined list.

Returns a string, a randomly selected job title.

**Example:**
```javascript
const Randulate = require('randulate');
const job = Randulate.job();
```

---

### `usPhoneNumber()`

Generates a random U.S. phone number in the format '(XXX) XXX-XXXX'.

Returns a string, a random U.S. phone number in the specified format.

**Example:**
```javascript
const Randulate = require('randulate');
const phoneNumber = Randulate.usPhoneNumber();
```

---

### `ssn()`

Generates a random Social Security Number (SSN) in the format `AAA-GG-SSSS`.

Returns a string, a random SSN in the specified format.

**Example:**
```javascript
const Randulate = require('randulate');
const ssn = Randulate.ssn();
```

---

### `usAddress()`

Generates a random U.S. address in the format 'StreetNumber StreetName, City, State ZIP Code'.

Returns a string, a random U.S. address in the specified format.

**Example:**
```javascript
const Randulate = require('randulate');
const usAddress = Randulate.usAddress();
```

---

### `person(excludeProperties)`

Generates a random person object with various properties.
- `excludeProperties` (optional, array of strings): An optional array of property names to be excluded from the generated person object.
    - `id` (string): A version 4 UUID.
    - `phoneNumber` (string): A randomly generated US phone number.
    - `language` (string): A randomly generated language.
    - `gender` (string): A randomly chosen gender, either 'Female' or 'Male'.
    - `job` (string): A randomly generated job title.
    - `name` (string): A randomly generated name.
    - `maritalStatus` (string): A random marital status.
    - `ssn` (string): A random Social Security Number.
    - `universityAttended` (string): A randomly generated US university.
    - `email` (string): A randomly generated email based on the person's name.
    - `address` (string): A randomly generated US address.

Returns an object, a randomly generated person object with properties such as `id`, `phoneNumber`, `language`,  `gender`, `job`, `name`, `maritalStatus`,
`ssn`, `universityAttended`, `email`, and `address`. Excludes properties if specified in `excludeProperties`.

**Example:**
```javascript
const Randulate = require('randulate');
const person = Randulate.person(['email', 'address']);
```

---

### `language()`

Generates a random language.

Returns a string representing a randomly selected language.

**Example:**
```javascript
const Randulate = require('randulate');
const language = Randulate.language();
```

---

### `maritalStatus()`

Generates a random marital status.

Returns a string, a randomly selected marital status.

**Example:**
```javascript
const Randulate = require('randulate');
const maritalStatus = Randulate.maritalStatus();
```

---

### `universityAttended()`

Generates a random university.

Returns a string, a randomly selected US university.

**Example:**
```javascript
const Randulate = require('randulate');
const universityAttended = Randulate.universityAttended();
```

---

### `password(length, options)`

Generates a random password based on specified options. (Note the default values are length = 12 & options = {})
  - `length` (optional, default: 12) - The length of the generated password.
  - `options` (optional, default: {}) - Additional options for password generation.
    - `includeLowerCase` (optional, default: true) - Include lowercase letters in the password.
    - `includeUpperCase` (optional, default: true) - Include uppercase letters in the password.
    - `includeDigits` (optional, default: true) - Include digits in the password.
    - `includeSpecialChars` (optional, default: true) - Include special characters in the password.
    - `lengthRange` (optional, default: { min: length, max: length }) - Range of acceptable password lengths.

- **Throws:** An error if no character sets are selected for password generation.

Returns a string, the generated password based on the specified options.

This function generates a password by selecting characters from different character sets, including lowercase letters, uppercase letters, digits, and special characters. The options allow customization of the password length and the inclusion of specific character sets. It utilizes the `crypto` module to generate secure random bytes for enhanced password security.

**Example:**
```javascript
const Randulate = require('randulate');
const options = {
  includeLowerCase: true,
  includeUpperCase: false,
  includeDigits: true,
  includeSpecialChars: false,
  lengthRange: { min: 15, max: 18 }
};
const password = Randulate.password(16, options);
```

# Boolean

### `randomBoolean()`

Generates a random boolean value with a 50% chance of being true or false.

Returns a boolean, either `true` or `false`.

**Example:**
```javascript
const Randulate = require('randulate');
const randomBoolean = Randulate.randomBoolean();
```

---

### `randomBooleanWithProbability(trueProbability)`

Generates a random boolean value based on a specified probability of being true.
  - `trueProbability` (number) - The probability of the result being true, a decimal between 0 and 1.

Returns a boolean, either `true` or `false`.

**Example:**
```javascript
const Randulate = require('randulate');
const randomBooleanWithProbability = Randulate.randomBooleanWithProbability(0.2);
```

---

### `randomBooleanArray(length)`

Generates an array of random boolean values.

  - `length` (number) - The length of the boolean array to generate.

Returns an array of boolean values.

**Example:**
```javascript
const Randulate = require('randulate');
const randomBooleanArray = Randulate.randomBooleanArray(10);
```

---

### `randomBooleanSequence(length, trueProbability)`

Generates a sequence of random boolean values based on a specified probability of being true.

  - `length` (number) - The length of the boolean sequence to generate.
  - `trueProbability` (number) - The probability of each value being true, a decimal between 0 and 1.

Returns an array of boolean values representing the generated sequence.

**Example:**
```javascript
const Randulate = require('randulate');
const randomBooleanSequence = Randulate.randomBooleanSequence(5, 0.4);
```

---

### `weightedRandomBoolean(trueWeight, falseWeight)`

Generates a weighted random boolean value.

  - `trueWeight` (number) - The weight assigned to the `true` value.
  - `falseWeight` (number) - The weight assigned to the `false` value.

Returns a boolean, either `true` or `false`, based on the specified weights.

**Example:**
```javascript
const Randulate = require('randulate');
const weightedRandomBoolean = Randulate.weightedRandomBoolean(1, 3);
```

---

### `randomBooleanWithCondition(length)`

Generates an array of random boolean values with at least one true value.

  - `length` (number) - The length of the boolean array to generate (minimum length is 1).

Returns an array of boolean values.

**Example:**
```javascript
const Randulate = require('randulate');
const randomBooleanWithCondition = Randulate.randomBooleanWithCondition(5);
```

---

### `generateRandomBooleanMatrix(rows, columns)`

Generates a random boolean matrix with the specified number of rows and columns.

- `rows` (number) - The number of rows in the matrix.
- `columns` (number) - The number of columns in the matrix.

Returns a 2D array representing the random boolean matrix.

**Example:**
```javascript
const Randulate = require('randulate');
const randomMatrix = Randulate.generateRandomBooleanMatrix(3, 3);
const randomMatrix = Randulate.generateRandomBooleanMatrix(5, 5);
```

---

### `binaryLogicOperation(value1, value2, operation)`

Performs a binary logic operation on two boolean values based on the specified operation.

- `value1` (boolean) - The first boolean value.
- `value2` (boolean) - The second boolean value.
- `operation` (string) - The logic operation to be performed.
Possible values: `AND`, `OR`, `NOT`, `NAND`, `NOR`, `XOR`, `XNOR`.

**Example:**
```javascript
const Randulate = require('randulate');
const result1 = binaryLogicOperation(true, false, 'AND');
const result2 = binaryLogicOperation(true, false, 'OR');
const result3 = binaryLogicOperation(true, null, 'NOT');
```


# Datetime

### `getRandomDate(startDate, endDate)`

Generates a random date within a specified range.

- `startDate` (Date) - The start date of the range.
- `endDate` (Date) - The end date of the range.

Returns a randomly generated date within the specified range.

**Example:**
```javascript
const Randulate = require('randulate');

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');
const randomDate = Randulate.getRandomDate(startDate, endDate);
```

---

### `getRandomTime()`

Generates a random time in 24-hour format.

Returns a string representing a random time in the format `hh:mm:ss`.

**Example:**
```javascript
const Randulate = require('randulate');
const randomTime = Randulate.getRandomTime();
```

---


### `dateDifference(date1, date2)`

Calculates the difference between two dates and returns a human-readable string representation in terms of years, months, days, hours, minutes, and seconds.

- `date1` (`Date`): The first date.
- `date2` (`Date`): The second date.

Returns a string representing the time difference between the two dates.

**Example:**
```javascript
const Randulate = require('randulate');

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');
const dateDifference = Randulate.dateDifference(startDate, endDate);
```

---

### `countdownTimer(futureDate)`

Calculates and returns a human-readable countdown timer string representing the time remaining between the current date and a specified future date.

- `futureDate` (`Date`): The future date and time to count down to.

Returns a string representing the time remaining in days, hours, minutes, and seconds.
**Example:**
```javascript
const Randulate = require('randulate');

// Set a future date (e.g., December 31, 2024, 23:59:59)
const futureDate = new Date('2023-12-31T23:59:59');
const remainingTime = Randulate.countdownTimer(futureDate);
```

---

### `getAgeDetails(dateOfBirth)`

Calculates and returns various details about the age based on the provided date of birth.

- `dateOfBirth` (`string`): The date of birth in either 'YYYY-MM-DD' or 'MM-DD-YYYY' format.

- **Throws**: an `Error` if the provided date of birth is invalid or in an unsupported format.

Returns an object containing details about the age, including minutes, seconds, and milliseconds.

**Example:**
```javascript
const Randulate = require('randulate');

const customDateOfBirth1 = '1990-01-12';
const customDateOfBirth2 = '01-12-1990';
const ageDetails1 = Randulate.getAgeDetails(customDateOfBirth1); // Example with 'YYYY-MM-DD' format
const ageDetails2 = Randulate.getAgeDetails(customDateOfBirth2); // Example with 'MM-DD-YYYY' format
```

# Color

### `getHexColor()`

Generates a random hexadecimal color code.

Returns a randomly generated hexadecimal color code (e.g., '#RRGGBB').

**Example:**
```javascript
const Randulate = require('randulate');
const hexColorName = Randulate.getHexColor();
```

---

### `getColorName()`

Generates a random color name from a predefined list.

Returns a randomly selected color name from the list.

**Example:**
```javascript
const Randulate = require('randulate');
const colorName = getColorName();
```

---

### `interpolateColor(color1, color2, percentage)`

Interpolates between two hexadecimal colors based on a given percentage.

- `color1` (`string`): The first hexadecimal color code (e.g., '#RRGGBB').
- `color2` (`string`): The second hexadecimal color code (e.g., '#RRGGBB').
- `percentage` (`number`): The interpolation percentage, a value between 0 and 100 where 0 represents the first color,
100 represents the second color, and values in between represent a blend of the two colors.

Returns the interpolated hexadecimal color code.

**Example:**
```javascript
const Randulate = require('randulate');

const color1 = '#FF0000';
const color2 = '#00FF00';
const interpolatedColor = Randulate.interpolateColor(color1, color2, 50);
```


# Feedback

I wholeheartedly welcome your feedback, suggestions, and bug reports. If you come across any unusual behavior, discover a bug, or have ideas for enhancements, please don't hesitate to reach out. Feel free to open an issue on the repository, or simply drop a message.
Cheers! 🍻

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
  - [firstName(gender)](#firstnamegender)
  - [lastName()](#lastname)
  - [name(gender)](#namegender)
  - [firstNameObjectOrArray(gender, isArray, size)](#firstnameobjectorarraygender-isarray-size)
  - [lastNameObjectOrArray(isArray, size)](#lastnameobjectorarrayisarray-size)
  - [nameObjectOrArray(gender, isArray, size)](#nameobjectorarraygender-isarray-size)
  - [emailFromNames(firstName, lastName, nameOrder)](#emailfromnamesfirstname-lastname-nameorder)
  - [randomEmail(gender)](#randomemailgender)
  - [emailByName(name)](#emailbynamename)
  - [gender()](#gender)
  - [usPhoneNumber()](#usphonenumber)
  - [SSN()](#ssn)
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
- [Usage](#usage)
- [Feedback](#feedback)

---

# Person

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

---

### `emailFromNames(firstName, lastName, nameOrder)`

Creates an email address from the given first and last names.

- `firstName` (string): The first name.
- `lastName` (string): The last name.
- `nameOrder` (optional, string): The order in which the first and last names should be used ('f' for firstName first or 'l' for lastName first).
- **Throws**: An error if either the first name or last name is missing, or if an invalid 'nameOrder' value is provided.
Returns a string, the generated email address.

Returns a string representing an email address.

---

### `randomEmail(gender)`

Generates a random email address based on optional gender-specific names.

- `gender` (optional, string): An optional parameter representing the gender. Use 1 for male and 0 for female.
- **Throws**: An error if an invalid gender value is provided.

Returns a string, the generated random email address.

---

### `emailByName(name)`

Generates an email address based on a name and a list of domains.
- `name` (string): The name to create an email address from.

Returns a string, an email address in the format 'name@domain'.

---

### `gender()`

Generates a random gender as either 'Female' or 'Male.

Returns a string, a randomly chosen gender, either 'Female' or 'Male'.

---

### `usPhoneNumber()`

Generates a random U.S. phone number in the format '(XXX) XXX-XXXX'.

Returns a string, a random U.S. phone number in the specified format.

---

### `SSN()`

Generates a random Social Security Number (SSN) in the format 'XXX-XXX-XXX'.

Returns a string, a random SSN in the specified format.

---

### `usAddress()`

Generates a random U.S. address in the format 'StreetNumber StreetName, City, State ZIP Code'.

Returns a string, a random U.S. address in the specified format.

---

### `person(excludeProperties)`

Generates a random person object with various properties.
- `excludeProperties` (optional, array of strings): An optional array of property names to be excluded from the generated person object.
    - `id` (string): A version 4 UUID.
    - `phoneNumber` (string): A randomly generated US phone number.
    - `gender` (string): A randomly chosen gender, either 'Female' or 'Male'.
    - `name` (string): A randomly generated name.
    - `ssn` (string): A random Social Security Number.
    - `email` (string): A randomly generated email based on the person's name.
    - `address` (string): A randomly generated US address.

Returns an object, a randomly generated person object with properties such as 'id', 'phoneNumber', 'gender', 'name', 'ssn', 'email', and 'address'. Excludes properties if specified in `excludeProperties`.

---

### `language()`

Generates a random language.

Returns a string representing a randomly selected language.

---

### `maritalStatus()`

Generates a random marital status.

Returns a string, a randomly selected marital status.

---

### `universityAttended()`

Generates a random university.

Returns a string, a randomly selected US university.

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


# Boolean

### `randomBoolean()`

Generates a random boolean value with a 50% chance of being true or false.

Returns a boolean, either `true` or `false`.

---

### `randomBooleanWithProbability(trueProbability)`

Generates a random boolean value based on a specified probability of being true.
  - `trueProbability` (number) - The probability of the result being true, a decimal between 0 and 1.

Returns a boolean, either `true` or `false`.

---

### `randomBooleanArray(length)`

Generates an array of random boolean values.

  - `length` (number) - The length of the boolean array to generate.

Returns an array of boolean values.

---

### `randomBooleanSequence(length, trueProbability)`

Generates a sequence of random boolean values based on a specified probability of being true.

  - `length` (number) - The length of the boolean sequence to generate.
  - `trueProbability` (number) - The probability of each value being true, a decimal between 0 and 1.

Returns an array of boolean values representing the generated sequence.

---

### `weightedRandomBoolean(trueWeight, falseWeight)`

Generates a weighted random boolean value.

  - `trueWeight` (number) - The weight assigned to the `true` value.
  - `falseWeight` (number) - The weight assigned to the `false` value.

Returns a boolean, either `true` or `false`, based on the specified weights.

---

### `randomBooleanWithCondition(length)`

Generates an array of random boolean values with at least one true value.

  - `length` (number) - The length of the boolean array to generate (minimum length is 1).

Returns an array of boolean values.






## Usage

Here's an example of how to use these functions:

```javascript
const Randulate = require('randulate');

const firstName = Randulate.firstName(1);
const lastName = Randulate.lastName();
const name = Randulate.name(0);
const maleFirstNames = Randulate.firstNameObjectOrArray(1, true, 5);
const femaleLastNames = Randulate.lastNameObjectOrArray(false, 3);
const randomNames = Randulate.nameObjectOrArray(1, true, 4);
const person = Randulate.person(['email', 'address']);
const language = Randulate.language();
const maritalStatus = Randulate.maritalStatus();
const universityAttended = Randulate.universityAttended();

const options = {
  includeLowerCase: false,
  includeUpperCase: false,
  includeDigits: true,
  includeSpecialChars: false,
  lengthRange: { min: 15, max: 18 }
};
const password = Randulate.password(16, options);

const randomBoolean = Randulate.randomBoolean()
const randomBooleanWithProbability = Randulate.randomBooleanWithProbability(0.2);
const randomBooleanArray = Randulate.randomBooleanArray(10);
const randomBooleanSequence = Randulate.randomBooleanSequence(5, 0.4);
const randomBooleanWithCondition = Randulate.randomBooleanWithCondition(5);
const weightedRandomBoolean = Randulate.weightedRandomBoolean(1, 3);

```


## Feedback

I wholeheartedly welcome your feedback, suggestions, and bug reports. If you come across any unusual behavior, discover a bug, or have ideas for enhancements, please don't hesitate to reach out. Feel free to open an issue on the repository, or simply drop a message.
Cheers! 🍻

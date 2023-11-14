/**
 * Generates a random boolean value with a 50% chance of being true or false.
 *
 * @returns {boolean} A randomly generated boolean value.
 */
const randomBoolean = () => Math.random() < 0.5; // 50% chance of true, 50% chance of false


/**
 * Generates a random boolean value based on a specified probability of being true.
 *
 * @param {number} trueProbability - The probability of the result being true, a decimal between 0 and 1.
 * @returns {boolean} A randomly generated boolean value.
 */
const randomBooleanWithProbability = (trueProbability) => Math.random() < trueProbability;


/**
 * Generates an array of random boolean values.
 *
 * @param {number} length - The length of the boolean array to generate.
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanArray = (length) => {
  const booleanArray = [];
  for (let i = 0; i < length; i++) {
    booleanArray.push(randomBoolean());
  }

  return booleanArray;
}


/**
 * Generates a sequence of random boolean values based on a specified probability of being true.
 *
 * @param {number} length - The length of the boolean sequence to generate.
 * @param {number} trueProbability - The probability of each value being true, a decimal between 0 and 1.
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanSequence = (length, trueProbability) => {
  const booleanArray = [];
  for (let i = 0; i < length; i++) {
    if (Math.random() < trueProbability) {
      booleanArray.push(true);
    } else {
      booleanArray.push(false);
    }
  }

  return booleanArray;
}


/**
 * Generates an array of random boolean values with at least one true value.
 *
 * @param {number} length - The length of the boolean array to generate (minimum length is 1).
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanWithCondition = (length) => {
  const booleanArray = [true]; // Ensure at least one true
  for (let i = 1; i < length; i++) {
    booleanArray.push(randomBoolean());
  }

  return booleanArray;
}


/**
 * Generates a weighted random boolean value.
 *
 * @param {number} trueWeight - The weight assigned to the `true` value.
 * @param {number} falseWeight - The weight assigned to the `false` value.
 *
 * @returns {boolean} Returns a boolean, either `true` or `false`, based on the specified weights.
 *
 * @example
 * // Example 1: Equal Weights (50% chance of true, 50% chance of false)
 * const result1 = weightedRandomBoolean(1, 1);
 * console.log(result1); // Output will be either true or false randomly
 *
 * // Example 2: Higher Weight for True (75% chance of true, 25% chance of false)
 * const result2 = weightedRandomBoolean(3, 1);
 * console.log(result2); // Output will be true more often
 *
 * // Example 3: Higher Weight for False (25% chance of true, 75% chance of false)
 * const result3 = weightedRandomBoolean(1, 3);
 * console.log(result3); // Output will be false more often
 */
const weightedRandomBoolean = (trueWeight, falseWeight) => {
  const totalWeight = trueWeight + falseWeight;
  const randomValue = Math.random() * totalWeight;
  if (randomValue < trueWeight) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  randomBoolean,
  randomBooleanArray,
  randomBooleanSequence,
  randomBooleanWithCondition,
  randomBooleanWithProbability,
  weightedRandomBoolean
};

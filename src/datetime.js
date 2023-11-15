const {
  calculateAgeInMilliseconds,
  getTimeUnits
} = require('./helper');


/**
 * Generates a random date within a specified range.
 *
 * e.g:
 * const startDate = new Date('2023-01-01');
 * const endDate = new Date('2023-12-31');
 * const randomDate = getRandomDate(startDate, endDate);
 *
 * @param {Date} startDate - The start date of the range.
 * @param {Date} endDate - The end date of the range.
 * @returns {Date} A randomly generated date within the specified range.
 */
const getRandomDate = (startDate, endDate) => {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);

  return new Date(randomTimestamp);
}


/**
 * Generates a random time in 24-hour format.
 *
 * @returns {string} A string representing a random time in the format 'hh:mm:ss'.
 */
const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  return `${hours}:${minutes}:${seconds}`;
}


/**
 * Calculates the difference between two dates and returns a human-readable string representation in terms of years, months, days, hours, minutes, and seconds.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {string} A human-readable string representing the time difference between the two dates.
 */
const dateDifference = (date1, date2) => {
  let difference = Math.abs(date1 - date2);
  const units = getTimeUnits();

  return units.reduce((output, unit) => {
    const value = Math.floor(difference / unit.ms);
    difference -= value * unit.ms;

    return value > 0 ? output + value + ' ' + unit.label + (value > 1 ? 's ' : ' ') : output;
  },
  ''
  ).trim();
}


/**
 * Calculates and returns a human-readable countdown timer string representing the time remaining between the current date and a specified future date.
 *
 * @param {Date} futureDate - The future date and time to count down to.
 * @returns {string} A string representing the time remaining in days, hours, minutes, and seconds.
 *
 * @example
 * // Example usage:
 * // Set a future date (e.g., December 31, 2023, 23:59:59)
 * const futureDate = new Date('2023-12-31T23:59:59');
 * countdownTimer(futureDate);
 */
const countdownTimer = (futureDate) => {
  const currentDate = new Date();
  const differenceInMilliseconds = futureDate.getTime() - currentDate.getTime();
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const millisecondsInHour = 1000 * 60 * 60;
  const millisecondsInMinute = 1000 * 60;

  // Calculate the remaining time in days, hours, minutes, and seconds
  const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
  const hours = Math.floor((differenceInMilliseconds % (millisecondsInDay)) / millisecondsInHour);
  const minutes = Math.floor((differenceInMilliseconds % millisecondsInHour) / millisecondsInMinute);
  const seconds = Math.floor((differenceInMilliseconds % millisecondsInMinute) / 1000);

  return `Time Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}


/**
 * Calculates and returns various details about the age based on the provided date of birth.
 *
 * @param {string} dateOfBirth - The date of birth in either "YYYY-MM-DD" or "MM-DD-YYYY" format.
 *
 * @throws {Error} Throws an error if the provided date of birth is invalid or in an unsupported format.
 *
 * @returns {Object} An object containing details about the age, including minutes, seconds, and milliseconds.
 *
 * @example
 * // Pass a date of birth in either "YYYY-MM-DD" or "MM-DD-YYYY" format
 * const customDateOfBirth1 = "1990-01-12";
 * const customDateOfBirth2 = "01-12-1990";
 * getAgeDetails(customDateOfBirth1); // Example with "YYYY-MM-DD" format
 * getAgeDetails(customDateOfBirth2); // Example with "MM-DD-YYYY" format
 */
const getAgeDetails = (dateOfBirth) => {
  if (dateOfBirth) {
    const ageInMilliseconds = calculateAgeInMilliseconds(dateOfBirth);
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;

    return {
      minutes: ageInMinutes.toFixed(4),
      seconds: ageInSeconds.toFixed(4),
      milliseconds: ageInMilliseconds
    };
  } else {
    throw new Error('Invalid date of birth. Please try again.');
  }
}


module.exports = {
  countdownTimer,
  dateDifference,
  getAgeDetails,
  getRandomDate,
  getRandomTime
};

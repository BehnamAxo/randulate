const Randulate = require('randulate');


console.log('Randulate.firstName(1) ==> ', Randulate.firstName(1));
console.log('Randulate.lastName() ==> ', Randulate.lastName());
console.log('Randulate.name(0) ==> ', Randulate.name(0));
console.log('Randulate.firstNameObjectOrArray(1, true, 4) ==> ', Randulate.firstNameObjectOrArray(1, true, 4));
console.log('Randulate.lastNameObjectOrArray(false, 4) ==> ', Randulate.lastNameObjectOrArray(false, 4));
console.log('Randulate.nameObjectOrArray(0, true, 4) ==> ', Randulate.nameObjectOrArray(0, true, 4));
console.log(`Randulate.person(['email', 'address']) ==> `, Randulate.person(['email', 'address']));

const options = {
  includeLowerCase: false,
  includeUpperCase: false,
  includeDigits: true,
  includeSpecialChars: false,
  lengthRange: { min: 15, max: 18 }
};


const password = Randulate.password(16, options);
console.log('Password => ', password);

console.log('Randulate.language() => ', Randulate.language());
console.log('andulate.maritalStatus() => ', Randulate.maritalStatus());
console.log('Randulate.universityAttended() => ', Randulate.universityAttended());

console.log('Randulate.randomBoolean() => ', Randulate.randomBoolean());
console.log('Randulate.randomBooleanWithProbability(0.2) => ',  Randulate.randomBooleanWithProbability(0.2));
console.log('Randulate.randomBooleanArray(10) => ', Randulate.randomBooleanArray(10));
console.log('Randulate.randomBooleanSequence(5, 0.4) => ', Randulate.randomBooleanSequence(5, 0.4));
console.log('Randulate.randomBooleanWithCondition(5) => ', Randulate.randomBooleanWithCondition(5));
console.log('Randulate.weightedRandomBoolean(1, 3) => ', Randulate.weightedRandomBoolean(1, 3));
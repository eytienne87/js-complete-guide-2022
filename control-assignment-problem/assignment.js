
// Number one
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.round((Math.random()) * 100) / 100; // produces random number between 0 (including) and 1 (excluding)
  console.log(randomNumber);
  if (randomNumber > 0.7) {
    alert(`${randomNumber} is bigger than 0.7!`)
  };
};

console.log('');

// Number two
let numbers = [1, 3, 5, 7, 9];

for (const number of numbers) {
  console.log(`I am ${number}, looping through an array`);
};
console.log('');

for (let i = 0; i < numbers.length; i++) {
  console.log(`I am ${numbers[i]}, looping another way`);
};
console.log('');

// Number three
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`I am ${numbers[i]}, looping backwards`);
};

console.log('');

// Number four
let randNumberOne = Math.random();
let randNumberTwo = Math.random();

for (let i = 0; i < 5; i++) {
  const conditionOne = (randNumberOne > 0.7 && randNumberTwo > 0.7);
  const conditionTwo = (randNumberOne <= 0.2 || randNumberTwo <= 0.2);

  console.log(`I am randNumberOne (${randNumberOne}), and I am randNumberTwo (${randNumberTwo})`);

  if (conditionOne) {
    window.alert('Both numbers are bigger than 0.7!')
  }

  if (conditionTwo) {
    window.alert('One of the two numbers is smaller than 0.2!')
  }

  randNumberOne = Math.random();
  randNumberTwo = Math.random();
};

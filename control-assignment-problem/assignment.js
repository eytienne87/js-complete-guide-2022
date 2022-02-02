
// for (let i = 0; i < 10; i++) {
//   let randomNumber = Math.round((Math.random()) * 100) / 100; // produces random number between 0 (including) and 1 (excluding)
//   console.log(randomNumber);
//   if (randomNumber > 0.7) {
//     alert(`${randomNumber} is bigger than 0.7!`)
//   }
// }

let numbers = [1, 3, 5, 7, 9];

for (const number of numbers) {
  console.log(`I am ${number}, a member of the numbers array!`);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(`I am ${numbers[i]}, a member of the numbers array!`);
}

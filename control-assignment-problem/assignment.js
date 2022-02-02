
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.round((Math.random()) * 100) / 100; // produces random number between 0 (including) and 1 (excluding)
  console.log(randomNumber);
  if (randomNumber > 0.7) {
    alert(`${randomNumber} is bigger than 0.7!`)
  }
}

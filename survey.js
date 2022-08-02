const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name or nickname?\n', (name) => {
  rl.question("What's an activity that you enjoy?\n", (activity) => {
    rl.question('What do you listen to while doing that?\n', (listensTo) => {
      rl.question('Which meal is your favourite (dinner, lunch, brunch etc)?\n', (whichMeal) => {
        rl.question('What is your favourite thing to eat for that meal?\n', (whatMeal) => {
          rl.question('Which sport or game is your absolute favourite?\n', (sport) => {
            rl.question('What is your super power?\n', (power) => {
              
              console.log(`${name} loves listening to ${listensTo} while ${activity}, devouring ${whatMeal} for ${whichMeal}, prefers ${sport} over any other sport or game, and is amazing at ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

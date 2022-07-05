const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const objOfAnswers = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  superpower: ""
};

rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
  objOfAnswers.name = answer;
  rl.question("What's an activity you like doing?",(answer) =>{
    objOfAnswers.activity = answer;
    rl.question("What do you listen to while doing that?",(answer)=>{
      objOfAnswers.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.",(answer)=>{
        objOfAnswers.meal = answer;
        rl.question("What's your favourite food?",(answer)=>{
          objOfAnswers.food = answer;
          rl.question("Which sport is your absolute favourite?",(answer)=>{
            objOfAnswers.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!",(answer)=>{
              objOfAnswers.superpower = answer;
              console.log(objOfAnswers);
              rl.close();
            });
          });
        });
      });
    });
  });
});




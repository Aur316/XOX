const readline = require("readline");
const { random, gettable } = require("./functions");
const { ClientRequest } = require("http");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const introQuestion = () => {
  return new Promise((resolve) => {
    rl.question("Do you want to start? (Yes/No) ", (answer) => {
      const firstQuestion = answer.toLowerCase();
      if (firstQuestion !== "yes" && firstQuestion !== "no") {
        console.log("Invalid input. Please write Yes or No. ");
        return resolve(false);
      } else if (answer.toLowerCase() === "yes") {
        console.log("Please pick a square to place your ,,X'' ");
        console.log(gettable(emptySquares));
      } else if (answer.toLowerCase() === "no") {
        console.log("Computers turn.");
      }
      resolve(answer);
    });
  });
};

let emptySquares = [
  " 1 ",
  " 2 ",
  " 3 ",
  " 4 ",
  " 5 ",
  " 6 ",
  " 7 ",
  " 8 ",
  " 9 ",
];

let emptySquaresLength = emptySquares.length;
let questionanswer = 0;

const turnQuestion = (answer) => {
  if (answer.toLowerCase() === "no" && questionanswer === 0) {
    questionanswer++;
    let computerAnswer = 0;
    let done = false;

    emptySquaresLength = emptySquaresLength - 1;

    do {
      computerAnswer = random(0, 8);

      if (
        emptySquares[computerAnswer] !== " O " &&
        emptySquares[computerAnswer] !== " X "
      ) {
        done = true;
        emptySquares[computerAnswer] = " O ";
        emptySquaresLength = emptySquaresLength - 1;
      }

      if (emptySquaresLength === 0) {
        done = true;
        console.log("The game is draw.");
        console.log("1");
        return resolve(true);
      }
    } while (done === false);
    console.log(gettable(emptySquares));
  }

  return new Promise((resolve) => {
    rl.question("Place your X in square 1-9 ", (answer) => {
      const square = parseInt(answer) - 1;
      if (isNaN(square) || square < 0 || square >= emptySquares.length) {
        console.log("Invalid input. Please enter a number between 1 and 9.");
        return resolve(false);
      }

      if (
        emptySquares[answer - 1] === " X " ||
        emptySquares[answer - 1] === " O "
      ) {
        console.log("Invalid square. Please choose another square.");
        return resolve(false);
      }

      emptySquares[answer - 1] = " X ";
      let computerAnswer = 0;
      let done = false;

      emptySquaresLength = emptySquaresLength - 1;
      if (
        //vizszintes 1
        emptySquares[0] === " X " &&
        emptySquares[0] === emptySquares[1] &&
        emptySquares[1] === emptySquares[2]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //vizszintes 2
        emptySquares[3] === " X " &&
        emptySquares[3] === emptySquares[4] &&
        emptySquares[4] === emptySquares[5]
      ) {
        console.log("You Win");
        resolve(true);
      }
      if (
        //vizszintes 3
        emptySquares[6] === " X " &&
        emptySquares[6] === emptySquares[7] &&
        emptySquares[7] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //fuggoleges 1
        emptySquares[0] === " X " &&
        emptySquares[0] === emptySquares[3] &&
        emptySquares[3] === emptySquares[6]
      ) {
        console.log("You Win");
        resolve(true);
      }
      if (
        //fuggoleges 2
        emptySquares[1] === " X " &&
        emptySquares[1] === emptySquares[4] &&
        emptySquares[4] === emptySquares[7]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //fuggoleges 3
        emptySquares[2] === " X " &&
        emptySquares[2] === emptySquares[5] &&
        emptySquares[5] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //atlo 1
        emptySquares[0] === " X " &&
        emptySquares[0] === emptySquares[4] &&
        emptySquares[4] === emptySquares[8]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //atlo 2
        emptySquares[2] === " X " &&
        emptySquares[2] === emptySquares[4] &&
        emptySquares[4] === emptySquares[6]
      ) {
        console.log("You Win");
        resolve(true);
      }

      if (
        //vizszintes 1 OOO
        emptySquares[0] === " O " &&
        emptySquares[0] === emptySquares[1] &&
        emptySquares[1] === emptySquares[2]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      if (
        //vizszintes 2
        emptySquares[3] === " O " &&
        emptySquares[3] === emptySquares[4] &&
        emptySquares[4] === emptySquares[5]
      ) {
        console.log("You Lose!");
        resolve(true);
      }
      if (
        //vizszintes 3
        emptySquares[6] === " O " &&
        emptySquares[6] === emptySquares[7] &&
        emptySquares[7] === emptySquares[8]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      if (
        //fuggoleges 1
        emptySquares[0] === " O " &&
        emptySquares[0] === emptySquares[3] &&
        emptySquares[3] === emptySquares[6]
      ) {
        console.log("You Lose!");
        resolve(true);
      }
      if (
        //fuggoleges 2
        emptySquares[1] === " O " &&
        emptySquares[1] === emptySquares[4] &&
        emptySquares[4] === emptySquares[7]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      if (
        //fuggoleges 3
        emptySquares[2] === " O " &&
        emptySquares[2] === emptySquares[5] &&
        emptySquares[5] === emptySquares[8]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      if (
        //atlo 1
        emptySquares[0] === " O " &&
        emptySquares[0] === emptySquares[4] &&
        emptySquares[4] === emptySquares[8]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      if (
        //atlo 2
        emptySquares[2] === " O " &&
        emptySquares[2] === emptySquares[4] &&
        emptySquares[4] === emptySquares[6]
      ) {
        console.log("You Lose!");
        resolve(true);
      }

      do {
        computerAnswer = random(0, 8);

        if (
          emptySquares[computerAnswer] !== " O " &&
          emptySquares[computerAnswer] !== " X "
        ) {
          done = true;
          emptySquares[computerAnswer] = " O ";
          emptySquaresLength = emptySquaresLength - 1;
        }

        if (emptySquaresLength === 0) {
          done = true;
          console.log("The game is draw.");
          return resolve(true);
        }
      } while (done === false);

      console.log(gettable(emptySquares));

      resolve(false);
    }); // } answer, )question
    //  }// if
    // }//for
  }); //  , promise
}; // turnquestion

async function game() {
  let answer = false;
  do {
    answer = await introQuestion();
  } while (answer === false);

  let end = false;
  do {
    end = await turnQuestion(answer);
  } while (end === false);
  rl.close();
}

game();

const readline = require("readline");
const { random, gettable } = require("./functions");
const { ClientRequest } = require("http");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const levelQuestion = () => {
  return new Promise((resolve) => {
    rl.question("Do you want easy or hard game? (Easy/Hard) ", (answer0) => {
      const firstQuestion0 = answer0.toLowerCase();
      if (firstQuestion0 !== "easy" && firstQuestion0 !== "hard") {
        console.log("Invalid input. Please write Easy or Hard. ");
        return resolve(false);
      } else if (answer0.toLowerCase() === "yes") {
        console.log("Please pick a square to place your ,,X'' ");
        console.log(gettable(emptySquares));
      } else if (answer0.toLowerCase() === "no") {
        console.log("Computers turn.");
      }
      resolve(answer0);
    });
  });
};

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

const introQuestionHard = () => {
  return new Promise((resolve) => {
    rl.question("Do you want to start? (Yes/No) ", (answer0) => {
      const firstQuestion = answer0.toLowerCase();
      if (firstQuestion !== "yes" && firstQuestion !== "no") {
        console.log("Invalid input. Please write Yes or No. ");
        return resolve(false);
      } else if (answer0.toLowerCase() === "yes") {
        console.log("Please pick a square to place your ,,X'' ");
        console.log(gettable(emptySquares));
      } else if (answer0.toLowerCase() === "no") {
        console.log("Computers turn.");
      }
      resolve(answer0);
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

const turnQuestionHard = (answer0) => {
  if (answer0.toLowerCase() === "no" && questionanswer === 0) {
    questionanswer++;
    let computerAnswer = 0;
    let done = false;

    emptySquaresLength = emptySquaresLength - 1;

    do {
      computerAnswer = 4;

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
  }

  return new Promise((resolve) => {
    rl.question("Place your X in square 1-9 ", (answer0) => {
      const square = parseInt(answer0) - 1;
      if (isNaN(square) || square < 0 || square >= emptySquares.length) {
        console.log("Invalid input. Please enter a number between 1 and 9.");
        return resolve(false);
      }
      //eddig elvileg jó
      if (
        emptySquares[answer0 - 1] === " X " ||
        emptySquares[answer0 - 1] === " O "
      ) {
        console.log("Invalid square. Please choose another square.");
        return resolve(false);
      }

      emptySquares[answer0 - 1] = " X ";
      let computerAnswer = -1;
      let done = false;

      emptySquaresLength = emptySquaresLength - 1;

      //************-Győztes ellenőrzése */

      const winConditions = [
        [0, 1, 2], // Vízszintes 1
        [3, 4, 5], // Vízszintes 2
        [6, 7, 8], // Vízszintes 3
        [0, 3, 6], // Függőleges 1
        [1, 4, 7], // Függőleges 2
        [2, 5, 8], // Függőleges 3
        [0, 4, 8], // Átló 1
        [2, 4, 6], // Átló 2
      ];

      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (
          emptySquares[a] === " X " &&
          emptySquares[a] === emptySquares[b] &&
          emptySquares[b] === emptySquares[c]
        ) {
          console.log("You Win!");
          done = true;
          resolve(true);
          return;
        }
      }

      //********************************* */

      do {
        let patterns = [
          // Vízszintes minták
          [0, 1, 2],
          [1, 2, 0],
          [0, 2, 1],
          // Függőleges minták
          [0, 3, 6],
          [3, 6, 0],
          [0, 6, 3],
          // Átlós minták
          [6, 7, 8],
          [7, 8, 6],
          [6, 8, 7],
          [2, 5, 8],
          [8, 5, 2],
          [8, 2, 5],
        ];

        for (let i = 0; i < patterns.length; i++) {
          let [a, b, c] = patterns[i];

          if (
            emptySquares[a] === " X " &&
            emptySquares[b] === " X " &&
            emptySquares[c] !== " X " &&
            emptySquares[c] !== " O "
          ) {
            computerAnswer = c;
            done = true;
            break;
          } else if (
            emptySquares[a] === " X " &&
            emptySquares[c] === " X " &&
            emptySquares[b] !== " X " &&
            emptySquares[b] !== " O "
          ) {
            computerAnswer = b;
            done = true;
            break;
          } else if (
            emptySquares[b] === " X " &&
            emptySquares[c] === " X " &&
            emptySquares[a] !== " X " &&
            emptySquares[a] !== " O "
          ) {
            computerAnswer = a;
            done = true;
            break;
          }
        }

        let possibleAnswers = [8, 7, 6, 5, 3, 2, 1, 0];

        for (let i = 0; i < possibleAnswers.length; i++) {
          let answerIndex = possibleAnswers[i];

          if (
            emptySquares[answerIndex] === " O " &&
            emptySquares[8 - answerIndex] !== " X "
          ) {
            computerAnswer = 8 - answerIndex;
            break;
          }
        }

        if (computerAnswer === -1) {
          computerAnswer = random(0, 8);
        }

        //

        if (!done) {
          computerAnswer = random(0, 8);
        }

        if (
          emptySquares[computerAnswer] !== " O " &&
          emptySquares[computerAnswer] !== " X "
        ) {
          done = true;
          emptySquares[computerAnswer] = " O ";
          emptySquaresLength = emptySquaresLength - 1;
        }

        // **************vesztes ellenőrzése***************

        const winConditionsL = [
          [0, 1, 2], // Vízszintes 1
          [3, 4, 5], // Vízszintes 2
          [6, 7, 8], // Vízszintes 3
          [0, 3, 6], // Függőleges 1
          [1, 4, 7], // Függőleges 2
          [2, 5, 8], // Függőleges 3
          [0, 4, 8], // Átló 1
          [2, 4, 6], // Átló 2
        ];

        for (const condition of winConditionsL) {
          const [a, b, c] = condition;
          if (
            emptySquares[a] === " O " &&
            emptySquares[a] === emptySquares[b] &&
            emptySquares[b] === emptySquares[c]
          ) {
            console.log(gettable(emptySquares));
            console.log("You Lose!");
            done = true;
            resolve(true);
            return;
          }
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
      const winConditions = [
        [0, 1, 2], // Vízszintes 1
        [3, 4, 5], // Vízszintes 2
        [6, 7, 8], // Vízszintes 3
        [0, 3, 6], // Függőleges 1
        [1, 4, 7], // Függőleges 2
        [2, 5, 8], // Függőleges 3
        [0, 4, 8], // Átló 1
        [2, 4, 6], // Átló 2
      ];

      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (
          emptySquares[a] === " X " &&
          emptySquares[a] === emptySquares[b] &&
          emptySquares[b] === emptySquares[c]
        ) {
          console.log("You Win!");
          done = true;
          resolve(true);
          return;
        }
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

        const winConditionsL = [
          [0, 1, 2], // Vízszintes 1
          [3, 4, 5], // Vízszintes 2
          [6, 7, 8], // Vízszintes 3
          [0, 3, 6], // Függőleges 1
          [1, 4, 7], // Függőleges 2
          [2, 5, 8], // Függőleges 3
          [0, 4, 8], // Átló 1
          [2, 4, 6], // Átló 2
        ];

        for (const condition of winConditionsL) {
          const [a, b, c] = condition;
          if (
            emptySquares[a] === " O " &&
            emptySquares[a] === emptySquares[b] &&
            emptySquares[b] === emptySquares[c]
          ) {
            console.log(gettable(emptySquares));
            console.log("You Lose!");
            done = true;
            resolve(true);
            return;
          }
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
  let answer0 = false;
  do {
    answer0 = await levelQuestion();
  } while (answer0 === false);

  if (answer0 === "easy") {
    let answer = false;
    do {
      answer = await introQuestion();
    } while (answer === false);

    let end = false;
    do {
      end = await turnQuestion(answer);
    } while (end === false);
    rl.close();
    ///////////
  } else if (answer0 === "hard") {
    answer0 === false;
    do {
      answer0 = await introQuestionHard();
    } while (answer0 === false);
    let end0 = false;
    do {
      end0 = await turnQuestionHard(answer0);
    } while (end0 === false);
    rl.close();
  }
}

game();

const readline = require("readline");
const { random, gettable } = require("./functions");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function allXorO(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== " X " && list[i] !== " O ") {
      return true; // ha minden elem X vagy o
    }
  }
  return false; // ha van olyan elem, ami még nem X vagy O
}

// const listaa = [" X ", " O ", " X ", " X ", " O "];
// const result = allXorO(listaa);
// console.log(result);

const introQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Please pick a square to place your ,,X'' ");
        console.log(gettable(emptySquares));
      } else if (answer.toLowerCase() === "no") {
        console.log("Computers turn.");
      }
      resolve();
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

const turnQuestion = (end) => {
  return new Promise((resolve, reject) => {
    rl.question("Place your X in square 1-9 ", (answer) => {
      const square = parseInt(answer);

      if (isNaN(square) || square <= 0 || square >= emptySquares.length) {
        console.log("Invalid input. Please enter a number between 1 and 9.");
        return resolve(false);
      }
      emptySquares[answer - 1] = " X ";
      let computerAnswer = 0;
      let done = false;
      do {
        computerAnswer = random(0, 8);
        if (
          emptySquares[computerAnswer] !== " O " &&
          emptySquares[computerAnswer] !== " X "
        ) {
          done = true;
          emptySquares[computerAnswer] = " O ";
        }
      } while (done === false);

      console.log(gettable(emptySquares));

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

      resolve(false);
    }); // } answer, )question
    //  }// if
    // }//for
  }); //  , promise
}; // turnquestion

async function game() {
  await introQuestion();
  let end = false;
  const result = allXorO(emptySquares);
  if (result === false) {
    do {
      end = await turnQuestion(end);
    } while (end === false);
  } else {
    rl.close();
  }
}

// async function game() {
//   await introQuestion();
//   let end = false;
//   do {
//     end = await turnQuestion(end);
//   } while (end === false);
//   rl.close();
// }

game();

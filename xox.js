const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function random(a, b) {
  return Math.round(Math.random() * (a - b) + b);
}

let tableElement = [
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

function newtable() {
  let table = `
    ___________________

    | ${tableElement[0]} | ${tableElement[1]} | ${tableElement[2]} |
    ___________________

    | ${tableElement[3]} | ${tableElement[4]} | ${tableElement[5]} |
    ___________________

    | ${tableElement[6]} | ${tableElement[7]} | ${tableElement[8]} |
    ___________________
    `;
  return table;
}

// tableElement[1] = " X ";
// console.log(newtable());

function changeToX(a, table) {
  table[a - 1] = " X ";
  return table;
}

function changeToY(a, table) {
  table[a - 1] = " Y ";
  return table;
}

// changeToX(1, tableElement);
// console.log(newtable());

let userInput = "";

rl.question("Would you like to start? (Yes/No) ", (string) => {
  if (string.toLowerCase() === "yes") {
    console.log(newtable());
    rl.question("Please pick a square to place your ,,X'' ", (string) => {
      tableElement[string - 1] = " X ";

      for (let i = 0; i < 10; i++) {
        let rand = random(0, 8);
        if (rand != " X " && rand != " O ") {
          tableElement[rand] = " O ";
        }
        i = 10;
      }
      console.log(newtable());

      rl.question("Please pick a square to place your ,,X'' ", (string) => {
        tableElement[string - 1] = " X ";
        if (
          tableElement[string - 1] === " X " ||
          tableElement[string - 1] === " O "
        ) {
        } else {
        }
        console.log(newtable());
        for (let i = 0; i < 10; i++) {
          let rand = random(0, 8);
          if (rand !== " X " && rand !== " O ") {
            tableElement[rand] = " O ";
          }
          i = 10;
          console.log(newtable());
        }
      });
    });
  } else if (string.toLowerCase() === "no") {
    console.log("Please pick a square to place your ,,O'' ");
  } else {
    console.log("I don't understand. Stopping program.");
    rl.close();
  }
});

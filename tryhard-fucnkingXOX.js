if (
  //vizszintes 1 OOO
  emptySquares[0] === " O " &&
  emptySquares[0] === emptySquares[1] &&
  emptySquares[1] === emptySquares[2]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (
  //vizszintes 2
  emptySquares[3] === " O " &&
  emptySquares[3] === emptySquares[4] &&
  emptySquares[4] === emptySquares[5]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}
if (
  //vizszintes 3
  emptySquares[6] === " O " &&
  emptySquares[6] === emptySquares[7] &&
  emptySquares[7] === emptySquares[8]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (
  //fuggoleges 1
  emptySquares[0] === " O " &&
  emptySquares[0] === emptySquares[3] &&
  emptySquares[3] === emptySquares[6]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}
if (
  //fuggoleges 2
  emptySquares[1] === " O " &&
  emptySquares[1] === emptySquares[4] &&
  emptySquares[4] === emptySquares[7]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (
  //fuggoleges 3
  emptySquares[2] === " O " &&
  emptySquares[2] === emptySquares[5] &&
  emptySquares[5] === emptySquares[8]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (
  //atlo 1
  emptySquares[0] === " O " &&
  emptySquares[0] === emptySquares[4] &&
  emptySquares[4] === emptySquares[8]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (
  //atlo 2
  emptySquares[2] === " O " &&
  emptySquares[2] === emptySquares[4] &&
  emptySquares[4] === emptySquares[6]
) {
  console.log(gettable(emptySquares));
  console.log("You Lose!");
  done = true;
  resolve(true);
  return;
}

if (emptySquares[0] === " O " && emptySquares[8] !== " X ") {
  computerAnswer = 8;
} else {
  computerAnswer = random(0, 8);
}

if (emptySquares[1] === " O " && emptySquares[7] !== " X ") {
  computerAnswer = 7;
} else {
  computerAnswer = random(0, 8);
}

if (emptySquares[2] === " O " && emptySquares[6] !== " X ") {
  computerAnswer = 6;
} else {
  computerAnswer = random(0, 8);
}

if (emptySquares[3] === " O " && emptySquares[5] !== " X ") {
  computerAnswer = 5;
} else {
  computerAnswer = random(0, 8);
}
if (emptySquares[5] === " O " && emptySquares[3] !== " X ") {
  computerAnswer = 3;
} else {
  computerAnswer = random(0, 8);
}
if (emptySquares[6] === " O " && emptySquares[2] !== " X ") {
  computerAnswer = 2;
} else {
  computerAnswer = random(0, 8);
}
if (emptySquares[7] === " O " && emptySquares[1] !== " X ") {
  computerAnswer = 1;
} else {
  computerAnswer = random(0, 8);
}
if (emptySquares[8] === " O " && emptySquares[0] !== " X ") {
  computerAnswer = 0;
} else {
  computerAnswer = random(0, 8);
}

let a1 = 0; //vizszintes 1 1
if (emptySquares[0] === " X " && emptySquares[1] === " X " && a1 === 0) {
  a1++;
  if (emptySquares[2] !== " X " && emptySquares[2] !== " O ") {
    computerAnswer = 2;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}
let a2 = 0; //vizszintes 1 2
if (emptySquares[1] === " X " && emptySquares[2] === " X " && a2 === 0) {
  a2++;
  if (emptySquares[0] !== " X " && emptySquares[0] !== " O ") {
    computerAnswer = 0;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}
let a3 = 0; //vizszintes 1 3 kk
if (emptySquares[0] === " X " && emptySquares[2] === " X " && a3 === 0) {
  a3++;
  if (emptySquares[1] !== " X " && emptySquares[1] !== " O ") {
    computerAnswer = 1;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}
let b1 = 0; //fugoleges 1 1
if (emptySquares[0] === " X " && emptySquares[3] === " X " && b1 === 0) {
  b1++;
  if (emptySquares[6] !== " X " && emptySquares[6] !== " O ") {
    computerAnswer = 6;
  } else if (emptySquares[6] === " X " && emptySquares[6] === " O ") {
    computerAnswer = random(0, 8);
  }
  done = true;
}

let b2 = 0; //fugoleges 1 2
if (emptySquares[3] === " X " && emptySquares[6] === " X " && b2 === 0) {
  b2++;
  if (emptySquares[0] !== " X " && emptySquares[0] !== " O ") {
    computerAnswer = 0;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}
let b3 = 0; //fugoleges 1 3 kk
if (emptySquares[0] === " X " && emptySquares[6] === " X " && b3 === 0) {
  b3++;
  if (emptySquares[3] !== " X " && emptySquares[3] !== " O ") {
    computerAnswer = 3;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}

let c1 = 0; //vizszintes 2 1
if (emptySquares[6] === " X " && emptySquares[7] === " X " && c1 === 0) {
  c1++;
  if (emptySquares[8] !== " X " && emptySquares[8] !== " O ") {
    computerAnswer = 8;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}
let c2 = 0; //vizszintes 2 2
if (emptySquares[7] === " X " && emptySquares[8] === " X " && c2 === 0) {
  c2++;
  if (emptySquares[6] !== " X " && emptySquares[6] !== " O ") {
    computerAnswer = 6;
  } else {
    computerAnswer = random(0, 0);
  }
  done = true;
}

let c3 = 0; //vizszintes 2 3 kk
if (emptySquares[6] === " X " && emptySquares[8] === " X " && c3 === 0) {
  c3++;
  if (emptySquares[7] !== " X " && emptySquares[7] !== " O ") {
    computerAnswer = 7;
  } else {
    computerAnswer = random(0, 0);
  }
  done = true;
}

let d1 = 0; //fugoleges 2 1
if (emptySquares[2] === " X " && emptySquares[5] === " X " && d1 === 0) {
  d1++;
  if (emptySquares[8] !== " X " && emptySquares[8] !== " O ") {
    computerAnswer = 8;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}

let d2 = 0; //fugoleges 2 2
if (emptySquares[8] === " X " && emptySquares[5] === " X " && d2 === 0) {
  d2++;
  if (emptySquares[2] !== " X " && emptySquares[2] !== " O ") {
    computerAnswer = 2;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}

let d3 = 0; //fugoleges 2 3kk
if (emptySquares[8] === " X " && emptySquares[2] === " X " && d3 === 0) {
  d3++;
  if (emptySquares[5] !== " X " && emptySquares[5] !== " O ") {
    computerAnswer = 5;
  } else {
    computerAnswer = random(0, 8);
  }
  done = true;
}

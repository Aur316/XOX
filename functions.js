function random(a, b) {
  return Math.round(Math.random() * (a - b) + b);
}
/*
A getable funkcionak szuksege van egy listara
A listaban szamok es stringek vannak/lehetnek

!!! A gettable funkcio egy tablat hoz letre egy szam es string lista segitsegevel

squares - a lista amely meghatarozza a szamok poziciojat

return - egy nagy tabla kitoltve

*/
function gettable(squares) {
  let table = `
      ___________________
  
      | ${squares[0]} | ${squares[1]} | ${squares[2]} |
      ___________________
  
      | ${squares[3]} | ${squares[4]} | ${squares[5]} |
      ___________________
  
      | ${squares[6]} | ${squares[7]} | ${squares[8]} |
      ___________________
      `;
  return table;
}

module.exports = {
  random,
  gettable,
};

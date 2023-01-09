function startGame() {
  const userGrid = document.getElementById("user-grid");
  const compGrid = document.getElementById("comp-grid");

  const userSquares = [];
  const compSquares = [];
  // console.log(userSquares);

  const compShips = [];

  // console.log(compShips);

  const userMisses = [];
  const userHits = [];
  const compMisses = [];
  const compHits = [];
  const sunk = [];

  function createBoard(grid, squares) {
    for (let i = 0; i < 100; i++) {
      const square = document.createElement(`div`);
      square.dataset.id = i;
      //   console.log(i);
      let getLastIDNum = parseInt(i.toString().slice(-1));

      if (i <= 9) {
        square.innerHTML = `<h6 style="user-select: none">A-${i + 1}</h6>`;
      } //******* "A" row****/

      if (i > 9 && i <= 19) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">B-${n + 1}</h6>`;
      } //******* "B" row****/

      if (i > 19 && i <= 29) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">C-${n + 1}</h6>`;
      } //******* "C" row****/

      if (i > 29 && i <= 39) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">D-${n + 1}</h6>`;
      } //******* "D" row****/

      if (i > 39 && i <= 49) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">E-${n + 1}</h6>`;
      } //******* "E" row****/

      if (i > 49 && i <= 59) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">F-${n + 1}</h6>`;
      } //******* "F" row****/

      if (i > 59 && i <= 69) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">G-${n + 1}</h6>`;
      } //******* "G" row****/

      if (i > 69 && i <= 79) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">H-${n + 1}</h6>`;
      } //******* "H" row****/

      if (i > 79 && i <= 89) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">I-${n + 1}</h6>`;
      } //******* "I" row****/

      if (i > 89 && i <= 99) {
        let n = getLastIDNum;
        square.innerHTML = `<h6 style="user-select: none">J-${n + 1}</h6>`;
      } //******* "J" row****/

      grid.appendChild(square);
      squares.push(square);
    }
  }
  createBoard(userGrid, userSquares);
  createBoard(compGrid, compSquares);

  function* randomPosition(squares) {
    let shipsArray = [
      {
        name: "carrier",
        spaces: [],
        size: 5,
      },
      {
        name: "battleship",
        spaces: [],
        size: 4,
      },
      {
        name: "cruiser",
        spaces: [],
        size: 3,
      },
      {
        name: "submarine",
        spaces: [],
        size: 3,
      },
      {
        name: "destroyer",
        spaces: [],
        size: 2,
      },
    ];
    // let shipLengths = shipsArray.spaces.map((ship) => ship.spaces);
    // shipLengths;
    // function taken(nums) {
    //   squares.splice(nums);
    // }
    let elem,
      len = squares.length;
    while (len > 0) {
      let rN = Math.floor(Math.random() * len);
      let xORy = Math.random() < 0.5 ? x : y;

      if ((xORy = x && rN % 10 >= 4)) {
        shipsArray[0].spaces.push(rN, rN + 1, rN + 2, rN + 3, rN + 4);
        shipsArray[1].spaces.push(rN, rN + 1, rN + 2, rN + 3);
        shipsArray[2].spaces.push(rN, rN + 1, rN + 2);
        shipsArray[3].spaces.push(rN, rN + 1, rN + 2);
        shipsArray[4].spaces.push(rN, rN + 1);
      } else if ((xORy = x && rN % 10 <= 5)) {
        shipsArray[0].spaces.push(rN, rN - 1, rN - 2, rN - 3, rN - 4);
        shipsArray[1].spaces.push(rN, rN - 1, rN - 2, rN - 3);
        shipsArray[2].spaces.push(rN, rN - 1, rN - 2);
        shipsArray[3].spaces.push(rN, rN - 1, rN - 2);
        shipsArray[4].spaces.push(rN, rN - 1);
      } else if ((xORy = y && rN <= 49)) {
        shipsArray[0].spaces.push(rN, rN + 10, rN + 20, rN + 30, rN + 40);
        shipsArray[1].spaces.push(rN, rN + 10, rN + 20, rN + 30);
        shipsArray[2].spaces.push(rN, rN + 10, rN + 20);
        shipsArray[3].spaces.push(rN, rN + 10, rN + 20);
        shipsArray[4].spaces.push(rN, rN + 10);
      } else if ((xORy = y && rN >= 50)) {
        shipsArray[0].spaces.push(rN, rN - 10, rN - 20, rN - 30, rN - 40);
        shipsArray[1].spaces.push(rN, rN - 10, rN - 20, rN - 30);
        shipsArray[2].spaces.push(rN, rN - 10, rN - 20);
        shipsArray[3].spaces.push(rN, rN - 10, rN - 20);
        shipsArray[4].spaces.push(rN, rN - 10);
      }
    }
  }

  randomPosition(compSquares);
  compSquares.length;
  // const hidden = randomPosition(compSquares);
  // // compShips.add(hidden.next());ay
  // // compShips.add(hidden.next());
  // compShips.push(hidden.next());
  // compShips.push(hidden.next());

  // for (let i = 0; i < compShips.length; i++) {

  //   let item = compShips[i].value;
  //   item.classList.add("hidden-ship");
  // }

  function shipAlign(randomGenNum) {
    // if thisNum data.id ends in <4 increment shipsArray
  }
}
startGame();
// document.addEventListener("load", startGame());

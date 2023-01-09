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

  const shipsArray = [
    {
      name: "carrier",
      size: [0, 1, 2, 3, 4],
    },
    {
      name: "battleship",
      size: [0, 1, 2, 3],
    },
    {
      name: "cruiser",
      size: [0, 1, 2],
    },
    {
      name: "submarine",
      size: [0, 1, 2],
    },
    {
      name: "destroyer",
      size: [0, 1],
    },
  ];

  function* randomPosition(squares) {
    let elem,
      len = squares.length;
    while (len > 0) {
      let random = Math.floor(Math.random() * len);
      elem = squares.splice(random, 1)[0];
      yield elem;
      len = squares.length;
    }
  }
  const hidden = randomPosition(compSquares);
  // compShips.add(hidden.next());ay
  // compShips.add(hidden.next());
  compShips.push(hidden.next());
  compShips.push(hidden.next());

  for (let i = 0; i < compShips.length; i++) {
    // let item = compShips.values;
    // item.forEach(classList.add('hidden-ship'))
    let item = compShips[i].value;
    item.classList.add("hidden-ship");
  }

  function placeShip(position, ship) {
    if (position.dataset(parseInt.toString().slice(-1)) < `6`) {
      // let loopShip = 'let i = 0; i < ship.size.length; i++';
      for (let i = 0; i < ship.size.length; i++) {
        console.log(ship.size.length);
        position.nextElementSibling().classList.add("hidden-ship");
      }
    } else {
      for (let i = 0; i < ship.size.length; i++) {
        position.previousElementSibling().classList.add("hidden-ship");
      }
    }
  }
  placeShip(compShips[0], shipsArray[0]);
  placeShip(compShips[1], shipsArray[1]);
  placeShip(compShips[2], shipsArray[2]);
  placeShip(compShips[3], shipsArray[3]);
  placeShip(compShips[4], shipsArray[4]);

  //   } else if ((compShips[0].data-id(parseInt.toString().slice(-1))  calc() 9) {
  //     for(let i = 0; i < shipsArray[0].size.length; i++) {

  //     }
  //   }

  // randomPosition(hidden1)
  // randomPosition(hidden2)

  // console.log(randomPosition.dataset.id);
  // hidden1 = compShips.push(randomPosition.dataset.id);

  // gameSquares.addEventListener('click', () => {
  //   if (gameSquares.dataset.id != hidden1.dataset.id) {
  //     userMisses.push(gameSquares.dataset.id)
  //     console.log(userMisses);
  //   }
  // });

  // let hidden1 = "";
  // let hidden2 = "";
  // function randomPosition (ship) {
  //   ship = gameSquares[Math.floor(Math.random() * gameSquares.length)];

  //   ship = compShips.push(.dataset.id);
  // }
  // randomPosition(hidden1);
  // randomPosition(hidden2);
}
startGame();
// document.addEventListener("load", startGame());

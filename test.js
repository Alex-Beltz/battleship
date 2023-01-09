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
  //   squares.splice(nums)
  // }
  function randomPosition(squares) {
    while (shipsArray.length > 0) {
      let randomNum = Math.floor(Math.random() * squares.length);
      let axis = Math.random() < 0.5 ? "x" : "y";
      placeShip(randomNum, axis);
    }
  }
  randomPosition(compSquares);
  compSquares.length;

  function placeShip(randomNum, axis) {
    const rN = randomNum;

    let carrierUpNums = "rN, rN - 10, rN - 20, rN - 30, rN - 40";
    let carrierDownNums = "rN, rN + 10, rN + 20, rN + 30, rN + 40";
    let carrierLeftNums = "rN, rN - 1, rN - 2, rN - 3, rN - 4";
    let carrierRightNums = "rN, rN + 1, rN + 2, rN + 3, rN + 4";
    
    let battleshipUpNums = "rN, rN - 10, rN - 20, rN - 30";
    let battleshipDownNums = "rN, rN + 10, rN + 20, rN + 30";
    let battleshipLeftNums = "rN, rN - 1, rN - 2, rN - 3";
    let battleshipRightNums = "rN, rN + 1, rN + 2, rN + 3";
    
    let cruiserUpNums = "rN, rN - 10, rN - 20";
    let cruiserDownNums = "rN, rN + 10, rN + 20";
    let cruiserLeftNums = "rN, rN - 1, rN - 2";
    let cruiserRightNums = "rN, rN + 1, rN + 2";
    
    let submarineUpNums = "rN, rN - 10, rN - 20";
    let submarineDownNums = "rN, rN + 10, rN + 20";
    let submarineLeftNums = "rN, rN - 1, rN - 2";
    let submarineRightNums = "rN, rN + 1, rN + 2";
    
    let destroyerUpNums = "rN, rN - 10";
    let destroyerDownNums = "rN, rN + 10";
    let destroyerLeftNums = "rN, rN - 1";
    let destroyerRightNums = "rN, rN + 1";

    if ((axis = "x" && rN % 10 >= 4)) {
      shipsArray[0].spaces.push(carrierRightNums);
      shipsArray[1].spaces.push(battleshipRightNums);
      shipsArray[2].spaces.push(cruiserRightNums);
      shipsArray[3].spaces.push(submarineRightNums);
      shipsArray[4].spaces.push(destroyerRightNums);
    } 
    else if ((axis = "x" && rN % 10 <= 5)) {
      shipsArray[0].spaces.push(carrierLeftNums);
      shipsArray[1].spaces.push(battleshipLeftNums);
      shipsArray[2].spaces.push(cruiserLeftNums);
      shipsArray[3].spaces.push(submarineLeftNums);
      shipsArray[4].spaces.push(destroyerLeftNums);
    } 
    else if ((axis = "y" && rN <= 49)) {
      shipsArray[0].spaces.push(carrierDownNums);
      shipsArray[1].spaces.push(battleshipDownNums);
      shipsArray[2].spaces.push(cruiserDownNums);
      shipsArray[3].spaces.push(submarineDownNums);
      shipsArray[4].spaces.push(destroyerDownNums);
    }
    else if ((axis = "y" && rN >= 50)) {
      shipsArray[0].spaces.push(carrierUpNums);
      shipsArray[1].spaces.push(battleshipUpNums);
      shipsArray[2].spaces.push(cruiserUpNums);
      shipsArray[3].spaces.push(submarineUpNums);
      shipsArray[4].spaces.push(destroyerUpNums);
    }
  }

  /*function shipAlign(randomGenNum) {
    // if thisNum data.id ends in <4 increment shipsArray
  }
}*/
startGame();
// document.addEventListener("load", startGame());

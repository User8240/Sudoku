import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Sudoku from "./sudoku.js"


// function setGame() {
//   //input number value for html
//   for (let i = 1; i <= 9; i++) {
//     let number = document.createElement("div");
//     number.id = i;
//     number.innerText = i;
//     number.addEventListener("click", selectNumber);
//     number.classList.add("number");
//     document.getElementById("digits").appendChild(number);
//   }
//   // board 9x9
//   //r = row
//   //c = column
//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       let tile = document.createElement("div");
//       tile.id = r.toString() + "-" + c.toString();
//       if (Sudoku.board[r][c] != "-") {
//         tile.innerText = Sudoku.board[r][c];
//         tile.classList = add("tile-start");
//       }
//       if (r == 2 || r == 5) {
//         tile.classList.add("horizontal-line");
//       }
//       if (c == 2 || c == 5) {
//         tile.classList.add("vertical-line");
//       }
//       tile.addEventListener("click", selectTile);
//       tile.classList.add("tile");
//       document.getElementById("board").append(tile);
//     }
//   }
// }

// function selectNumber() {
//   if(numSelected != null) {
//     numSelected.classList.remove("number-selected");
//   }
//   numSelected = this;
//   numSelected.classList.add("number-selected");
// }

// function selectTile() {
//   if (numSelected) {
//       if (this.innerText != "") {
//           return;
//       }

//       // "0-0" "0-1" .. "3-1"
//       let coords = this.id.split("-"); //["0", "0"]
//       let r = parseInt(coords[0]);
//       let c = parseInt(coords[1]);

//       if (solution[r][c] == numSelected.id) {
//           this.innerText = numSelected.id;
//       }
//       else {
//           errors += 1;
//           document.getElementById("errors").innerText = errors;
//       }
//   }
// }
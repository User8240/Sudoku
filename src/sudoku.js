// const pass = checkSudoku([
//   [1, 2, 3, 4, 5, 6, 7, 8, 2],//does this do 1-9/ if not false
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]);
// 'Finished!'

// const fail = checkSudoku([
//   [1, 3, 2, 2, 2, 2, 2, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 9],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]);
// 'Try again!'

export default function Sudoku(board) {
  this.board = board;
};





// array = [5,8,3,4,1,6,7,2,9];
// rowSlice = [5,8,3,4,1,6,7,2,9];
// rowSliceSort = [1,2,3,4,5,6,7,8,9];
// rowSliceSortJoin = "123456789";
// passingRow = "123456789";
// row === passingRow;   

// Each row contains all numbers from 1 to 9 with no repeats.
Sudoku.prototype.sudokuArray = (array) => {
      const row = array.slice(0).sort().join('');
    const passingRow = [1,2,3,4,5,6,7,8,9].join('');
    return (row === passingRow) + " this row is true";
  };


// const testRows = (board) => board.every(row => sudokuArray(row));

// const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");


// export default function Sudoku(board, solution) {
//   this.board = board;
//   this.solution = solution;
// }

// let board = [
//   "--74916-5",
//   "2---6-3-9",
//   "-----7-1-",
//   "-586----4",
//   "--3----9-",
//   "--62--187",
//   "9-4-7---2",
//   "67-83----",
//   "81--45---"
// ];

// let solution = [
//   "387491625",
//   "241568379",
//   "569327418",
//   "758619234",
//   "123784596",
//   "496253187",
//   "934176852",
//   "675832941",
//   "812945763"
// ];

//Sudoku.prototype.newBoard = []
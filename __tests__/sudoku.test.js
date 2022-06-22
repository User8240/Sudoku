import Sudoku from './../src/sudoku.js';

describe('Sudoku', () => {

  test('Each row contains all numbers from 1 to 9 with no repeats.', () => {
    const newSudoku = new Sudoku([5,6,2,1,4,3,7,8,9]);
    expect(newSudoku.sudokuArray(newSudoku.board)).toEqual("true this row is true");
  });
});
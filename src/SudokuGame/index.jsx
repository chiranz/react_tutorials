import React from "react";
import sudoku from "sudoku";
import "./sudoku.css";
import InputField from "./components/InputField";

window.sudoku = sudoku;
window.react = React;

const getFormattedPuzzle = () => {
  // CONSTRAINS= puzzle length = 81
  const formattedPuzzle = sudoku
    .makepuzzle()
    .map((p) => (p === null ? p : p + 1));
  const rows = [];
  for (let i = 0; i < 9; i++) {
    let row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = formattedPuzzle[i * 9 + j];
      const col = {
        i: i,
        j: j,
        value,
        readOnly: value ? true : false,
      };
      row.cols.push(col);
    }
    rows.push(row);
  }
  return rows;
};
export default function Index() {
  const [puzzle, setPuzzle] = React.useState(null);

  React.useEffect(() => {
    let _puzzle = window.localStorage.getItem("sudoku_puzzle");
    if (_puzzle) {
      setPuzzle(JSON.parse(_puzzle));
    } else {
      _puzzle = getFormattedPuzzle();
      setPuzzle(_puzzle);
      window.localStorage.setItem("sudoku_puzzle", JSON.stringify(_puzzle));
    }
  }, []);

  const changeValue = ({ i, j, value, readOnly }) => {
    const cols = puzzle[i].cols;
    setPuzzle([
      ...puzzle.slice(0, i),
      {
        index: i,
        cols: [
          ...cols.slice(0, j),
          { i, j, value, readOnly },
          ...cols.slice(j + 1),
        ],
      },
      ...puzzle.slice(i + 1, puzzle.length),
    ]);
  };
  console.log(puzzle);
  return (
    <div>
      <h1>Sudoku Game</h1>
      <div style={{ maxWidth: 30 * 9 }}>
        {puzzle &&
          puzzle.map((row) => {
            return row.cols.map((col) => {
              const index = col.i * 9 + col.j;
              return (
                <InputField key={index} data={col} changeValue={changeValue} />
              );
            });
          })}
      </div>
    </div>
  );
}

// ----------------------------------
// | 1  2  3  | 1  2  3  | 1  2  3  |
// | 4  5  6  | 4  5  6  | 4  5  6  |
// | 7  8  9  | 7  8  9  | 7  8  9  |
// ----------------------------------
// | 1  2  3  | 1  2  3  | 1  2  3  |
// | 4  5  6  | 4  5  6  | 4  5  6  |
// | 7  8  9  | 7  8  9  | 7  8  9  |
// ----------------------------------
// | 1  2  3  | 1  2  3  | 1  2  3  |
// | 4  5  6  | 4  5  6  | 4  5  6  |
// | 7  8  9  | 7  8  9  | 7  8  9  |
// ----------------------------------

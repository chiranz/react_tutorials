import React from "react";
import sudoku from "sudoku";
import "./sudoku.css";
import InputField from "./components/InputField";

const getFormattedPuzzle = () => {
  // CONSTRAINS= puzzle length = 81
  const _puzzle = sudoku.makepuzzle();
  const puzzle = _puzzle.map((p) => (p === null ? p : p + 1));
  const puzzle_2d = [];
  for (let i = 0; i < 9; i++) {
    const currentIndex = i * 9;
    puzzle_2d.push(puzzle.slice(currentIndex, currentIndex + 9));
  }
  return puzzle_2d;
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
  const changeValue = (index, value) => {
    // 26 i = 2 j = 8
    let i = Math.floor(index / 9);
    let j = index % 9;

    setPuzzle([
      ...puzzle.slice(0, i),
      [
        ...puzzle[i].slice(0, j),
        parseInt(value),
        ...puzzle[i].slice(j + 1, puzzle[i].length),
      ],
      ...puzzle.slice(i + 1, puzzle.length),
    ]);
  };
  console.log(puzzle);
  return (
    <div>
      <h1>Sudoku Game</h1>
      <div style={{ maxWidth: 30 * 9 }}>
        {puzzle &&
          puzzle.map((row, i) => {
            return row.map((val, j) => {
              const index = i * 9 + j;
              return (
                <InputField
                  key={index}
                  value={val}
                  index={index}
                  changeValue={changeValue}
                />
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

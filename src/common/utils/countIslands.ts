const isCellInArr = ([y, x]: number[], acc: string[]) => {
  return acc.includes(`${x}:${y}`);
};

const recursivelyFindEarth = (
  [x, y]: number[],
  map: number[][],
  acc: string[],
) => {
  if (!map[y][x]) return;

  if (!isCellInArr([y, x], acc)) {
    acc.push(`${y}:${x}`);
  }

  const upCell = [y - 1, x];
  const bottomCell = [y + 1, x];
  const rightCell = [y, x + 1];
  const leftCell = [y, x - 1];

  if (!isCellInArr(upCell, acc)) {
    recursivelyFindEarth(upCell, map, acc);
  }
  if (!isCellInArr(bottomCell, acc)) {
    recursivelyFindEarth(bottomCell, map, acc);
  }
  if (!isCellInArr(rightCell, acc)) {
    recursivelyFindEarth(rightCell, map, acc);
  }
  if (!isCellInArr(leftCell, acc)) {
    recursivelyFindEarth(leftCell, map, acc);
  }
};

const countIslands = (map: number[][]): number => {
  const acc: string[] = [];
  for (let i = 0; i < map.length; i += 1) {
    for (let j = 0; j < map[i].length; j += 1) {
      if (!isCellInArr([i, j], acc)) {
        recursivelyFindEarth([j, i], map, acc);
      }
    }
  }

  return acc.length;
};

export default countIslands;

import { TileMatrix } from "./jotaiStore";

export const initTileMatrix = () => {
  const matrix: TileMatrix = [];
  for (let i = 0; i < 16; i++) {
    matrix[i] = [];
    for (let j = 0; j < 16; j++) {
      matrix[i][j] = false;
    }
  }

  return matrix;
}
import { atom, useAtom } from "jotai";
import { initTileMatrix } from "./utils";

type Tile = boolean;
export type TileMatrix = Array<Array<Tile>>;

export const tileMapAtom = atom<TileMatrix>(initTileMatrix());

export type Position = [ x: number, y: number ];
type TileMatrixUpdatePayload = [ Position, state: boolean ];
export const updateTileAtom = atom(null, (_, set, [ [ x, y ], state ]: TileMatrixUpdatePayload) => {
  set(tileMapAtom, (prev) => {
    const newMatrix = [ ...prev ];
    newMatrix[x][y] = state;

    return newMatrix
  });
});

export const useTileById = (x: number, y: number) => {
  const [ tileMap ] = useAtom(tileMapAtom);

  return tileMap[x][y];
} 

export const isMouseDownAtom = atom<boolean>(false);

export const networkOutputAtom = atom<object>({});
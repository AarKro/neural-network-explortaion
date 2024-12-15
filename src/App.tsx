import { useAtom } from "jotai"
import { FC, useEffect } from "react"
import { isMouseDownAtom, Position, tileMapAtom, updateTileAtom } from "./jotaiStore";
import { Tile } from "./components/Tile/Tile";
import { initTileMatrix } from "./utils";
import "./App.css";

export const App: FC = () => {
  const [ tileMap, setTileMap ] = useAtom(tileMapAtom);
  const [ , updateTile ] = useAtom(updateTileAtom);
  const [ , setIsMouseDown ] = useAtom(isMouseDownAtom);

  useEffect(() => {
    // register mouse down tracker
    document.addEventListener("mousedown", () => setIsMouseDown(true));
    document.addEventListener("mouseup", () => setIsMouseDown(false));
  }, [ setIsMouseDown ]);

  const updateTileInMatrix = (positon: Position, state: boolean) => {
    updateTile([positon, state]);
  }

  const clearTiles = () => {
    setTileMap(initTileMatrix());
  }

  return (
    <main>
      <button onClick={() => clearTiles()}>clear</button>
      <div className="tile-container">
        {tileMap.map((row, x) => (
          row.map((_, y) => (
            <Tile x={x} y={y} updateTile={updateTileInMatrix} />
          ))
        ))}
      </div>
    </main>
  )
}
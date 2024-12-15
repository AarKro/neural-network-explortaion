import { FC, useEffect } from "react";
import { useAtom } from "jotai";
import { tileMapAtom, updateTileAtom, isMouseDownAtom, Position } from "../../jotaiStore";
import { initTileMatrix } from "../../utils";
import { Tile } from "../Tile/Tile";
import "./TileMatrix.css";

export const TileMatrix: FC = () => {
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
  
  const copyTiles = () => {
    let valueToCopy = "";

    tileMap.forEach((row) => {
      row.forEach((tile) => {
        if (valueToCopy != "") {
          valueToCopy = `${valueToCopy}, `;
        }
    
        valueToCopy = `${valueToCopy}${Number(tile)}`;
      })
    })

    navigator.clipboard.writeText(valueToCopy);
  }

  return (
    <div>
      <button onClick={() => clearTiles()}>clear</button>
      <button onClick={() => copyTiles()}>copy</button>
      <div className="tile-matrix">
        {tileMap.map((row, x) => (
          row.map((_, y) => (
            <Tile key={x + y} x={x} y={y} updateTile={updateTileInMatrix} />
          ))
        ))}
      </div>
    </div>
  )
}
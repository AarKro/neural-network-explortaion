import { FC } from "react";
import { isMouseDownAtom, Position, useTileById } from "../../jotaiStore";
import { useAtom } from "jotai";
import "./Tile.css";

type Props = {
  x: number,
  y: number,
  updateTile: (pos: Position, state: boolean) => void;
}

export const Tile: FC<Props> = ({ x, y, updateTile }) => {
  const tile = useTileById(x, y);
  const [ isMouseDown ] = useAtom(isMouseDownAtom);

  const handleMouseMove = () => {
    if (isMouseDown) {
      updateTile([ x, y ], true);
    }
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    updateTile([ x, y ], true);
  }

  return (
    <div className="tile" style={{backgroundColor: tile ? "black": "white"}} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown}>

    </div>
  )
}
import { FC } from "react";
import Cell from "../Cell/Cell";

type BattlefieldProps = {
  matrix: number[][];
  onFire: (x: number, y: number) => void;
};

const Battlefield: FC<BattlefieldProps> = ({ matrix, onFire }) => {
  return (
    <div>
      {matrix.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.map((value, columnIndex) => (
            <Cell
              key={`${lineIndex}${columnIndex}`}
              value={value}
              y={lineIndex}
              x={columnIndex}
              handleClick={onFire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Battlefield;

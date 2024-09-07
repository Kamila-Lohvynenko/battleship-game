import { FC } from "react";
import Cell from "../Cell/Cell";
import {
  CHECKED_SHIP,
  CHECKED_WATER,
  SHIP,
  WATER,
} from "../../hooks/cellState";

import css from "./Battlefield.module.css";

import { TiWavesOutline } from "react-icons/ti";
import { IconType } from "react-icons";
import { ImFire } from "react-icons/im";

type BattlefieldProps = {
  matrix: number[][];
  onFire: (x: number, y: number) => void;
};

type a = {
  [key: number]: string | IconType;
};

const cellStateMap: a = {
  [WATER]: "",
  [SHIP]: "",
  [CHECKED_WATER]: (
    <TiWavesOutline className={css.waves} size={32} />
  ) as unknown as IconType,
  [CHECKED_SHIP]: (
    <ImFire className={css.fire} size={32} />
  ) as unknown as IconType,
};

const Battlefield: FC<BattlefieldProps> = ({ matrix, onFire }) => {
  return (
    <div>
      {matrix.map((line, lineIndex) => (
        <div className={css.line} key={lineIndex}>
          {line.map((value, columnIndex) => (
            <Cell
              key={`${lineIndex}${columnIndex}`}
              value={cellStateMap[value]}
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

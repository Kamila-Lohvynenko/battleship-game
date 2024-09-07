import { FC, ReactNode } from "react";
import css from "./Cell.module.css";
import { IconType } from "react-icons";

type CellProps = {
  value: string | IconType;
  handleClick: (x: number, y: number) => void;
  x: number;
  y: number;
};

const Cell: FC<CellProps> = ({ value, handleClick, x, y }) => {
  return (
    <button
      className={css.cell}
      type="button"
      onClick={() => handleClick(x, y)}
    >
      {value as ReactNode}
    </button>
  );
};

export default Cell;

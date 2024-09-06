import { FC } from "react";

type CellProps = {
  value: number;
  handleClick: (x: number, y: number) => void;
  x: number;
  y: number;
};

const Cell: FC<CellProps> = ({ value, handleClick, x, y }) => {
  return (
    <button className="cell" type="button" onClick={() => handleClick(x, y)}>
      {value}
    </button>
  );
};

export default Cell;

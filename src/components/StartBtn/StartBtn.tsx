import { FC } from "react";
import css from "./StartBtn.module.css";

type StartBtnProps = {
  start: () => void;
  start2: () => void;
};

const StartBtn: FC<StartBtnProps> = ({ start, start2 }) => {
  const handleClick = () => {
    start();
    start2();
  };
  return (
    <button className={css.start} type="button" onClick={handleClick}>
      Start again
    </button>
  );
};

export default StartBtn;

import { FC } from "react";
import css from "./Counter.module.css";

type CounterProps = {
  turn: number;
};

const Counter: FC<CounterProps> = ({ turn }) => {
  return <div className={css.counter}>{turn}</div>;
};

export default Counter;

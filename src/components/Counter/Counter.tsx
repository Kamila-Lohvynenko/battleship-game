import { FC } from "react";

type CounterProps = {
  turn: number;
};

const Counter: FC<CounterProps> = ({ turn }) => {
  return <div>Counter {turn}</div>;
};

export default Counter;

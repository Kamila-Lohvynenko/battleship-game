import { FC } from "react";

type StartBtnProps = {
  start: () => void;
};

const StartBtn: FC<StartBtnProps> = ({ start }) => {
  return (
    <button type="button" onClick={start}>
      Start again
    </button>
  );
};

export default StartBtn;

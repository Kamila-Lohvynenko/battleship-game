import { FC } from "react";
import css from "./StartBtn.module.css";
import Swal from "sweetalert2";

type StartBtnProps = {
  start: () => void;
};

const StartBtn: FC<StartBtnProps> = ({ start }) => {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, start a new game!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          start();
          Swal.fire({
            title: "Started a new game!",
            text: "Fight!!!",
            icon: "success",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "The game continues!",
          text: "Fight!!!",
          icon: "success",
        });
      });
  };
  return (
    <button className={css.start} type="button" onClick={handleClick}>
      Start again
    </button>
  );
};

export default StartBtn;

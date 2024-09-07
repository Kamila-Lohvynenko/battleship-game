import css from "./Header.module.css";
import { GiBattleship } from "react-icons/gi";
import { SiFireship } from "react-icons/si";

const Header = () => {
  return (
    <div className={css.header}>
      <GiBattleship className={css.ship} />
      <h1 className={css.title}>Battlefield</h1>
      <SiFireship className={css.fire} />
    </div>
  );
};

export default Header;

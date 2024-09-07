import css from "./PlayerField.module.css";

const PlayerField = ({ children }: { children: any }) => {
  return <div className={css.player}>{children}</div>;
};

export default PlayerField;

import { useState } from "react";
import { createArray } from "../utils/array";
import { createWarShip } from "../utils/createWarShip";
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "./cellState";

type StateType = {
  turn: number;
  matrix: number[][];
  won: boolean;
};

const MAX_MATRIX_LENGTH = 8;

const createEmptyBattlefield = () =>
  createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0));

const createBattlefield = () => {
  const emptyBattlefield = createEmptyBattlefield();
  const newWarShip = createWarShip(4, MAX_MATRIX_LENGTH);

  newWarShip.forEach(({ x, y }) => {
    emptyBattlefield[y][x] = SHIP;
  });

  return emptyBattlefield;
};

export const useGameState = () => {
  const [state, setState] = useState<StateType>({
    turn: 0,
    matrix: createBattlefield(),
    won: false,
  });

  const start = () => {
    setState({
      turn: 0,
      matrix: createBattlefield(),
      won: false,
    });
  };
  const fire = (x: number, y: number) => {
    const cell = state.matrix[y][x];
    if (cell === CHECKED_WATER || cell === CHECKED_SHIP) {
      return;
    }
    const newState = cell === WATER ? CHECKED_WATER : CHECKED_SHIP;
    state.matrix[y][x] = newState;
    const won = state.matrix.every((line) =>
      line.every((value) => value !== SHIP)
    );
    setState({ ...state, turn: state.turn + 1, won });
  };
  const { turn, matrix, won } = state;

  return { turn, start, matrix, fire, won };
};

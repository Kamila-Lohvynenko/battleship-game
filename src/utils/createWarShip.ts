import { createArray } from "./array";
import { random } from "./random";

const createHorizontalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - length - 1;
  const maxY = maxSize - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY, x: headX + i };
  });
};

type Point = {
  x: number;
  y: number;
};

const createVerticalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - length - 1;

  const headX = random(0, maxX);
  const headY = random(0, maxY);

  return createArray(length, (i) => {
    return { y: headY + i, x: headX };
  });
};

export const createWarShip = (shipLength: number, maxSize: number): Point[] => {
  const postion = random(0, 2) % 2 === 0 ? "horizontal" : "vertical";
  return postion === "horizontal"
    ? createHorizontalWarship(shipLength, maxSize)
    : createVerticalWarship(shipLength, maxSize);
};

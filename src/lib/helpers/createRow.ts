import { nanoid } from "nanoid";
import { IRow } from "../types/interfaces";

const createRow = (): IRow => ({
  id: nanoid(),
  sign: "+",
  value: 0,
  isEnabled: true,
});

export default createRow;

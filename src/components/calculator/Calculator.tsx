import React, { useState, useEffect } from "react";
import Row from "@/components/row/Row";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";

export interface IRow {
  id: string;
  sign: "+" | "-";
  value: number;
  isEnabled: boolean;
}

const Calculator: React.FC = () => {
  const [rows, setRows] = useState<IRow[]>([
    { id: nanoid(), sign: "+", value: 0, isEnabled: true },
    { id: nanoid(), sign: "+", value: 0, isEnabled: true },
    { id: nanoid(), sign: "+", value: 0, isEnabled: true },
  ]);

  const calculateResult = (): number => {
    console.log("result calculated");
    return rows
      .filter((row) => row.isEnabled)
      .reduce(
        (acc, row) => (row.sign === "+" ? acc + row.value : acc - row.value),
        0,
      );
  };

  const addRow = () => {
    setRows([...rows, { id: nanoid(), sign: "+", value: 0, isEnabled: true }]);
  };

  const deleteRow = (id: string) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  const toggleRow = (id: string) => {
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, isEnabled: !row.isEnabled } : row,
    );
    setRows(newRows);
  };

  const changeValue = (id: string, value: string) => {
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, value: parseInt(value, 10) || 0 } : row,
    );
    setRows(newRows);
  };

  const changeSign = (id: string, newSign: "+" | "-") => {
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, sign: newSign } : row,
    );
    setRows(newRows);
  };

  useEffect(() => console.log("calc render"));

  return (
    <div className="flex flex-col gap-4 w-[80%] pt-10 pb-10">
      <Button className="w-[80px]" onClick={() => addRow()}>
        Add row
      </Button>
      <ul className="flex flex-col gap-2">
        {rows.map((row) => (
          <li className="flex gap-2" key={row.id}>
            <Row
              row={row}
              id={row.id}
              handleSignChange={changeSign}
              handleValueChange={changeValue}
              handleToggleRow={toggleRow}
              handleDeleteRow={deleteRow}
            />
          </li>
        ))}
      </ul>
      <div>Result: {calculateResult()}</div>
    </div>
  );
};

export default Calculator;

import { useState } from "react";
import { IRow } from "@/lib/types/interfaces";
import { MAX_SAFE_INTEGER } from "@/lib/consts";
import createRow from "@/lib/helpers/createRow";

const useCalculator = (initialRowCount: number) => {
  const [rows, setRows] = useState<IRow[]>(
    Array.from({ length: initialRowCount }, () => createRow()),
  );

  // Alternative approach is to use BigInt which can represent integers of arbitrary precision
  // instead of limiting result

  /*const calculateResult = () => {
    return rows
      .filter((row) => row.isEnabled)
      .reduce(
        (acc, row) =>
          row.sign === "+" ? acc + BigInt(row.value) : acc - BigInt(row.value),
        BigInt(0),
      );
  };*/

  const calculateResult = () => {
    const result = rows
      .filter((row) => row.isEnabled)
      .reduce(
        (acc, row) => (row.sign === "+" ? acc + row.value : acc - row.value),
        0,
      );

    return Math.min(Math.max(result, -MAX_SAFE_INTEGER), MAX_SAFE_INTEGER);
  };

  const addRow = () => {
    setRows((prevRows) => [...prevRows, createRow()]);
  };

  const deleteRow = (id: string) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const toggleRow = (id: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isEnabled: !row.isEnabled } : row,
      ),
    );
  };

  const changeValue = (id: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, value: parseInt(value, 10) || 0 } : row,
      ),
    );
  };

  const changeSign = (id: string, newSign: "+" | "-") => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, sign: newSign } : row)),
    );
  };

  /*useEffect(() => {
    // Additional side effects or calculations can be placed here
  }, [rows]);*/

  return {
    rows,
    result: calculateResult(),
    addRow,
    deleteRow,
    toggleRow,
    changeValue,
    changeSign,
  };
};

export default useCalculator;

import React from "react";
import { Button } from "@/components/ui/button";
import Row from "@/components/row/Row";
import useCalculator from "@/hooks/useCalculator";
import addThousandSeparators from "@/lib/helpers/addThousandSeparators";
import { MAX_SAFE_INTEGER } from "@/lib/consts";

const Calculator: React.FC = () => {
  const {
    rows,
    result,
    addRow,
    deleteRow,
    toggleRow,
    changeValue,
    changeSign,
  } = useCalculator(3);

  const formattedResult = addThousandSeparators(result.toString());
  const isSafe = result < MAX_SAFE_INTEGER;

  return (
    <div className="flex flex-col gap-4 w-[80%] pt-10 pb-10">
      <Button className="w-[80px]" onClick={() => addRow()}>
        Add row
      </Button>
      <ul className="flex flex-col gap-4 md:gap-2">
        {rows.map((row) => (
          <li className="flex flex-col gap-2 md:flex-row" key={row.id}>
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
      <p className={`flex ${!isSafe && "text-destructive dark:text-red-600"}`}>
        Result: {formattedResult}
      </p>
      <span className="min-h-[72px] text-left md:min-h-[24px] text-destructive dark:text-red-600">
        {!isSafe &&
          "Sorry, current result is exceeding the boundaries of safe integers!"}
      </span>
    </div>
  );
};

export default Calculator;

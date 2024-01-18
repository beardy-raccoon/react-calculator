import React, { useEffect } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { IRow } from "../calculator/Calculator";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

interface IRowProps {
  row: IRow;
  id: string;
  handleSignChange: (id: string, value: "+" | "-") => void;
  handleValueChange: (id: string, value: string) => void;
  handleToggleRow: (id: string) => void;
  handleDeleteRow: (id: string) => void;
}

const Row: React.FC<IRowProps> = ({
  row,
  handleSignChange,
  handleValueChange,
  handleToggleRow,
  handleDeleteRow,
}) => {
  useEffect(() => console.log("row render"));

  return (
    <>
      <Select
        defaultValue="+"
        disabled={!row?.isEnabled}
        onValueChange={(value: "+" | "-") => handleSignChange(row.id, value)}
      >
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Select operation" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="+">+</SelectItem>
          <SelectItem value="-">-</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="number"
        placeholder={row?.value.toString()}
        onChange={(e) => handleValueChange(row.id, e.target.value)}
        disabled={!row?.isEnabled}
      />
      <Button className="min-w-[80px]" onClick={() => handleDeleteRow(row.id)}>
        Delete
      </Button>
      <div className="flex flex-col items-center space-y-1 min-w-[80px]">
        <Switch
          id="row-switcher"
          checked={row.isEnabled}
          title={row.isEnabled ? "Disable row" : "Enable row"}
          onClick={() => handleToggleRow(row.id)}
        />
        <Label className="flex" htmlFor="row-switcher">
          {row.isEnabled ? "Disable row" : "Enable row"}
        </Label>
      </div>
    </>
  );
};

export default Row;

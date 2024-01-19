export interface IRow {
  id: string;
  sign: "+" | "-";
  value: number;
  isEnabled: boolean;
}

export interface IRowProps {
  row: IRow;
  id: string;
  handleSignChange: (id: string, value: "+" | "-") => void;
  handleValueChange: (id: string, value: string) => void;
  handleToggleRow: (id: string) => void;
  handleDeleteRow: (id: string) => void;
}

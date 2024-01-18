import React, { useEffect } from "react";
import { UserRound } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";

const Header: React.FC = () => {
  useEffect(() => console.log("header render"));
  return (
    <header className="flex items-center justify-between grow-0">
      <UserRound />
      <div className="flex items-center gap-x-2">
        <span>Change theme</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

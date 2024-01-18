import React, { useEffect } from "react";
import logoBlue from "@/assets/logo_coolshop_72_blue.png";
import logoWhite from "@/assets/logo_coolshop_72_white.png";
import LinkedInLogo from "@/components/ui/linkedInLogo";
import GitHubLogo from "@/components/ui/gitHubLogo";
import { useTheme } from "@/components/theme-provider/ThemeProvider";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  useEffect(() => console.log("fo0ter render"));
  return (
    <footer className="flex justify-between grow-0">
      <div className="flex gap-4">
        <a
          className="transition opacity-100 duration-300 ease-linear hover:opacity-75 hover:duration-150"
          href="https://www.linkedin.com/in/vladmeshcherinov-2bb63a84/"
          target="_blank"
        >
          <LinkedInLogo />
        </a>
        <a
          className="transition opacity-100 duration-300 ease-linear hover:opacity-75 hover:duration-150"
          href="https://github.com/beardy-raccoon"
          target="_blank"
        >
          <GitHubLogo />
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span>Made for</span>
        <img
          className="h-[30px]"
          src={theme === "light" ? logoBlue : logoWhite}
        />
        <span>by BeardyRaccoon</span>
      </div>
    </footer>
  );
};

export default Footer;

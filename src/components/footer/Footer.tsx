import React from "react";
import logoBlue from "@/assets/logo_coolshop_72_blue.png";
import logoWhite from "@/assets/logo_coolshop_72_white.png";
import LinkedInLogo from "@/components/ui/linkedInLogo";
import GitHubLogo from "@/components/ui/gitHubLogo";
import { useTheme } from "@/components/theme-provider/ThemeProvider";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  return (
    <footer className="flex grow-0 flex-col items-center gap-y-4 md:flex-row md:justify-between">
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
      <div className="flex flex-col items-center gap-4 md:flex-row">
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

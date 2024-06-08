"use client";
import { FiSun, FiMoon } from "react-icons/fi";

import { useColorMode } from "@chakra-ui/react";

export function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="cursor-pointer flex items-center" onClick={toggleColorMode}>
      {colorMode === "light" ? <FiMoon /> : <FiSun />}
    </div>
  );
}

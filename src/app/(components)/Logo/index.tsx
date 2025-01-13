"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = ({
  width = 140,
  height = 39,
}: {
  width: number;
  height: number;
}) => {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark" ? "/gamezop-logo-dark.avif" : "/gamezop-logo-blue.avif"
      }
      alt="gamezop-logo"
      width={width}
      height={height}
      className="cursor-pointer"
      suppressHydrationWarning
    />
  );
};

export default Logo;

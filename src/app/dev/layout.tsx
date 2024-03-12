"use client"

import {DevLayoutMain} from "@/app/dev/layoutStyle";
import React from "react";

const CustomPage = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DevLayoutMain>
      {children}
    </DevLayoutMain>
  );
};

export default CustomPage;
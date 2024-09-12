import React from "react";
import classes from "./Tab.module.css";
import { TabProps } from "../types";

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  // Combine classes dynamically according to conditions
  const tabClass = `${classes.tab} ${isActive ? classes.active : ""}`;

  return (
    <span className={tabClass} onClick={onClick}>
      {label}
    </span>
  );
};

export default Tab;

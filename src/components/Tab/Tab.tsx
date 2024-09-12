import React from "react";
import classes from "./Tab.module.css";
import { TabProps } from "../types";

const Tab: React.FC<TabProps> = ({ label, isActive, onClick, disabled }) => {
  // Combine classes dynamically according to conditions
  const tabClass = `${classes.tab} ${isActive ? classes.active : ""} ${
    disabled ? classes.disabled : ""
  }`;

  return (
    <span className={tabClass} onClick={disabled ? undefined : onClick}>
      {label}
    </span>
  );
};

export default Tab;

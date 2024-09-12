import React from "react";
import classes from "./Tabs.module.css";
import Tab from "../Tab/Tab";
import { TabsProps } from "../types";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.label}
          isActive={tab.isActive}
          onClick={tab.onClick}
        />
      ))}
    </div>
  );
};

export default Tabs;

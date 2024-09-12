import React from "react";
import classes from "./TabsBlock.module.css";
import Tabs from "../Tabs/Tabs";
import { TabsBlockProps } from "../types";

const TabsBlock: React.FC<TabsBlockProps> = ({ options }) => {
  return (
    <div className={classes.tabsBlock}>
      {options.map((optionSet, index) => (
        <div key={index} className={classes.tabsContainer}>
          <Tabs tabs={optionSet} />
        </div>
      ))}
    </div>
  );
};

export default TabsBlock;

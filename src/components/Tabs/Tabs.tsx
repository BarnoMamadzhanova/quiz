import React, { useState } from "react";
import classes from "./Tabs.module.css";
import Tab from "../Tab/Tab";
import { TabsProps } from "../types";

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.label}
          isActive={activeTab === tab.label}
          onClick={() => setActiveTab(tab.label)}
        />
      ))}
    </div>
  );
};

export default Tabs;

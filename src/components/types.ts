// types.ts

// Define the TabProps interface for Tab
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Define the TabsProps interface for Tabs
export interface TabsProps {
  tabs: TabProps[];
}

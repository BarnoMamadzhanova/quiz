// types.ts

// Define the TabProps interface for Tab
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Define the TabsProps interface for Tabs
export interface TabsProps {
  tabs: { label: string }[];
}

// Define the TabsBlockProps interface for TabsBlock
export interface TabsBlockProps {
  options: { label: string }[][];
}

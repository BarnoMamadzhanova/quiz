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

// Define the TabsBlockProps interface for TabsBlock
export interface TabsBlockProps {
  options: TabProps[][];
}

// Define the QuestionData interface for QuestionBlock
export interface QuestionData {
  question: string;
  options: string[][];
  correctAnswers: string[];
}

// Define the QuestionBlockProps interface for QuestionBlock
export interface QuestionBlockProps {
  onCorrectnessChange: (percentage: number) => void;
}

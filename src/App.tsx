import React, { useState } from "react";
import "./styles/App.css";
import QuestionBlock from "./components/QuestionBlock/QuestionBlock";

const App: React.FC = () => {
  const [background, setBackground] = useState<string>(
    "linear-gradient(180deg, #f6b868 0%, #ee6b2d 100%)"
  );

  // Function to define the background style based on correctness percentage
  const determineBackground = (percentage: number) => {
    if (percentage >= 80) {
      return "linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)";
    } else if (percentage >= 60) {
      return "linear-gradient(180deg, #a4d3a2 0%, #76E0C2 100%)";
    } else if (percentage >= 40) {
      return "linear-gradient(180deg, #f9e46f 0%, #a4d3a2 100%)";
    } else if (percentage >= 20) {
      return "linear-gradient(180deg, #f9e46f 0%, #f6b868 100%)";
    } else {
      return "linear-gradient(180deg, #f6b868 0%, #ee6b2d 100%)";
    }
  };

  // Handle correctness percentage change
  const handleCorrectnessChange = (percentage: number) => {
    const backgroundStyle = determineBackground(percentage);
    setBackground(backgroundStyle);
  };

  return (
    <div style={{ background }} className="App">
      <QuestionBlock onCorrectnessChange={handleCorrectnessChange} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import classes from "./QuestionBlock.module.css";
import TabsBlock from "../TabsBlock/TabsBlock";
import { QuestionData } from "../types";

const QuestionBlock: React.FC = () => {
  const [data, setData] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<string[]>([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  // Fetch data from mock.json file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock.json");
        const json = await response.json();
        setData(json.questions);
        setUserSelections(
          new Array(json.questions[0].options.length).fill(null)
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Handle tab selection
  const handleTabSelection = (tabIndex: number, selectedLabel: string) => {
    console.log("Tab clicked:", selectedLabel);

    const updatedSelections = [...userSelections];
    updatedSelections[tabIndex] = selectedLabel;
    setUserSelections(updatedSelections);

    // Check if the user selections match the correct answers
    const correctAnswers = data[currentQuestionIndex].correctAnswers;
    const isCorrect = updatedSelections.every(
      (selection, index) => selection === correctAnswers[index]
    );

    console.log(
      selectedLabel === correctAnswers[tabIndex]
        ? `${selectedLabel} is correct`
        : `${selectedLabel} is incorrect`
    );

    setIsAnswerCorrect(isCorrect);
  };

  // Move to the next question
  // const handleNextQuestion = () => {
  //   const nextIndex = currentQuestionIndex + 1;
  //   if (nextIndex < data.length) {
  //     setCurrentQuestionIndex(nextIndex);
  //     setUserSelections(new Array(data[nextIndex].options.length).fill(null));
  //     setIsAnswerCorrect(false);
  //   } else {
  //     alert("You've completed all the questions!");
  //   }
  // };

  if (!data.length || !data[currentQuestionIndex]) return <div>Loading...</div>;

  const currentQuestion = data[currentQuestionIndex];

  return (
    <div className={classes.questionBlock}>
      <h2>{currentQuestion.question}</h2>
      <TabsBlock
        options={currentQuestion.options.map((optionSet, index) =>
          optionSet.map((label) => ({
            label,
            isActive: userSelections[index] === label,
            onClick: () => handleTabSelection(index, label),
          }))
        )}
      />
      <h2>The answer is {isAnswerCorrect ? "correct" : "incorrect"}</h2>
      {/* {isAnswerCorrect && (
        <button className={classes.nextButton} onClick={handleNextQuestion}>
          Next Question
        </button>
      )} */}
    </div>
  );
};

export default QuestionBlock;

import React, { useState, useEffect } from "react";
import classes from "./QuestionBlock.module.css";
import TabsBlock from "../TabsBlock/TabsBlock";
import { QuestionData } from "../types";

const QuestionBlock: React.FC = () => {
  const [data, setData] = useState<QuestionData | null>(null);

  // Fetch data from mock.json file
  useEffect(() => {
    fetch("/mock.json")
      .then((response) => response.json())
      .then((json) => setData(json.questions[0]))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className={classes.questionBlock}>
      <h2>{data.question}</h2>
      <TabsBlock
        options={data.options.map((optionSet) =>
          optionSet.map((label) => ({ label }))
        )}
      />
      <h2>The answer is</h2>
    </div>
  );
};

export default QuestionBlock;

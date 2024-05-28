import Result from "./Result";
import Questions from "./Questions";
import axios from "../axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTest, selectQuestions } from "../../redux/slices/lessons";

function BeginTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const question = questions[step];

  useEffect(() => {
    dispatch(fetchTest());
    setIsLoading(false);
  }, [dispatch]);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.answer) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className=" bg- flex justify-center items-center p-36 pt-44 h-screen">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {step !== questions.length ? (
            <Questions
              step={step}
              question={question}
              onClickVariant={onClickVariant}
            />
          ) : (
            <Result correct={correct} length={questions.length} />
          )}
        </>
      )}
    </div>
  );
}

export default BeginTest;

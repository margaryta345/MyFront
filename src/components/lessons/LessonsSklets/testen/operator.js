import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import axios from "../../../axios";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import { fetchDoneSend } from "../../../../redux/slices/auth";

const Test1 = ({ module, name }) => {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const [but, setBut] = useState(false);

  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 29 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [but]);

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [unselectedQuestions, setUnselectedQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`/test1`)
      .then((res) => {
        setQuestions(res.data);
        setSelectedOptions(new Array(res.data.length).fill(""));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOptionSelect = (index, option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleShowScore = () => {
    setShowScore(true);
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].options[questions[index].answer]) {
        calculatedScore++;
      }
    });
    return calculatedScore;
  };

  const onButtonClick = async () => {
    const unselected = selectedOptions
      .map((option, index) => (option === "" ? index : -1))
      .filter((index) => index !== -1);
    setUnselectedQuestions(unselected);

    if (unselected.length > 0) {
      alert("Дай відповідь на всі питання!");
      return;
    }

    const calculatedScore = calculatePercentage();
    setScore(calculatedScore);
    const data = await dispatch(
      fetchDoneSend({ index: 29, value: calculatedScore })
    );
    console.log(data.payload);
    setDone(true);
    handleShowScore();
    setBut(true);
  };

  const calculatePercentage = () => {
    if (questions.length === 0) return 0;
    const percentage = (calculateScore() / questions.length) * 100;
    return percentage.toFixed(2);
  };

  const resetTest = () => {
    setDone(false);
    setShowScore(false);
    setSelectedOptions(new Array(questions.length).fill(""));
    setBut(false);
    setUnselectedQuestions([]);
  };

  return (
    <div>
      <div className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-600 items-center mt-6 flex">
        <Link className="text-red-600 mr-3" to={`/lessons`}>
          <AiOutlineHome className="w-5 h-5" />
        </Link>
        <MdArrowForwardIos className="w-4 h-4 mr-3" />
        <Link className="text-red-600 mr-3" to={`/lessons/${id}`}>
          {module}
        </Link>
        <MdArrowForwardIos className="w-4 h-4" />
        <p className="ml-2">{name}</p>
      </div>
      <p className=" text-3xl mb-10 mt-10 font-semibold">{name}</p>
      <div>
        {!done && !showScore && questions.length > 0 ? (
          <div>
            {questions.map((question, index) => (
              <div
                className={`mt-12 ${
                  unselectedQuestions.includes(index) ? "text-red-600 " : ""
                }`}
                key={index}
              >
                <h3 className="mb-3 font-semibold">
                  {index + 1}. {question.title}
                </h3>
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5"
                          value={option}
                          checked={selectedOptions[index] === option}
                          onChange={() => handleOptionSelect(index, option)}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex">
            <div className="mr-[540px]">
              <h2 className="font-semibold text-md p-2 text-lg">
                Надішліть своє завдання
              </h2>
            </div>
            <div className="flex items-center text-lg">
              <button
                onClick={resetTest}
                className="text-blue-800 font-semibold hover:bg-blue-200 hover:text-blue-900 hover:rounded-sm p-2 w-auto"
              >
                Спробувати знову
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8">
        {!done ? (
          <button
            onClick={() => onButtonClick()}
            className="lg:p-4 md:p-4 sm:p-2 p-2 lg:mr-4 bg-red-500 lg:text-xl md:text-xl sm:text-sm text-sm text-white font-semibold rounded-md"
          >
            Відправити
          </button>
        ) : (
          <div className="flex border-t border-b pt-8 pb-8">
            <div className="pr-80 border-r">
              <div className="flex items-baseline justify-center">
                {done > 80 ? (
                  <div className="bg-green-600 rounded-xl mr-1">
                    <MdDone className="text-white text-xl" />
                  </div>
                ) : (
                  <div className="border-2 border-red-600 rounded-xl mr-1">
                    <RxCross2 className="text-red-600 text-xl" />
                  </div>
                )}
                <p className="w-[150px] text-lg font-semibold">
                  Отримати оцінку
                </p>
              </div>
              <h2 className="text-gray-500 mt-2 text-md flex">
                <p className="font-semibold mr-1">Пройти</p> 80% або вище
              </h2>
            </div>
            <div className="flex items-center pl-10">
              <div className="bold mr-10">
                <h2 className="font-semibold text-lg">Ваш оцінка:</h2>
                <h2
                  className={`font-semibold text-xl ${
                    done > 80 ? `text-green-600` : `text-red-600`
                  }`}
                >
                  {calculatePercentage()} з 100%
                </h2>
              </div>
              <div>
                <Link
                  to={`/lessons/${id}/662ff9b387ab0d1def499520`}
                  className="p-2 bg-red-500 text-[16px] text-white font-semibold rounded-sm hover:bg-red-600"
                >
                  Перейти до наступного елементу
                </Link>
                <p className="pt-2 text-center text-sm text-gray-500">
                  Зберігається найбільший бал-{done}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test1;

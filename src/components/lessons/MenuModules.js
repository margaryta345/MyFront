import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessons";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import axios from "../axios";
const MenuModules = ({ done }) => {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state.lessons);
  const isLessonsLoading = lessons.status === "loading";
  const [foundLesson, setFoundLesson] = useState(null);
  const { id, lessonId } = useParams();
  useEffect(() => {
    dispatch(fetchLessons());
  }, []);

  console.log(lessonId);
  useEffect(() => {
    if (!isLessonsLoading) {
      const lesson = lessons.items.find((lesson) => lesson._id === id);
      setFoundLesson(lesson);
    }
  }, []);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-h-screen ">
      <div className=" lg:pl-10 md:pl-8 sm:pl-6 pl-4  flex overflow-y-auto overflow-x-hidden max-h-[600px]">
        <div className="lg:pr-10 md:pr-8 sm:pr-6 pr-4">
          <div
            className={`mt-4 lg:text-lg md:text-lg sm:text-base text-sm font-semibold text-gray-700 ${
              isHovered ? "border border-red-200 rounded-md" : ""
            }`}
          >
            <div className="flex pt-2 pb-2 pl-2 rounded-sm items-center hover:bg-red-100">
              <div
                className="flex items-center w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span onClick={toggleCollapse}>
                  {isCollapsed ? (
                    <IoIosArrowDown className="mt-1 mr-2" />
                  ) : (
                    <MdArrowForwardIos className="mt-1 mr-2" />
                  )}
                </span>
                <p className="lg:text-lg md:text-base sm:text-sm text-sm pr-8">
                  Завдання модулю
                </p>
              </div>
            </div>
            {isCollapsed ? (
              <div className="mt-2">
                {!isLessonsLoading &&
                  foundLesson &&
                  foundLesson.lessons &&
                  foundLesson.lessons.map((item, i) =>
                    item.lesson.map((lesson, index) => (
                      <div
                        key={lesson.lessonId || index}
                        className={`flex p-2 pl-4 items-center mb-1 font-normal text-sm ${
                          lessonId === lesson.lessonId
                            ? "border-l-4 flex border-l-red-600 p-2 items-center w-full h-full"
                            : " hover:bg-gray-100 "
                        }`}
                      >
                        <div>
                          {(done["0"] &&
                            lesson.topic ===
                              "Короткий опис мови програмування Python") ||
                          (done["1"] &&
                            lesson.topic ===
                              "Завантаження Python та середовища розробки") ||
                          (done["2"] &&
                            lesson.topic ===
                              "Ключові слова та ідентифікатори в Python") ||
                          (done["3"] && lesson.topic === "Типи данних") ||
                          (done["19"] &&
                            lesson.topic ===
                              "Корисні методи для роботи з рядками") ||
                          (done["4"] &&
                            lesson.topic === "Ввід та вивід даних у Python") ||
                          (done["5"] &&
                            lesson.topic === "Оператори в Python") ||
                          (done["6"] &&
                            lesson.topic === "Умовний оператор if...else") ||
                          (done["7"] && lesson.topic === "Цикл for в Python") ||
                          (done["8"] &&
                            lesson.topic === "Цикл while в Python ") ||
                          (done["9"] &&
                            lesson.topic ===
                              "Оператори break та continue в Python") ||
                          (done["10"] && lesson.topic === "Функції в Python") ||
                          (done["11"] &&
                            lesson.topic ===
                              "Параметри та аргументи функції в Python") ||
                          (done["12"] &&
                            lesson.topic === "Рекурсія в Python") ||
                          (done["13"] &&
                            lesson.topic ===
                              "Область видимості змінних в Python") ||
                          (done["14"] &&
                            lesson.topic === "Ключове слово global в Python") ||
                          (done["15"] && lesson.topic === "Списки") ||
                          (done["16"] && lesson.topic === "Словники") ||
                          (done["17"] && lesson.topic === "Множини") ||
                          (done["18"] && lesson.topic === "Кортежі") ||
                          (done["20"] &&
                            lesson.topic === "Робота з файлами в Python") ||
                          (done["21"] &&
                            lesson.topic === "Робота з каталогами в Python") ||
                          (done["22"] && lesson.topic === "Винятки в Python") ||
                          (done["23"] &&
                            lesson.topic === "Обробка винятків в Python") ||
                          (done["24"] && lesson.topic === "Модулі в Python") ||
                          (done["25"] && lesson.topic === "Пакети в Python") ||
                          (done["26"] && lesson.topic === "Класи та об'єкти") ||
                          (done["27"] &&
                            lesson.topic ===
                              "Конструктори та деструктори в Python") ||
                          (done["28"] &&
                            lesson.topic ===
                              "Інкапсуляція та поліморфізм, наслідування") ||
                          (done["29"] > 80 &&
                            lesson.topic ===
                              "Тест ввід та вивід даних у Python , змінні, типи даних") ||
                          (done["30"] > 80 &&
                            lesson.topic === "Тест використання циклів") ||
                          (done["31"] > 80 &&
                            lesson.topic === "Тест функції в Python") ||
                          (done["32"] > 80 &&
                            lesson.topic ===
                              "Тест списки, кортежі та словники ") ||
                          (done["33"] > 80 &&
                            lesson.topic ===
                              "Теснування операціями з рядками та файлами ") ||
                          (done["34"] > 80 &&
                            lesson.topic ===
                              "Теснування по модулям та пакетам") ||
                          (done["35"] > 80 &&
                            lesson.topic === "Теснування по Основам ООП") ||
                          (done["40"] > 80 &&
                            lesson.topic ===
                              "Задача типи даних,оператори,методи рядків") ||
                          (done["41"] > 80 &&
                            lesson.topic === "Задача оператори та цикли") ||
                          (done["42"] > 80 &&
                            lesson.topic ===
                              "Задача функції та рекурсія в Python") ||
                          (done["43"] > 80 &&
                            lesson.topic ===
                              "Задача списки, кортежі та словники") ||
                          (done["44"] > 80 &&
                            lesson.topic ===
                              "Задача класи,констуктори, методи ") ? (
                            <FaChevronCircleDown
                              size={15}
                              className="text-green-800 mr-2 ml-2"
                            />
                          ) : (
                            <FaCircle
                              size={15}
                              className="text-gray-200 mr-2 ml-2"
                            />
                          )}
                        </div>
                        <div>
                          <Link
                            className="lg:text-sm md:text-sm sm:text-sm text-xs"
                            to={`/lessons/${id}/${lesson.lessonId}`}
                          >
                            {lesson.topic}
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuModules;

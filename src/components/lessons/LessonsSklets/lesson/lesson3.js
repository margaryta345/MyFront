import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { IoIosDoneAll } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../../axios";
import { FaArrowRight } from "react-icons/fa";
import { fetchDoneSend } from "../../../../redux/slices/auth";
function Lesson3({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 2 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 2, value: true }));
    console.log(data.payload);
    setDone(true);
  };
  return (
    <div className="">
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

      <div className="mt-6">
        <p className=" text-3xl mb-10 font-semibold">{name}</p>

        <p>
          <span className="text-red-500 font-semibold">Ключові слова</span> — це
          зарезервовані слова, що використовуються в Python та мають особливе
          значення для компілятора. Ключові слова не можна використовувати як
          імена змінних, функцій та будь-яких інших ідентифікаторів. Вони
          використовуються для визначення синтаксису та структури мови Python.
          Усі ключові слова, крім True, False та None, пишуться малими літерами
          (нижній регістр).
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less3_1.png"
          />
          <p className="mt-2 font-semibold">
            Список всіх ключових слів у Python
          </p>
        </div>

        <div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Ідентифікатори в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold">Ідентифікатори</span> —
            це імена змінних, класів, методів тощо. Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p>language = 'Python'</p>
            </code>
          </div>
        </div>
        <p>
          Тут <span className="bg-slate-100">language</span> — це змінна
          (ідентифікатор), що містить значення
          <span className="bg-slate-100">'Python'</span>. Ми не можемо
          використовувати ключові слова як імена змінних, оскільки це
          зарезервовані слова, вбудовані в Python. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p> continue = 'Python'</p>
          </code>
        </div>

        <div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Правила іменування ідентифікаторів
          </p>
          <ul>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p> Ключові слова не можуть бути ідентифікаторами.</p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>Ідентифікатори чутливі до регістру.</p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>
                Ідентифікатори можуть складатися з літер та цифр. Однак
                ідентифікатор повинен починатися або з літери, або з _ (нижнє
                підкреслення). Ідентифікатор не може починатися з цифри.
              </p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>Прийнято починати ідентифікатор з літери, а не з _.</p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p> Пробіли не допускаються.</p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>
                Не можна використовувати спеціальні символи, такі як !, @, #, $
                та ін.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less3_2.png"
          />
          <p className="mt-2 font-semibold">
            Приклади допустимих та неприпустимих ідентифікаторів у Python:
          </p>
        </div>

        <div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Що потрібно запам’ятати?
          </p>
          <ul>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>
                Python — це мова, чутлива до регістру (наприклад, Variable та
                variable — це не одне й те ж).
              </p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>
                Завжди використовуйте ідентифікатори, які мають сенс. Хоча c =
                10 є допустимим, запис count = 10 має більше сенсу, його легше
                зрозуміти.
              </p>
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <p>
                Слова можна розділяти за допомогою нижнього підкреслення,
                наприклад, this_is_still_a_variable.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ff99c87ab0d1def49951c`}
                onClick={onButtonClick}
                className="lg:p-4 md:p-4 sm:p-1 p-1 lg:mr-4  bg-red-500 lg:text-xl md:text-xl sm:text-sm text-sm text-white font-semibold rounded-md"
              >
                Перейти до наступного елементу
              </Link>
              <p className="flex text-green-700 items-center lg:text-xl md:text-xl sm:text-sm text-sm">
                <IoIosDoneAll size={40} /> Завершено
              </p>
            </div>
          ) : (
            <button
              onClick={onButtonClick}
              className="lg:p-4 md:p-4 sm:p-2 p-2 lg:mr-4  bg-red-500 lg:text-xl md:text-xl sm:text-sm text-sm text-white font-semibold rounded-md"
            >
              Позначити як виконане
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Lesson3;

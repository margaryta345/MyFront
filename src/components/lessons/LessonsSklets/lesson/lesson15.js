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
function Lesson15({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 14 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 14, value: true }));
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
          В Python
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            ключове слово global
          </span>
          дозволяє змінювати змінну за межами поточної області видимості. Воно
          використовується для створення глобальної змінної та внесення до неї
          змін у локальному контексті
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Зміна глобальної змінної в Python
        </p>
        <p>
          Спочатку спробуємо отримати доступ до глобальної змінної всередині
          функції:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>c = 1 # глобальна змінна</p>
            <p>def add(): </p>
            <p>print(c)</p>
            <p>add()</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>1</p>
        </div>
        <p>
          Тут ми отримали
          <span className="font-semibold ml-1 mr-1">доступ</span> до глобальної
          змінної всередині функції. Однак, якщо ми спробуємо
          <span className="font-semibold ml-1 mr-1">змінити </span>глобальну
          змінну всередині функції наступним чином:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Глобальна змінна</p>
            <p>c = 1</p>
            <p>def add():</p>
            <p>&nbsp;&nbsp;# Збільшуємо значення змінної c </p>
            <p>&nbsp;&nbsp; c = c + 2</p>
            <p>&nbsp;&nbsp;print(c)</p>
            <p>add()</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>
            UnboundLocalError: local variable 'c' referenced before assignment
          </p>
        </div>
        <p>
          Це пов’язано з тим, що ми можемо отримати доступ тільки до глобальної
          змінної, але не можемо її змінити всередині функції. Рішенням є
          використовувати ключове слово
          <span className="bg-gray-100 ml-1 mr-1">global</span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Глобальна змінна</p>
            <p>c = 1</p>
            <p>def add():</p>
            <p>&nbsp;&nbsp; # Використовуємо ключове слово global </p>
            <p>&nbsp;&nbsp; global c</p>
            <p>&nbsp;&nbsp;# Збільшуємо значення змінної c</p>
            <p>&nbsp;&nbsp;c = c + 2 </p>
            <p>&nbsp;&nbsp;print(c)</p>
            <p>add()</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>3</p>
        </div>
        <p>
          Тут ми використали ключове слово
          <span className="bg-gray-100 ml-1 mr-1">global</span> зі змінною
          <span className="bg-gray-100 ml-1 mr-1">c </span>всередині функції
          add(). Під час виклику функції add() значення глобальної змінної
          <span className="bg-gray-100 ml-1 mr-1">c</span>
          змінилося з <span className="font-semibold ml-1 mr-1"></span>1 на
          <span className="font-semibold ml-1 mr-1"></span>3.
        </p>

        <p className="mt-2 text-2xl font-semibold mb-4">
          Використання ключового слова global у вкладених функціях
        </p>
        <p>
          В Python ми також можемо використати ключове слово global у вкладених
          функціях. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def outer_function():</p>
            <p>&nbsp;&nbsp;num = 20</p>
            <p>&nbsp;&nbsp; def inner_function(): </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; global num</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; num = 25</p>
            <p>&nbsp;&nbsp;print("Before calling inner_function(): ", num) </p>
            <p>&nbsp;&nbsp;inner_function()</p>
            <p>&nbsp;&nbsp;print("After calling inner_function(): ", num)</p>
            <p>outer_function()</p>
            <p>print("Outside both function: ", num)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Before calling inner_function(): 20</p>
          <p>After calling inner_function(): 20</p>
          <p>Outside both function: 25</p>
        </div>
        <p className="mt-4">
          Тут ми оголосили змінну
          <span className="bg-gray-100 ml-1 mr-1">num</span> як
          <span className="bg-gray-100 ml-1 mr-1">global</span> всередині
          вкладеної функції inner_function(). На змінну
          <span className="bg-gray-100 ml-1 mr-1">num</span> у зовнішній функції
          outer_function() ключове слово
          <span className="bg-gray-100 ml-1 mr-1">global</span> ніяк не впливає.
        </p>
        <p className="mt-2">
          До та після виклику inner_function() змінна
          <span className="bg-gray-100 ml-1 mr-1">num</span> є локальною змінною
          зі значенням 20, оскільки всі дії виконуються в локальній області
          видимості функції.
        </p>
        <p className="mt-4">
          А вже після завершення виконання функції outer_function() ми
          переходимо в глобальну область видимості, де змінна
          <span className="bg-gray-100 ml-1 mr-1">num</span> приймає значення,
          визначене в функції inner_function(), тобто
          <span className="bg-gray-100 ml-1 mr-1">num= 25</span> . Це пов’язано
          з тим, що ми використали ключове слово
          <span className="bg-gray-100 ml-1 mr-1">global</span>
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Правила використання ключового слова global
        </p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Коли ми створюємо змінну всередині функції, вона за замовчуванням
            стає локальною змінною.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Коли ми створюємо змінну поза функцією, вона за замовчуванням стає
            глобальною змінною. Вам не потрібно додатково використовувати для
            цього ключове слово global.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Ключове слово global використовується для створення глобальної
            змінної всередині функції.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Використання ключового слова global поза функцією не дасть жодного
            ефекту.
          </li>
        </ul>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663889d90dd35f20b0dc1f10`}
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
export default Lesson15;

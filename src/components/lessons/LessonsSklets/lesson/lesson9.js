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
function Lesson9({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 8 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 8, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1">Цикли</span>
          використовуються для повторення виконання певного блоку коду.
          Наприклад, якщо нам потрібно показати певне повідомлення 100 разів, ми
          можемо використати цикл. Це простий приклад, але за допомогою циклів
          ми можемо зробити багато речей.
        </p>
        <p>
          На попередньому уроці ми розглядали цикл
          <span className="text-red-500 ml-1 mr-1 font-semibold">
            for в Python
          </span>
          . Тепер ми розглянемо цикл while.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">Цикл while в Python</p>
        <p>
          <span className="text-red-500  mr-1 font-semibold">Цикл while</span>
          використовується для виконання блоку коду доти, доки не буде досягнуто
          певної умови
        </p>

        <p className="mt-2 font-semibold">Синтаксис циклу while:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>while умова:</p>
            <p>&nbsp;&nbsp; # блок коду для виконання</p>
          </code>
        </div>
        <p>Алгоритм дій:</p>

        <ul className="justify-start ml-2">
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Спочатку цикл while обробляє умову. - містить цілі
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова обчислюється як True, то виконується код всередині циклу
            while.
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Потім умова повторно обробляється. Цей процес триває доти, доки
            умова не стане False.
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова обчислюється як False, цикл завершує своє виконання.
          </li>
        </ul>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less9_1.png"
          />
          <p className="mt-2 font-semibold">
            Блок-схема виконання циклу while в Python
          </p>
        </div>
        <p>Розглянемо приклад використання циклу while в Python:</p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p># У цій програмі ми виводимо числа від 1 до 5</p>
            <p># Ініціалізація змінних</p>
            <p>i = 1</p>
            <p>n = 5</p>
            <p># Цикл while з i = 1 до 5</p>
            <p>while i &lt;= n:</p>
            <p>&nbsp;&nbsp;print(i)</p>
            <p>&nbsp;&nbsp;i = i + 1</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Нескінченний цикл while у Python
        </p>
        <p>
          Якщо умова циклу завжди істинна
          <span className="text-red-500  mr-1 ml-1 font-semibold">(True)</span>,
          цикл виконуватиметься нескінченну кількість разів (поки не заповниться
          пам’ять). Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block  min-w-max">
          <code>
            <p>age = 32</p>
            <p># Умова для перевірки завжди дорівнює True</p>
            <p>while age &lt; 18:</p>
            <p>print('You can vote')</p>
          </code>
        </div>
        <p>
          Тут умова завжди обробляється як True. Отже, тіло циклу
          виконуватиметься нескінченну кількість разів.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Цикл while з частиною else в Python
        </p>
        <p>
          У Python цикл while може мати необов’язковий
          <span className="text-red-500  mr-1 ml-1 font-semibold">
            блок else
          </span>
          , який виконуватиметься після того, як умова циклу стане False.
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>counter = 0</p>
            <p>while counter &lt; 3:</p>
            <p>&nbsp;&nbsp;print('Inside loop')</p>
            <p>&nbsp;&nbsp;counter = counter + 1</p>
            <p>else:</p>
            <p>&nbsp;&nbsp;print('Inside else')</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Inside loop</p>
          <p>Inside loop</p>
          <p>Inside loop</p>
          <p>Inside else</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          for проти while в Python
        </p>
        <p>
          Цикл for зазвичай використовується, коли
          <span className="text-red-500  mr-1 ml-1 font-semibold">відома </span>
          кількість ітерацій. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block  min-w-max">
          <code>
            <p># Даний цикл повторюється 4 рази (від 0 до 3)</p>
            <p>for i in range(4):</p>
            <p>&nbsp;&nbsp;print(i)</p>
          </code>
        </div>
        <p>
          Цикл while зазвичай використовується, коли кількість ітерацій
          <span className="text-red-500  mr-1 ml-1 font-semibold">
            невідома
          </span>
          .Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block  min-w-max">
          <code>
            <p>while умова:</p>
            <p>
              &nbsp;&nbsp; # Код виконується доти, доки умова не стане False
            </p>
          </code>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffa7e87ab0d1def499524`}
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
export default Lesson9;

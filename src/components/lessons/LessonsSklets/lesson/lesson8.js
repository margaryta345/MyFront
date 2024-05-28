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
function Lesson8({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 7 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 7, value: true }));
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
        <p className="mt-4">Є 2 типи циклів у Python:</p>
        <ul className="mt-4">
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            цикл for
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            цикл while
          </li>
        </ul>

        <p className="mt-6 text-xl font-semibold mb-4">Цикл for в Python</p>
        <p>
          Цикл for використовується для виконання блоку коду певну кількість
          разів. Він використовується з будь-якими послідовностями, такими як
          <span className="font-semibold ml-1 mr-1">
            списки, кортежі, рядки
          </span>
          та ін.
        </p>

        <p className="mt-2 font-semibold">Синтаксис циклу for:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>for val in послідовність:</p>
            <p>&nbsp;&nbsp; # блок коду для виконання</p>
          </code>
        </div>
        <p>
          Тут <span className=" bg-gray-100 ml-1 mr-1">val</span>
          отримує доступ до кожного елемента
          <span className=" bg-gray-100 ml-1 mr-1">послідовність</span>
          на кожній ітерації. Цикл продовжується доти, доки не буде досягнутий
          останній елемент у
          <span className=" bg-gray-100 ml-1 mr-1">послідовність.</span>
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less8_1.png"
          />
          <p className="mt-2 font-semibold">
            Блок-схема виконання циклу for в Python
          </p>
        </div>
        <p>Розглянемо приклад використання циклу for зі списком:</p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>languages = ['Swift', 'Python', 'Go', 'JavaScript']</p>
            <p>
              # Отримуємо доступ до елементів списку, використовуючи цикл for
            </p>
            <p>for language in languages:</p>
            <p>&nbsp;&nbsp;print(language)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Swift</p>
          <p>Python</p>
          <p>Go</p>
          <p>JavaScript</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Тут ми створили список
          <span className=" font-semibold ml-1 mr-1">language </span>. Спочатку
          значенням <span className=" font-semibold  ml-1 mr-1">language</span>є
          перший елемент списку, тобто
          <span className=" font-semibold  ml-1 mr-1">Swift</span>, після чого
          виконується код всередині циклу — оператор
          <span className=" font-semibold 0 ml-1 mr-1">print</span>. Потім
          <span className=" font-semibold  ml-1 mr-1">language</span>
          оновлюється значенням наступного елемента списку, і оператор
          <span className=" font-semibold  ml-1 mr-1">print</span>
          виконується знову. Таким чином, цикл виконується доти, доки не буде
          досягнутий останній елемент списку.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">Цикл for та range()</p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">Діапазон</span> —
          це ряд значень між двома числовими інтервалами. У Python
          використовується вбудована
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            функція range()
          </span>
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>values = range(4)</code>
        </div>
        <p>
          Тут <span className=" font-semibold ml-1 mr-1">4</span> всередині
          <span className=" bg-gray-100 ml-1 mr-1">range()</span> визначає
          діапазон, що містить значення
          <span className=" font-semibold ml-1 mr-1">0, 1, 2, 3.</span>
        </p>
        <p>
          У Python ми можемо використовувати цикл для діапазонів значень.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            # Використовуємо функцію range() для визначення діапазону значень
            <br />
            values = range(4)
            <br />
            # Виконуємо ітерації з i = 0 до i = 3
            <br />
            for i in values:
            <br />
            &nbsp;&nbsp; print(i)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <p>
          Тут ми використали цикл для перебору значень в діапазоні від 0 до 3.
        </p>
        <p className="mt-4">
          Значення <span className=" bg-gray-100 ml-1 mr-1">i</span>
          встановлюється рівним 0 і оновлюється до наступного значення діапазону
          на кожній ітерації. Цей процес триває доти, доки не буде досягнуто
          значення 4.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">Цикл for в Python</p>
        <p>
          Цикл for також може мати необов’язковий
          <span className=" bg-gray-100 font-semibold ml-1 mr-1">
            блок else
          </span>
          , який виконується після завершення циклу. Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            digits = [0, 1, 4]
            <br />
            for i in digits:
            <br />
            &nbsp;&nbsp; print(i)
            <br />
            else:
            <br />
            &nbsp;&nbsp; print("No items left.")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>0</p>
          <p>1</p>
          <p>4</p>
          <p>No items left.</p>
        </div>
        <p>
          Тут цикл for виводить усі елементи списку
          <span className=" bg-gray-100 ml-1 mr-1">digits</span>. Після
          завершення циклу інтерпретатор виконує блок
          <span className=" bg-gray-100 ml-1 mr-1">else</span> і виводить
          <span className=" bg-gray-100 ml-1 mr-1">No items left</span>.
        </p>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Блок else не виконуватиметься, якщо цикл for зупинено оператором
          break.
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffa7287ab0d1def499523`}
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
export default Lesson8;

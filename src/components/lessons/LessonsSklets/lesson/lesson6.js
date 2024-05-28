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
function Lesson6({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 5 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 5, value: true }));
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
          <span className=" text-red-500 font-semibold">Оператори </span> — це
          спеціальні символи, які виконують операції над змінними та значеннями.
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>print(7 + 8) # виведе 15</p>
          </code>
        </div>

        <p>
          Тут <span className="bg-gray-100 pl-1 pr-1">+</span> є оператором,
          який додає два числа: <span className="bg-gray-100 pl-1 pr-1">7</span>
          та
          <span className="bg-gray-100 pl-1 pr-1">8</span>.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Арифметичні оператори в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Арифметичні оператори
          </span>
          використовуються для виконання математичних операцій, таких як
          додавання, віднімання, множення та ін. Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>sub = 14 - 7 # виведе 7</p>
          </code>
        </div>

        <p>
          Тут <span className="bg-gray-100 pl-1 pr-1">-</span> є арифметичним
          оператором, який використовується в операції віднімання.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less6_1.png"
          />
          <p className="mt-2 font-semibold">Арифметичні оператори в Python</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператори присвоювання в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Оператори присвоювання
          </span>
          використовуються для присвоювання значень змінним. Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p># Присвоюємо значення 7 змінній x </p>
            <p>x = 7</p>
          </code>
        </div>

        <p>
          Тут <span className="bg-gray-100 pl-1 pr-1">=</span> є оператором,
          присвоювання, який присвоює значення 7 змінній х.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less6_2.png"
          />
          <p className="mt-2 font-semibold">
            Список операторів присвоювання в Python:
          </p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператори порівняння в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Оператори порівняння
          </span>
          порівнюють два значення/змінні та повертають логічний результат:
          <span className="bg-gray-100 pl-1 pr-1"> True </span> або
          <span className="bg-gray-100 pl-1 pr-1"> False </span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>a = 5</p>
            <p>b = 2</p>
            <p>print (a &gt; b) # True</p>
          </code>
        </div>

        <p>
          Тут оператор порівняння
          <span className="bg-gray-100 pl-1 pr-1">
            <code>&gt;</code>
          </span>
          використовується для порівняння
          <span className="bg-gray-100 pl-1 pr-1"> a </span> та
          <span className="bg-gray-100 pl-1 pr-1"> b </span>.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less6_3.png"
          />
          <p className="mt-2 font-semibold">
            Список операторів порівняння в Python:
          </p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Логічні оператори в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Логічні оператори
          </span>
          використовуються для перевірки того, чи є вираз істинним
          <span className="bg-gray-100 pl-1 pr-1"> True </span> чи хибним{" "}
          <span className="bg-gray-100 pl-1 pr-1"> False </span>. Також вони
          використовуються в умовах та циклах. Наприклад: або . Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            a = 5
            <br />
            b = 2
            <br />
            print((a &gt; 2) and (b &gt;= 6)) # True
          </code>
        </div>

        <p>
          Тут
          <span className="bg-gray-100 pl-1 pr-1">and</span>є логічним
          оператором І. Оскільки обидва вирази
          <span className="bg-gray-100 pl-1 pr-1"> a&gt;2 </span> та
          <span className="bg-gray-100 pl-1 pr-1"> b &gt;= 6</span>. є
          <span className="bg-gray-100 pl-1 pr-1"> True </span>, то результат
          <span className="bg-gray-100 pl-1 pr-1"> True </span>.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less6_4.png"
          />
          <p className="mt-2 font-semibold">
            Список логічних операторів порівняння в Python:
          </p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Побітові оператори в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold">
            Побітові оператори
          </span>
          працюють з операндами, ніби вони є наборами двійкових цифр. Вони
          працюють з бітами, звідси й назва. Наприклад, десяткове 2 — це бінарне
          10, а десяткове 7 — це бінарне 111. Логічні оператори використовуються
          для перевірки того, чи є вираз істинним
        </p>
        <p className="mt-2">
          У нижченаведеній таблиці нехай x = 10 (0000 1010 у двійковому форматі)
          та y = 4 (0000 0100 у двійковому форматі).
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less6_5.png"
          />
          <p className="mt-2 font-semibold">
            Список побітових операторів в Python:
          </p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6637c1f9ec6e98fa23a4591a`}
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
export default Lesson6;

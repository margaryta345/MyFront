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

function Lesson11({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 10 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 10, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1"> Функція </span> —
          це блок коду, який виконує певне завдання. В Python є два типи
          функції: вбудовані та користувацькі.
        </p>
        <p className="mt-2">
          <span className=" text-red-500 font-semibold mr-1">Параметр </span> —
          це значення, яке приймає функція.
        </p>
        <p className="mt-2">
          <span className=" text-red-500 font-semibold mr-1">Аргумент</span> —
          це значення, яке передається у функцію під час її виклику у програмі.
        </p>
        <p className="mt-2">
          <span className=" text-red-500 font-semibold mr-1">
            Оператор return
          </span>
          використовується для повернення значення функції.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">Що таке функція?</p>
        <p>
          <span className="text-red-500  mr-1 font-semibold">Функція</span>
          це блок коду, який виконує певну задачу.
        </p>
        <p>
          Припустимо, нам потрібно написати програму, яка намалює коло, а потім
          зафарбує його. Ви можете створити дві функції для вирішення цієї
          задачі:
        </p>

        <ul className="justify-start ml-2">
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            функція створення кола;
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            функція для зафарбування кола.
          </li>
        </ul>
        <p>
          Поділ складного завдання на дрібніші частини робить нашу програму
          простою для розуміння та повторного використання.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Типи функцій в Python
        </p>
        <p>Є два типи функцій:</p>

        <ul className="justify-start ml-2">
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Функції зі Стандартної бібліотеки Python — це вбудовані функції,
            доступні для використання.
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            Функції користувача — ми можемо створювати власні функції на основі
            наших вимог.
          </li>
        </ul>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Оголошення функції в Python
        </p>
        <p>Синтаксис оголошення функції:</p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def ім'я_функції(параметри):</p>
            <p>&nbsp;&nbsp;# тіло функції:</p>
            <p>&nbsp;&nbsp; return</p>
          </code>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          <ul className="justify-start ml-2">
            <li>
              <span className="text-red-500 font-semibold">def </span>— ключове
              слово, яке використовується для оголошення функції;
            </li>
            <li>
              <span className="text-red-500 font-semibold">ім'я_функції </span>—
              будь-яке ім’я, дане функції;
            </li>
            <li>
              <span className="text-red-500 font-semibold">параметри </span>—
              значення, які приймає функція;
            </li>
            <li>
              <span className="text-red-500 font-semibold">
                return (необов’язково)
              </span>
              — повертає значення з функції
            </li>
          </ul>
        </div>
        <p>Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def greet():</p>
            <p>&nbsp;&nbsp;print('Hello, World!')</p>
          </code>
        </div>
        <p>
          Тут ми створили функцію під назвою greet(). Вона виводить текст{" "}
          <span className="bg-gray-100 mr-1 ml-1 ">Hello, World!</span> на
          екран. Ця функція не має параметрів і не повертає ніяких значень.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Виклик функції в Python
        </p>
        <p>
          Виклик функції greet(), яку ми створили вище, виконується в наступний
          спосіб:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Викликаємо функцію</p>
            <p>greet()</p>
          </code>
        </div>
        <p>Розглянемо ще один приклад використання функції в Python:</p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def greet():</p>
            <p>&nbsp;&nbsp; print('Hello World!')</p>
            <p># Викликаємо функцію</p>
            <p>greet()</p>
            <p>print('Outside function')</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Hello World!</p>
          <p> Outside function</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Параметри та аргументи функції в Python
        </p>
        <p>
          Функція може мати параметри.
          <span className="text-red-500 font-semibold mr-1 ml-1">Параметр</span>
          — це значення, яке приймає функція. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Функція з двома параметрами</p>
            <p>def add_numbers(num1, num2):</p>
            <p>&nbsp;&nbsp; sum = num1 + num2</p>
            <p>&nbsp;&nbsp; print('Sum: ',sum)</p>
            <p># Функція без параметрів</p>
            <p>def add_numbers():</p>
            <p>&nbsp;&nbsp;# код</p>
          </code>
        </div>
        <p>
          Якщо ми створюємо функцію з параметрами, нам потрібно надсилати
          відповідні значення=
          <span className="text-red-500 font-semibold mr-1 ml-1">
            (аргументи)
          </span>
          = під час виклику функції в програмі. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Викликаємо функцію, вказавши 2 аргументи</p>
            <p>add_numbers(5, 4)</p>
            <p># Викликаємо функцію без надання аргументів</p>
            <p>add_numbers()</p>
          </code>
        </div>

        <p>
          Тут <span className="bg-gray-100  mr-1 ml-1">add_numbers(5, 4)</span>
          вказує, що параметри
          <span className="bg-gray-100  mr-1 ml-1">num1</span> та
          <span className="bg-gray-100  mr-1 ml-1">num2 </span>отримають
          аргументи 5 та 4 відповідно.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор return в Python
        </p>
        <p>
          Функція Python може повертати чи не повертати значення. Якщо потрібно,
          щоб функція повертала якесь значення, слід використовувати
          <span className="text-red-500 font-semibold mr-1 ml-1">
            оператор return.
          </span>
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def add_numbers():</p>
            <p>&nbsp;&nbsp; ...</p>
            <p>&nbsp;&nbsp; return sum</p>
          </code>
        </div>
        <p>
          Тут ми повертаємо змінну sum назад у викликаючий об’єкт
          <span className="text-red-500 font-semibold mr-1 ml-1">
            (caller).
          </span>
        </p>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Оператор return також позначає завершення виконання функції.
        </div>

        <p>Розглянемо приклад використання оператора return на практиці:</p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Визначення функції</p>
            <p>def find_square(num):</p>
            <p>&nbsp;&nbsp;result = num * num</p>
            <p>&nbsp;&nbsp;return result</p>
            <p># Виклик функції</p>
            <p>square = find_square(3)</p>
            <p>print('Square:',square)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Square: 9</p>
        </div>
        <p>
          Тут ми створили функцію під назвою find_square(). Функція приймає
          число (num) та повертає квадрат цього числа.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Переваги використання функцій
        </p>
        <p>
          <span className="font-semibold text-l">Перевага №1: </span>Повторне
          використання коду. Ми можемо використати ту саму функцію декілька
          разів у нашій програмі, що робить наш код багаторазовим. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Визначення функції</p>
            <p>def get_square(num):</p>
            <p>&nbsp;&nbsp; return num * num</p>
            <p>for i in [1,2,3]:</p>
            <p>&nbsp;&nbsp; # Виклик функції</p>
            <p>&nbsp;&nbsp; result = get_square(i)</p>
            <p>&nbsp;&nbsp; print('Square of',i, '=',result)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Square of 1 = 1</p>
          <p>Square of 2 = 4</p>
          <p>Square of 3 = 9</p>
        </div>
        <p>
          Тут ми створили функцію під назвою get_square() для обчислення
          квадрата числа. Потім написали цикл for для обчислення квадрата чисел
          від 1 до 3. Одна й та сама функція обчислення квадрата числа
          використовується декілька разів у циклі.
        </p>

        <p className="mt-4">
          <span className="font-semibold text-l ">
            Перевага №2: Читабельність коду.
          </span>
          Функції допомагають розбивати код на менші частини, щоб зробити
          програму читабельною та легкою для розуміння.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffcac87ab0d1def499526`}
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
export default Lesson11;

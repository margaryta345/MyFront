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
function Lesson12({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 11 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 11, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1"> Параметр </span> —
          це значення, яке приймає функція
        </p>
        <p className="mt-2">
          <span className=" text-red-500 font-semibold mr-1">Аргумент</span> —
          це значення, яке передається у функцію під час її виклику у програмі.
        </p>
        <p>Розглянемо приклад використання параметрів функції в Python:</p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def add_numbers(a, b):</p>
            <p>&nbsp;&nbsp; sum = a + b</p>
            <p>&nbsp;&nbsp; print('Sum:', sum)</p>
            <p>add_numbers(2, 3)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Sum: 5</p>
        </div>
        <p>
          Тут функція add_numbers() приймає два параметри:
          <span className="bg-gray-100 pr-1 pl-1 ">a</span> та
          <span className="bg-gray-100 pr-1 pl-1 ">b</span>. Зверніть увагу на
          наступний рядок коду:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>add_numbers(2, 3)</code>
        </div>
        <p>
          Параметри <span className="bg-gray-100 pr-1 pl-1 ">a</span> та
          <span className="bg-gray-100 pr-1 pl-1 ">b</span> отримають відповідні
          значення <span className="bg-gray-100 pr-1 pl-1 ">2</span> та
          <span className="bg-gray-100 pr-1 pl-1 ">3</span>.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Параметри зі значеннями за замовчуванням
        </p>
        <p>
          У Python за допомогою оператора = ми можемо вказати значення за
          замовчуванням для параметрів функції. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def add_numbers( a = 7, b = 8):</p>
            <p>&nbsp;&nbsp; sum = a + b:</p>
            <p>&nbsp;&nbsp; print('Sum:', sum)</p>
            <p># Виклик функції з 2 аргументами</p>
            <p> add_numbers(2, 3)</p>
            <p># Виклик функції з 1 аргументом</p>
            <p>add_numbers(a = 2)</p>
            <p># Виклик функції без надання аргументів</p>
            <p>add_numbers()</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Sum: 5</p>
          <p>Sum: 10</p>
          <p>Sum: 15</p>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          <ul className="justify-start ml-2">
            <li>
              <span className="text-red-500 font-semibold">
                add_number(2, 3)
              </span>
              — під час виклику функції передаються обидва значення. Отже, ці
              значення використовуються замість значень за замовчуванням.
            </li>
            <li>
              <span className="text-red-500 font-semibold">add_number(2) </span>
              — під час виклику функції передається лише одне значення.
              Параметру a надається значення 2, а для параметра b
              використовується значення за замовчуванням.
            </li>
            <li>
              <span className="text-red-500 font-semibold">add_number() </span>—
              значення, які приймає функція;
            </li>
            <li>
              <span className="text-red-500 font-semibold">
                return (необов’язково)
              </span>
              під час виклику функції значення не передаються. Отже, для обох
              параметрів a та b використовуються значення за замовчуванням.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Іменовані аргументи в Python
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Іменовані аргументи
          </span>
          є парою “ім’я-значення”, що передається функції. Ім’я та значення
          пов’язуються з аргументом напряму, тому при передачі аргументу
          плутанини з порядком не виникає. Наприклад:
        </p>

        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def display_info(first_name, last_name):</p>
            <p>&nbsp;&nbsp; print('First Name:', first_name)</p>
            <p>&nbsp;&nbsp; print('Last Name:', last_name)</p>
            <p>display_info(last_name = 'Cartman', first_name = 'Eric')</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>First Name: Eric</p>
          <p>Last Name: Cartman</p>
        </div>
        <p className="mt-4">
          Тут ми вказали як імена аргументів, так і їх значення під час виклику
          функції.
        </p>
        <p className="mt-2">
          Відповідно, аргумент first_name у виклику функції стає параметром
          first_name у визначенні функції. Так само аргумент last_name у виклику
          функції стає параметром last_name у визначенні функції.
        </p>
        <p className="m-2">
          У таких сценаріях порядок надання аргументів немає значення.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Довільні аргументи в Python
        </p>
        <p>
          Іноді ми заздалегідь не знаємо кількість аргументів, які будуть
          передані в функцію. Щоб впоратися з подібною ситуацією, ми можемо
          використовувати довільні аргументи в Python.
        </p>
        <p>
          <span className="text-red-500 font-semibold mr-1 ml-1">
            Довільні аргументи
          </span>
          дозволяють передавати різну кількість значень під час виклику функції.
          Для вказівки даного типу аргументів використовується зірочка (*) перед
          ім’ям параметра у визначенні функції. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def find_sum(*numbers):</p>
            <p>&nbsp;&nbsp;result = 0</p>
            <p>&nbsp;&nbsp; for num in numbers:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; result = result + num</p>
            <p>&nbsp;&nbsp;print("Sum = ", result)</p>
            <p># Виклик функції з 3 аргументами</p>
            <p>find_sum(1, 2, 3)</p>
            <p># Виклик функції з 2 аргументами</p>
            <p>find_sum(4, 9)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Sum = 6</p>
          <p>Sum = 13</p>
        </div>
        <p>
          Тут ми створили функцію find_sum(), яка приймає довільну кількість
          аргументів. Зверніть увагу на виклики функції:
        </p>

        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>find_sum(1, 2, 3)</p>
            <p>find_sum(4, 9)</p>
          </code>
        </div>

        <p>
          Ми можемо викликати ту саму функцію з різною кількістю аргументів.
        </p>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Після отримання декількох значень об’єкт numbers починає поводити себе
          як масив, тому ми можемо використовувати цикл for для доступу до
          кожного значення.
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffcb487ab0d1def499527`}
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
export default Lesson12;

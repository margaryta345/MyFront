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
function Lesson13({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 12 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 12, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1"> Рекурсія </span> —
          це процес визначення чогось у межах самого себе. Прикладом у фізичному
          світі може бути розміщення двох дзеркал одне напроти одного. Будь-який
          об’єкт між ними відображатиметься рекурсивно.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Рекурсивна функція в Python
        </p>
        <p>
          У Python ми знаємо, що функція може викликати інші функції. Функція
          може навіть викликати саму себе. Подібні типи конструкцій
          <span className=" text-red-500 font-semibold ml-1">
            називаються рекурсивними функціями.
          </span>
        </p>
        <p>
          Нижче наведено приклад рекурсивної функції для знаходження факторіала
          цілого числа
        </p>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Факторіал числа — це добуток всіх цілих чисел від 1 до вказаного
          числа. Наприклад, факторіал числа 6 дорівнює 1*2*3*4*5*6 = 720.
        </div>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def factorial(x):</p>
            <p>
              &nbsp;&nbsp; Це рекурсивна функція знаходження факторіала цілого
              числа.
            </p>
            <p>&nbsp;&nbsp;if x == 1: </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;return 1 </p>
            <p>&nbsp;&nbsp;else:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;return (x * factorial(x-1))</p>
            <p>num = 3</p>
            <p>print("The factorial of", num, "is", factorial(num))</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>The factorial of 3 is 6</p>
        </div>
        <p>
          Тут <span className="font-semibold ml-1 mr-1">factorial()</span> є
          рекурсивною функцією, оскільки вона викликає саму себе. Коли ми
          викликаємо цю функцію з додатним цілим числом, вона рекурсивно
          викликатиме себе, зменшуючи число.
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less13_1.png"
          />
          <p className="mt-2 font-semibold">Покроковий процес рекурсії</p>
        </div>
        <p className="mt-4">
          Наша рекурсія закінчується, коли число зменшується до 1. Це
          називається базовою умовою.
        </p>
        <p className="mt-4">
          Кожна рекурсивна функція повинна мати
          <span className="font-semibold ml-1 mr-1">базову умову</span>, яка
          зупиняє рекурсію, інакше функція буде нескінченно викликати саму себе.
          Інтерпретатор Python обмежує глибину рекурсії, щоб уникнути
          нескінченних рекурсій, що призводять до переповнення стека.
        </p>
        <p className="mt-4">
          За замовчуванням максимальна глибина рекурсії дорівнює
          <span className="font-semibold ml-1 mr-1">1000</span>. Якщо межа
          перевищена, то виникає помилка RecursionError.
        </p>
        <p>Розглянемо приклад нескінченної рекурсії:</p>

        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def recursor():</p>
            <p>&nbsp;&nbsp; recursor()</p>
            <p>recursor()</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Traceback (most recent call last):</p>
          <p>File "", line 3, in</p>
          <p>File "", line 2, in a</p>
          <p>File "", line 2, in a</p>
          <p>File "", line 2, in a</p>
          <p>[Previous line repeated 996 more times]</p>
          <p>RecursionError: maximum recursion depth exceeded</p>
        </div>

        <p className="mt-2 text-xl font-semibold mb-4">Переваги рекурсії</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Рекурсивні функції роблять код чистішим.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Складну задача можна розбити на простіші підзадачі за допомогою
            рекурсії.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Генерація послідовності простіша з рекурсією, ніж з використанням
            будь-якої вкладеної ітерації.
          </li>
        </ul>

        <p className="mt-6 text-xl font-semibold mb-4">Недоліки рекурсії</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Іноді логіку рекурсії важко зрозуміти.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Рекурсивні виклики дорогі (неефективні), тому що забирають багато
            пам’яті та часу.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Рекурсивні функції важко відлагоджувати.
          </li>
        </ul>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffcba87ab0d1def499528`}
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
export default Lesson13;

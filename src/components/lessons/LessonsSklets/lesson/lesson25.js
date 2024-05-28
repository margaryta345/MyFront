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
function Lesson25({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 24 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 24, value: true }));
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
        <p className=" text-3xl mb-10 font-semibold ">{name}</p>
        <p>
          <span className=" text-red-500 font-semibold mr-1 ">Модуль</span>— це
          файл, який містить код для виконання певного завдання. Модуль може
          містити змінні, функції, класи тощо. Для створення модуля
          використовується файл із розширенням .py. Для імпортування модуля в
          Python використовується ключове слово import. Стандартна бібліотека
          Python містить понад 200 модулів.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">Що таке модуль?</p>
        <p>
          <span className=" text-red-500 font-semibold mr-1 ">Модуль</span>— це
          файл, який містить код для виконання певного завдання. Модуль може
          містити змінні, функції, класи тощо.
        </p>
        <p className="mt-2">
          Давайте створимо модуль. Напишіть наступний код та збережіть його як
          файл example.py:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Модуль в Python
            <br />
            def add(a, b):
            <br />
            &nbsp;&nbsp;result = a + b
            <br />
            &nbsp;&nbsp;return result
          </code>
        </div>
        <p>
          Тут ми визначили функцію add() всередині модуля з ім’ям example.
          Функція приймає два числа та повертає їх суму.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Імпорт модулів в Python
        </p>

        <p>
          Ми можемо імпортувати визначення з одного модуля до іншого або в
          інтерактивний інтерпретатор Python. Для цього використовується ключове
          слово import. Щоб імпортувати наш раніше визначений модуль example,
          потрібно використати наступну команду:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>import example</code>
        </div>
        <p>
          Цей рядок коду не імпортує імена функцій, визначених у модулі example,
          напряму в нашу програму. Цей рядок імпортує лише ім’я модуля example.
        </p>
        <p className="mt-4">
          Використовуючи ім’я модуля, ми можемо отримати доступ до функцій
          модуля за допомогою крапки .. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>example.add(4,5) # результатом буде 9</code>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Python має безліч стандартних модулів, з якими ви можете
              ознайомитись в документації Python.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Стандартні модулі можна імпортувати так само як ми імпортуємо наші
              власні (користувацькі) модулі.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Імпорт модулів із Cтандартної бібліотеки Python
        </p>
        <p>
          Стандартна бібліотека Python містить понад 200 модулів. Припустимо, ми
          хочемо отримати значення числа Пі. Для цього потрібно імпортувати
          модуль math, а потім використовувати виклик math.pi. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Імпортуємо модуль math зі Стандартної бібліотеки Python
            <br />
            import math
            <br />
            # Використовуємо math.pi для отримання значення числа Пі
            <br />
            print("The value of pi is", math.pi)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          The value of pi is 3.141592653589793
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Перейменування модуля в Python
        </p>
        <p>
          В Python ми також можемо перейменувати імпортований модуль. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Імпортуємо модуль, а потім перейменовуємо його
            <br />
            import math as m
            <br />
            print(m.pi)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          3.141592653589793
        </div>
        <p>
          Тут ми перейменували модуль math на m. У деяких випадках це може
          заощадити час при наборі коду.
        </p>
        <p className="mt-4">
          Зверніть увагу, що після перейменування ім’я math не розпізнається в
          нашій області видимості. Відповідно, math.pi не працюватиме, а m.pi —
          працюватиме.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          from … import в Python
        </p>
        <p>
          Ми можемо імпортувати певні імена з модуля, не імпортуючи модуль
          повністю. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Імпортуємо тільки pi з модуля math
            <br />
            from math import pi
            <br />
            print(pi)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          3.141592653589793
        </div>
        <p>Тут ми імпортували лише об’єкт pi з модуля math.</p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Імпортуємо всі імена з модуля
        </p>
        <p>
          В Python ми можемо імпортувати всі імена (визначення) із модуля,
          використовуючи наступну конструкцію:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Імпортуємо всі імена з модуля math
            <br />
            from math import *
            <br />
            print("The value of pi is", pi)
          </code>
        </div>
        <p>
          Ми імпортували всі визначення з модуля math. Імпорт всього вмісту
          модуля не є гарною практикою у програмуванні. Це може призвести до
          дублювання визначень ідентифікаторів. Це також може ускладнити читання
          коду.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Вбудована функція dir() в Python
        </p>
        <p>
          В Python ми можемо використовувати функцію dir() для виводу списку
          всіх імен функцій в модулі. Наприклад, раніше ми визначили функцію
          add() в модулі example. Ми можемо використовувати функцію dir() з
          модулем example наступним чином:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>dir(example)</code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          ['__builtins__',
          <br />
          '__cached__',
          <br />
          '__doc__',
          <br />
          '__file__',
          <br />
          '__initializing__',
          <br />
          '__loader__',
          <br />
          '__name__',
          <br />
          '__package__',
          <br />
          'add']
        </div>
        <p>
          Тут ми бачимо відсортований список ідентифікаторів (разом з функцією
          add()) модуля example. Імена, що починаються зі знака підкреслення, є
          атрибутами Python (не користувацькі), що асоціюються з модулем.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6630012587ab0d1def499537`}
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
export default Lesson25;

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
function Lesson5({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 4 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 4, value: true }));
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

        <p className="mt-6 text-xl font-semibold mb-4">Вивід у Python</p>
        <p>
          В Python
          <span className="text-red-500 font-semibold"> функція print() </span>
          використовується для виводу даних. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p> print('Python is powerful') </p>
          </code>
        </div>

        <p className="mt-2">Результат: Python is powerful</p>
        <p className="mt-4">
          Тут функція print() виводить рядок, який знаходиться в одинарних
          лапках.
        </p>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка:</span> Повний синтаксис
          функції:
          <span className=" text-red-500 font-semibold">
            print (object= sep= end= file= flush=)
          </span>
          <ul className="list-disc ml-10 mb-4">
            <li>
              <span className="text-black font-semibold ">object </span>—
              значення для виводу;
            </li>
            <li>
              <span className="text-black font-semibold ">
                sep (від “separator”, необов’язково)
              </span>
              — дозволяє розділити декілька об’єктів для виводу всередині
              функції print()
            </li>
            <li>
              <span className="text-black font-semibold ">
                end (необов’язково)
              </span>
              — дозволяє додавати спеціальні значення, наприклад, новий рядок
              '\n' або відступ '\t';
            </li>
            <li>
              <span className="text-black font-semibold ">
                file (необов’язково)
              </span>
              — дозволяє вказати місце для виводу даних. За замовчуванням
              використовується значення sys.stdout (екран);
            </li>
            <li>
              <span className="text-black font-semibold ">
                flush (необов’язково)
              </span>
              — логічне значення, що вказує, чи скидається вивід, чи
              буферизується. За замовчуванням використовується значення False.
            </li>
          </ul>
        </div>
        <p className="mt-6 text-l font-semibold mb-4">
          Приклад №1: Функція print() з одним параметром
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>print('Good Morning!')</p>
            <p>print('It is rainy today')</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>Good Morning!</p>
            <p>It is rainy today</p>
          </code>
        </div>

        <p className="mt-6 text-l font-semibold mb-4">
          Приклад №2: Функція print() з параметром end
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>print('Good Morning!', end= ' ')</p>
            <p>print('It is rainy today')</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>Good Morning! It is rainy today</p>
          </code>
        </div>
        <p>
          Зверніть увагу, що ми додали параметр
          <span className="bg-gray-100">end= ' '</span> у функцію print(). Отже,
          ми отримуємо вивід в одному рядку, розділеному пробілом.
        </p>

        <p className="mt-6 text-l font-semibold mb-4">
          Приклад №3: Функція print() з параметром sep
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>print('New Year', 2023, 'See you soon!', sep= '. ')</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>New Year. 2023. See you soon!</p>
          </code>
        </div>

        <p>
          Тут у функції print() використовується відразу декілька елементів для
          виводу, розділених комою. Зверніть увагу, що ми також додали
          необов’язковий параметр
          <span className="bg-gray-100"> sep='. '</span> , який дозволив вивести
          елементи через крапку (а не через кому).
        </p>

        <p className="mt-6 text-l font-semibold mb-4">
          Приклад №4: Вивід змінних та літералів у Python
        </p>
        <p>
          Функція print() також може використовуватися для виводу змінних.
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>number = -11.7</p>
            <p>name = "Ravesli"</p>
            <p># Виводимо літерал</p>
            <p>print(7)</p>
            <p># Виводимо змінні</p>
            <p>print(number)</p>
            <p>print(name)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>7</p>
            <p>-11.7</p>
            <p>Ravesli</p>
          </code>
        </div>

        <p className=" text-l font-semibold mb-4">
          Приклад №5: Вивід з’єднаних рядків
        </p>
        <p>
          Ми також можемо з’єднати два рядки всередині функції print().
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>print('Code is ' + 'awesome.')</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>aCode is awesome.</p>
          </code>
        </div>
        <p>
          Тут оператор + з’єднує два рядки
          <span className="bg-gray-100"> 'Code is '</span> та
          <span className="bg-gray-100"> 'awesome.'</span>, а функція print()
          виводить результат на екран.
        </p>

        <p className="mt-6 text-l font-semibold mb-4">
          Приклад №6: Вивід форматованого тексту
        </p>
        <p>
          Іноді потрібно відформатувати вивід, щоб він виглядав читабельно. Це
          можна зробити за допомогою методу
          <span className="bg-gray-100">str.format()</span> . Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>x = 6</p>
            <p>y = 12</p>
            <p>
              print('The value of x is {} and y is {}'.format(x,y))
            </p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>The value of x is 6 and y is 12</p>
          </code>
        </div>

        <p>
          Тут фігурні дужки <span className="bg-gray-100 pl-1"> {"{ }"} </span>
          використовуються як плейсхолдери.
        </p>
        <p className="mt-6 text-xl font-semibold mb-4">Ввід у Python</p>

        <p>
          В Python функція
          <span className=" text-red-500 font-semibold"> input() </span>
          використовується для отримання користувацького вводу.
        </p>

        <p className="mt-6 text-l font-semibold mb-2">
          Синтаксис функції input():
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>input(prompt)</p>
          </code>
        </div>
        <p>
          Тут <span className="bg-gray-100 pl-1"> prompt </span> — це
          необов’язковий рядок (підказка), який відображається на екрані.
        </p>
        <p className="mt-4">
          Розглянемо приклад отримання вводу від користувача в Python:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>
              # Використовуємо функцію input() для отримання користувацького
              вводу
            </p>
            <p>num = input('Enter a number: ')</p>
            <p>print('You Entered:', num)</p>
            <p>print('Data type of num:', type(num))</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>Enter a number: 11</p>
            <p>You Entered: 11</p>
            <p>Data type of num: {"<class 'str'> "}</p>
          </code>
        </div>

        <p className="mt-4">
          Тут ми використовували функцію
          <span className="bg-gray-100 pl-1"> input() </span> для отримання
          користувацького вводу та збереження його в змінній num.
        </p>
        <p className="mt-4">
          Важливо зазначити, що користувацьке значення 10 є рядком, а не числом.
          Отже,<span className="bg-gray-100 pl-1"> type(num) </span> повертає
          <span className="bg-gray-100 pl-1"> {"<class 'str'> "} </span>
        </p>
        <p className="mt-4">
          Щоб перетворити дані користувача в число, ми можемо використати
          функції <span className=" text-red-500 font-semibold"> int() </span>
          або <span className=" text-red-500 font-semibold"> float() </span>
          наступним чином:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>num = int(input('Enter a number: '))</p>
          </code>
        </div>
        <p className="mt-4">
          Тут тип даних користувацького вводу конвертується з рядка в ціле
          число.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6637c147ec6e98fa23a45919`}
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
export default Lesson5;

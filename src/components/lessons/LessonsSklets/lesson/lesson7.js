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
function Lesson7({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 6 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 6, value: true }));
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
          У програмуванні оператор if використовується для виконання блоку коду
          лише за умови дотримання конкретної умови. Наприклад, розглянемо
          виставлення оцінок (А, В, С) з урахуванням балів, отриманих
          студентами:
        </p>
        <ul className="mt-4">
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            якщо більше 90 балів, студент отримує оцінку A;
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            якщо більше 75 балів, студент отримує оцінку B;
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            якщо більше 65 балів, студент отримує оцінку C.
          </li>
        </ul>
        <p className="mt-6">
          В Python існує три форми оператора
          <span className=" text-red-500 font-semibold"> if...else:</span>
        </p>
        <ul>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            оператор if
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            оператор if...else
          </li>
          <li className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            оператор if...elif...else
          </li>
        </ul>

        <p className="mt-6 text-xl font-semibold mb-4">Оператор if в Python</p>
        <p>
          Оператор <span className="bg-gray-100 pl-1 pr-1">if</span> оцінює
          <span className="bg-gray-100 pl-1 pr-1">умову</span>:
        </p>

        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова обчислюється як True, виконується код всередині оператора
            if.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова обчислюється як False, код всередині оператора if
            пропускається
          </li>
        </ul>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less7_1.png"
          />
          <p className="mt-2 font-semibold">Принцип роботи оператору If</p>
        </div>
        <p className="mt-2">
          Розглянемо приклад використання оператора if в Python:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>number = 15</p>
            <p># Перевіряємо, чи більше 0 значення змінної number</p>
            <p>if number &gt; 0:</p>
            <p>print('Number is positive.')</p>
            <p>print('The if statement is easy')</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Number is positive.</p>
          <p>The if statement is easy</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Тут ми створили змінну з ім’ям
          <span className="font-semibold">number</span>. Зверніть увагу на
          умову!
          <p className="block mt-2">
            Оскільки<span className="font-semibold"> number </span> більше 0, то
            результатом умови є True. Якщо змінимо значення змінної на від’ємне,
            наприклад, на -10.
          </p>
          <p className="block mt-2">
            То результат виконання програми буде наступним:
            <span className="font-semibold"> The if statement is easy</span>
          </p>
          <p className="block mt-2">
            Оскільки значення змінної
            <span className="font-semibold"> number </span> тепер менше 0, то
            умова стала False. Отже, код всередині оператора if ігнорується
          </p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор if…else в Python
        </p>
        <p>
          Оператор <span className="bg-gray-100 pl-1 pr-1">if</span> може мати
          необов’язкову умову
          <span className="bg-gray-100 pl-1 pr-1">else</span>:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            if умова:
            <br />
            &nbsp;&nbsp;# блок коду, якщо умова = True
            <br />
            else:
            <br />
            &nbsp;&nbsp;# блок коду, якщо умова = False
          </code>
        </div>

        <p className="mt-2">Якщо умова обчислюється як True:</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            код всередині if виконується;
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            код всередині else пропускається.
          </li>
        </ul>
        <p className="mt-4">Якщо умова обчислюється як False:</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            код всередині if пропускається;
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            код всередині else виконується.
          </li>
        </ul>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less7_2.png"
          />
          <p className="mt-2 font-semibold">
            Принцип роботи оператору If...else
          </p>
        </div>

        <p className="mt-2">
          Розглянемо приклад використання оператора if...else в Python:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            number = 15
            <br />
            if number &gt; 0:
            <br />
            &nbsp;&nbsp;print('Positive number')
            <br />
            else:
            <br />
            &nbsp;&nbsp;print('Negative number')
            <br />
            print('This statement is always executed')
          </code>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Ми створили змінну з ім’ям
          <span className="font-semibold"> number</span>. Зверніть увагу на
          умову!
          <p className="block mt-2">
            Оскільки значенням змінної
            <span className="font-semibold"> number </span>є 15, то умова
            дорівнює True. Отже, код всередині оператора if виконується. Якщо ми
            змінимо значення змінної number на від’ємне число, наприклад, на
            -10. То результат виконання програми буде наступним:
          </p>
          <p className="block mt-2 font-semibold">Number is negative.</p>
          <p className="block font-semibold">
            This statement is always executed.
          </p>
          <p className="block mt-2">
            Тут умова обчислюється як False. Отже, код всередині if
            пропускається, а код всередині else виконується.
          </p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор if…elif…else в Python
        </p>
        <p>
          Оператор <span className="bg-gray-100 pl-1 pr-1">if...else</span>
          використовується для виконання блоку коду серед двох альтернатив.
        </p>
        <p>
          Однак, якщо потрібно зробити вибір у випадках, коли альтернатив більше
          ніж дві, то використовується оператор
          <span className="bg-gray-100 pl-1 pr-1">if...elif...else</span>
        </p>
        <p>
          Синтаксис оператора
          <span className="bg-gray-100 pl-1 pr-1">if...elif...else</span>
          наступний:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            if умова1:
            <br />
            # блок коду 1
            <br />
            elif умова2:
            <br /># блок коду 2
            <br />
            else:
            <br /> # блок коду 3
          </code>
        </div>

        <p className="mt-2">Розглянемо детально:</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова1 обчислюється як True, то виконується блок коду 1.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова1 обчислюється як False, то обчислюється умова2.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова2 обчислюється як True, то виконується блок коду 2.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо умова2 обчислюється як False, то виконується блок коду 3.
          </li>
        </ul>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less7_3.png"
          />
          <p className="mt-2 font-semibold">
            Принцип роботи оператору if...elif...else
          </p>
        </div>

        <p className="mt-2">
          Розглянемо приклад використання оператора if...elif...else в Python:
        </p>

        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            number = 0
            <br />
            if number &gt; 0:
            <br />
            &nbsp;&nbsp;print('Positive number')
            <br />
            elif number == 0:
            <br />
            &nbsp;&nbsp; print('Zero')
            <br />
            else:
            <br />
            &nbsp;&nbsp;print('Negative number')
            <br />
            print('This statement is always executed')
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>Zero</p>
            <p>This statement is always executed</p>
          </code>
        </div>
        <p>
          Ми створили змінну number зі значенням 0. Ми маємо дві умови.
          Спрацьовує друга умова (обчислюється як True), і виконується код
          всередині оператора elif.
        </p>
        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffa6d87ab0d1def499522`}
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
export default Lesson7;

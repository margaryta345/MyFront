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
function Lesson17({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 16 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 16, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            Словник в Python
          </span>
          — це впорядкована колекція елементів, яка зберігає їх у вигляді пари
          “ключ-значення”. Ключ — це унікальний ідентифікатор, який пов’язаний
          із кожним значенням. Наприклад, якщо нам потрібно зберегти інформацію
          про країни та їх столиці, ми можемо створити словник з назвами країн
          як ключі та з назвами столиць як значеннями.
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less17_1.png"
          />
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення словника в Python
        </p>
        <p>Ось як просто можна створити словник в Python:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>
              capital_city =
              {`{"Nepal": "Kathmandu", "Ukraine": "Kyiv", "Italy": "Rome"}`}
            </p>
            <p>print(capital_city)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>{`{"Nepal": "Kathmandu", "Ukraine": "Kyiv", "Italy": "Rome"}`}</p>
        </div>

        <p>Тут ми створили словник capital_city, в якому:</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            <span className="font-semibold">Ключі</span>: "Nepal", "Ukraine",
            "Italy".
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            <span className="font-semibold">Значення</span>: "Kathmandu",
            "Kyiv", "Rome".
          </li>
        </ul>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>У даному прикладі
          ключі та значення мають рядковий тип, але взагалі вони можуть бути
          різних <span className="font-semibold pl-1 pr-1">типів</span>.
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Додавання елементів до словника
        </p>
        <p>
          Ми можемо додавати елементи до словника, використовуючи ім’я словника
          з <span className="bg-gray-100 pl-1 pr-1">[ ]</span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>{`{"Nepal": "Kathmandu", "Ukraine": "Kyiv", "Italy": "Rome"}`}</p>
            <p>print("Initial Dictionary: ",capital_city)</p>
            <p>capital_city["Japan"] = "Tokyo"</p>
            <p>print("Updated Dictionary: ",capital_city)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Initial Dictionary: {`{"Nepal": "Kathmandu", "Italy": "Rome"}`}</p>
          <p>
            Updated Dictionary:
            {`{"Nepal": "Kathmandu", "Italy": "Rome", "Japan": "Tokyo" }`}
          </p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Зміна значень у словнику
        </p>
        <p>
          Ми також можемо використати
          <span className="bg-gray-100 pl-1 pr-1">[ ]</span> для зміни значення,
          пов’язаного з певним ключем. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>student_id = {`{111: "Eric", 112: "Kyle", 113: "Butters"}`}</p>
            <p>print("Initial Dictionary: ", student_id)</p>
            <p>student_id[112] = "Stan"</p>
            <p>print("Updated Dictionary: ", student_id)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>
            Initial Dictionary:{`{111: 'Eric', 112: 'Kyle', 113: 'Butters'}`}
          </p>
          <p>
            Updated Dictionary:{`{111: 'Eric', 112: 'Stan', 113: 'Butters'}`}
          </p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Доступ до елементів зі словника
        </p>
        <p>
          В Python ключі використовуються для доступу до відповідних значень.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>student_id = {`{111: "Eric", 112: "Kyle", 113: "Butters"}`}</p>
            <p>print(student_id[111])</p>
            <p>print(student_id[113])</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Eric</p>
          <p>Butters</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>Тут ми використали
          ключі для доступу до відповідних значень. Якщо спробувати отримати
          доступ до значення неіснуючого ключа, Python видасть помилку.
          <span className="font-semibold pl-1 pr-1">KeyError: 211</span>.
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Видалення елементів зі словника
        </p>
        <p>
          В Python оператор <span className="font-semibold">del</span>
          використовується для видалення елемента зі словника. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>student_id = {`{111: "Eric", 112: "Kyle", 113: "Butters"}`}</p>
            <p>print("Initial Dictionary: ", student_id)</p>
            <p>del student_id[111]</p>
            <p>print("Updated Dictionary ", student_id)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>
            Initial Dictionary:{`{111: 'Eric', 112: 'Kyle', 113: 'Butters'}`}
          </p>
          <p>Updated Dictionary {`{112: 'Kyle', 113: 'Butters'}`}</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>Оператор
          <span className="font-semibold pl-1 pr-1">del </span>видаляє елемент,
          пов’язаний із ключем 111. Ми також можемо видалити весь словник за
          допомогою оператора
          <span className="font-semibold pl-1 pr-1">del</span>.
        </div>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less17_2.png"
          />
        </div>
        <p className="mt-2 font-semibold">
          Методи для роботи зі словниками в Python
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Перевіряємо, чи знаходиться ключ у словнику
        </p>

        <p>
          Ми можемо перевірити, чи знаходиться ключ у словнику чи ні,
          використовуючи ключове слово
          <span className="bg-gray-100 pl-1 pr-1">in</span>. Зверніть увагу, що
          перевірка проводиться лише для ключів, але не для значень.
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>squares = {`{1: 1, 3: 9, 5: 25, 7: 49, 9: 81}`}</p>
            <p># Перевірка ключа</p>
            <p>print(1 in squares) # виведе True</p>
            <p># Перевірка ключа</p>
            <p>print(2 not in squares) # виведе True</p>
            <p># Перевірка ключа</p>
            <p>
              print(49 in squares) # виведе False, оскільки перевірка
              проводиться лише для ключів
            </p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>True</p>
          <p>True</p>
          <p>False</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">Ітерація по словнику</p>
        <p>Ми можемо перебирати ключі у словнику за допомогою циклу for.</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Ітерація по словнику</p>
            <p>squares ={`{1: 1, 3: 9, 5: 25, 7: 49, 9: 81}`}</p>
            <p>for i in squares:</p>
            <p>&nbsp;&nbsp;print(squares[i])</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>1</p>
          <p>9</p>
          <p>25</p>
          <p>49</p>
          <p>81</p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffe7187ab0d1def49952b`}
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
export default Lesson17;

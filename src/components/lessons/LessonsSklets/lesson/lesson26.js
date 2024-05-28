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
function Lesson26({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 25 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 25, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1 ">Пакет</span>— це
          це каталог (папка), який може містити інші каталоги або модулі. Модуль
          — це файл із вихідним кодом, який має розширення .py. Пакети
          використовуються для формування простору імен, що дозволяє працювати з
          модулями через вказування рівня вкладеності (за допомогою оператора
          .). Для імпортування пакетів використовується той самий синтаксис, що
          й для роботи з модулями.
        </p>
        <p className="mt-2">
          Припустимо, що ми розробляємо гру. Одна з можливих організацій наших
          пакетів та модулів може бути наступною:
        </p>
        <div className="mt-8 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less26_1.png"
          />
        </div>

        <div className="bg-gray-100 mt-10 mb-10 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Каталог повинен містити файл з ім’ям __init__.py, щоб Python міг
          розглядати цей каталог як пакет. Даний файл можна залишити порожнім,
          але зазвичай туди поміщають код ініціалізації цього пакета.
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Імпорт модуля із пакета в Python
        </p>
        <p>
          В Python ми можемо імпортувати модулі з пакетів, використовуючи крапку
          .. Наприклад, якщо ми хочемо імпортувати модуль start із
          вищенаведеного пакета game, нам потрібно написати наступне:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>import game.Level.start</code>
        </div>
        <p>
          Тепер, якщо цей модуль містить функцію з ім’ям select_difficulty(), то
          для її використання слід вказати повне посилання:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>game.Level.start.select_difficulty(2)</code>
        </div>

        <p>
          Якщо вищенаведене посилання на функцію здається довгим, то ми можемо
          імпортувати модуль наступним чином:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>from game.Level import start</code>
        </div>
        <p>І потім викликати функцію буде простіше:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>start.select_difficulty(2)</code>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Імпорт лише необхідного функціоналу з пакета
        </p>
        <p>
          Інший спосіб імпортувати тільки необхідний функціонал (функцію, клас
          або змінну) із модуля всередині пакета:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>from game.Level.start import select_difficulty</code>
        </div>
        <p>Тепер ми можемо безпосередньо викликати цю функцію:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>select_difficulty(2)</code>
        </div>
        <p>
          Хоча цей спосіб виглядає простіше, але його не рекомендується
          використовувати. Вказування повного простору імен дозволяє уникнути
          плутанини та запобігає конфлікту імен.
        </p>
        <p>
          Під час імпорту пакетів Python переглядає список каталогів, визначених
          в sys.path.
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
export default Lesson26;

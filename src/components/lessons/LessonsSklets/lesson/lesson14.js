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
function Lesson14({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 13 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 13, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1">
            Область видимості змінної
          </span>
          — вказує область, в якій ми можемо отримати доступ до змінної. В
          Python ми можемо оголошувати змінні у трьох різних областях видимості:
          локальній, глобальній та нелокальній.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Локальні змінні в Python
        </p>
        <p>
          Коли ми оголошуємо змінні всередині функції, ці змінні матимуть
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            локальну область видимості
          </span>
          . Ми не можемо отримати доступ до них поза межами функції. Ці типи
          змінних називаються
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            локальними змінними
          </span>
          . Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>def greet():</p>
            <p>&nbsp;&nbsp;# Локальна змінна </p>
            <p>&nbsp;&nbsp;message = 'Hello'</p>
            <p>&nbsp;&nbsp;print('Local', message)</p>
            <p>greet()</p>
            <p>
              # Намагаємося отримати доступ до змінної message поза функцією
              greet()
            </p>
            <p>print(message)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Local Hello</p>
          <p>NameError: name 'message' is not defined</p>
        </div>
        <p>
          Тут змінна <span className="font-semibold ml-1 mr-1">message</span> є
          локальною змінною функцією greet(), тому доступ до неї можливий лише
          всередині цієї функції. Саме тому в результаті ми побачили
          повідомлення про помилку, коли спробували отримати доступ до змінної
          <span className="font-semibold ml-1 mr-1">message</span> поза функцією
          greet().
        </p>
        <p>
          Для вирішення цієї проблеми ми можемо зробити змінну
          <span className="font-semibold ml-1 mr-1">message</span> глобальною.
        </p>

        <p className="mt-2 text-2xl font-semibold mb-4">
          Глобальні змінні в Python
        </p>
        <p>
          В Python змінна, оголошена поза функцією або у глобальній області
          видимості, називається
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            глобальною змінною
          </span>
          . Це означає, що глобальна змінна може бути доступна як всередині, так
          і зовні функції.
        </p>
        <p>Розглянемо приклад створення глобальної змінної в Python:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Оголошуємо глобальну змінну</p>
            <p>message = 'Hello'</p>
            <p>def greet():</p>
            <p>&nbsp;&nbsp;# Оголошуємо локальну змінну </p>
            <p>&nbsp;&nbsp;print('Local', message)</p>
            <p>greet()</p>
            <p>print('Global', message)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Local Hello</p>
          <p>Global Hello</p>
        </div>
        <p>
          На цей раз ми можемо отримати доступ до змінної message ззовні функції
          greet(), оскільки це глобальна змінна
        </p>

        <p className="mt-2 text-2xl font-semibold mb-4">
          Нелокальні змінні в Python
        </p>
        <p>
          В Python
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            нелокальні змінні
          </span>
          використовуються у вкладених функціях, локальна область видимості яких
          не визначена. Це означає, що змінна не знаходиться ні в локальній, ні
          в глобальній області видимості.
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            Ключове слово nonlocal
          </span>
          використовується для створення нелокальних змінних. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Зовнішня функція </p>
            <p>def outer():</p>
            <p>&nbsp;&nbsp;message = 'local'</p>
            <p>&nbsp;&nbsp; # Вкладена функція </p>
            <p>&nbsp;&nbsp;def inner():</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;# Оголошуємо нелокальну змінну</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;nonlocal message</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;message = 'nonlocal'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;print("inner:", message)</p>
            <p>&nbsp;&nbsp;inner()</p>
            <p>&nbsp;&nbsp;print("outer:", message)</p>
            <p>outer()</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>inner: nonlocal</p>
          <p>outer: nonlocal</p>
        </div>
        <p>
          Тут функція inner() є вкладеною функцією. Ми використали ключове слово
          nonlocal для створення нелокальної змінної. Функцію inner() визначено
          в області видимості функції outer().
        </p>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Якщо ми змінимо значення нелокальної змінної, зміни відобразяться в
          локальній змінній.
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6638abb98dab168597758d0a`}
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
export default Lesson14;

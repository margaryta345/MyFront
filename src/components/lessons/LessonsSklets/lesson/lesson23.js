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
function Lesson23({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 22 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 22, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1">Виняток</span>— це
          несподівана ситуація, яка відбувається під час виконання програми.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>divide_by_zero = 7 / 0</code>
        </div>
        <p>Цей рядок згенерує виняток, тому що ділити на 0 не можна.</p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Логічні помилки (винятки) в Python
        </p>

        <p className="mt-4">
          Помилки, що виникають під час виконання програми (після проходження
          синтаксичної перевірки), називаються
          <span className=" text-red-500 font-semibold mr-1">винятками</span>
          або
          <span className=" text-red-500 font-semibold mr-1">
            логічними помилками
          </span>
          .
        </p>

        <p>
          Наприклад, вони виникають, коли ми:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              намагаємося відкрити неіснуючий файл — генерується виняток
              FileNotFoundError;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              намагаємося ділити на нуль — генерується виняток
              ZeroDivisionError;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              намагаємося імпортувати неіснуючий модуль — генерується виняток
              ImportError
            </li>
          </ul>
        </p>
        <p className="mt-2">
          При виникненні подібних помилок під час виконання Python створює
          об’єкт винятку.
        </p>
        <p className="mt-2">
          Якщо помилка не була оброблена належним чином, виводиться інформація
          про цю помилку разом з подробицями, чому вона сталася.
        </p>
        <p className="mt-2">Подивимося, як Python обробляє подібні помилки:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            divide_numbers = 7 / 0
            <br />
            print(divide_numbers)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Traceback (most recent call last):
          <br />
          File {`"<string>"`}, line 1, in {`<module>`}
          <br />
          ZeroDivisionError: division by zero
        </div>
        <p>
          Тут, під час спроби виконання операції 7 / 0, програма генерує виняток
          ZeroDivisionError.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Вбудовані винятки в Python
        </p>
        <p>
          Некоректні операції можуть генерувати винятки. У Python існує багато
          вбудованих винятків, які генеруються при виникненні відповідних
          помилок.
        </p>
        <p className="mt-4">
          Ми можемо переглянути всі вбудовані винятки за допомогою функції
          local() наступним чином:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>print(dir(locals()['__builtins__']))</code>
        </div>
        <p>
          Тут locals()['__builtins__'] поверне модуль вбудованих винятків,
          функцій та атрибутів, а dir дозволить перерахувати ці атрибути у
          вигляді рядків.
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less23_1.png"
          />
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less23_2.png"
          />
          <p className="mt-2 font-semibold">
            Найбільш поширені вбудовані виняткі в Python
          </p>
        </div>

        <p>
          У разі потреби ми також можемо визначити власні винятки. Для роботи з
          винятками у Python використовуються оператори try, except та finally.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Помилки та винятки в Python
        </p>
        <p>
          Помилками зазвичай є помилки компіляції, синтаксичні помилки, помилки
          у логічній частині коду, несумісність бібліотек, нескінченна рекурсія
          тощо.
        </p>
        <p className="mt-2">
          Винятки можуть бути спіймані та оброблені програмою.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663a6fcad24fe3aae2918ccd`}
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
export default Lesson23;

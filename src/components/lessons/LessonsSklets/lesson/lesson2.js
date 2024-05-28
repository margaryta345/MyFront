import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { IoIosDoneAll } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../../axios";
import { fetchDoneSend } from "../../../../redux/slices/auth";
function Lesson2({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 1 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 1, value: true }));
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
          Версії інтерпретатора Python для різних операційних систем доступні
          для безкоштовного завантаження
          <a
            className="ml-1 text-red-500 font-semibold"
            href="https://www.python.org/downloads"
          >
            на офіційному сайті
          </a>
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less2_1.png"
          />
          <p className="mt-2 font-semibold">
            Офіційний сайт Python: вибір дистрибутива для вашої операційної
            системи
          </p>
        </div>

        <div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Завантаження і встановлення Python
          </p>
          <p>
            З’ясуйте розрядність вашої операційної системи. Перейдіть на сайт
            <a
              className="text-red-500 ml-1 font-semibold"
              href="https://www.python.org/downloads/"
            >
              https://www.python.org/downloads/
            </a>
            . Оберіть версію Python. Завантажте файл з розширенням .exe
            відповідної розрядності. Встановіть Python: відзначте рекомендований
            параметр Install launcher for all users. Не забудьте встановити
            прапорець Add Python 3.x to PATH (це полегшить правильне
            налаштування системи). Оберіть варіант налаштування установки
            Customize installation. Вкажіть каталог установки C:PythonX (де X -
            номер версії).
          </p>
        </div>
        <p>
          Перевіримо, чи Python успішно був встановлений на комп’ютер. Для цього
          натисніть сполучення клавіш Win+R на клавіатурі, введіть команду cmd і
          натисніть OK. У консольному вікні, що з’явилося, введіть команду
          python --version і натисніть Enter:
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less2_4.png"
          />
          <p className="mt-2 font-semibold">Запуск Python у командному рядку</p>
        </div>

        <div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Встановлення та запуск Python в IDE
          </p>
          <p>
            Можна використовувати будь-який редактор тексту для написання
            Python-скриптів. Головне зберегти отриманий текстовий файл з
            розширенням .py. Але використання IDE може зробити життя та роботу
            набагато простішою.
            <span className=" text-red-500 font-semibold"> IDE </span> — це
            програмне забезпечення, яке надає програмісту такий корисний
            функціонал, як підказки по коду, підсвічування та перевірка
            синтаксису, файлові менеджери та багато іншого для розробки програм.
            В цьому курсі ми будемо використовувати Visual Studio Code.
            Завантажте IDE з офіційного сайту
            <a
              className="text-red-500 font-semibold"
              href="https://code.visualstudio.com/"
            >
              {" "}
              Visual Studio Code
            </a>
            і встановіть стандартним способом для вашої операційної системи. Для
            зручного запуску коду на Python у Visual Studio Code можна
            встановити розширення, представлені в анімації.
          </p>
        </div>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/lesson2_4.gif"
          />
          <p className="mt-2 font-semibold">
            Visual Studio Code для Python у Windows
          </p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6635d2a28a57c07fa81e88bb`}
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
              onClick={() => onButtonClick()}
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
export default Lesson2;

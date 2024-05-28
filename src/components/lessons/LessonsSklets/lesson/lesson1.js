import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { IoIosDoneAll } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "../../../axios";
import { fetchDoneSend } from "../../../../redux/slices/auth";
function Lesson1({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 0 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 0, value: true }));
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
        <p className="text-3xl  mb-10 font-semibold">{name}</p>
        <div>
          <p className="mb-6">
            <span className="text-red-500 font-semibold">Python</span> –
            багатоцільова мова програмування, яка дозволяє писати код, що добре
            читається. Відносний лаконізм мови Python дозволяє створити
            програму, яка буде набагато коротше свого аналога, написаного на
            іншій мові. Python - багатоплатформова мова програмування. Це
            означає, що програми на Python можна запускати в різних операційних
            системах без будь-яких змін. Ще однією перевагою Python є його
            стандартна бібліотека, яка встановлюється разом з Python і містить
            готові інструменти для роботи з операційною системою,
            веб-сторінками, базами даних, різними форматами даних, для побудови
            графічного інтерфейсу програм тощо. Програми, написані на мові
            програмування Python, можуть бути як невеликими скриптами, так і
            складними системами.
          </p>
          <div>
            <p className="mt-6 text-xl font-semibold mb-4">Історія Python</p>
            <p>
              Мова Python була створена співробітником голландського інституту
              CWI
              <span className="text-red-500 font-semibold">
                Гвідо ван Россумом у 1991 році
              </span>
              . Деякі концепції для Python були взяті від мови програмування ABC
              (Гвідо брав участь у розробці цієї мови, орієнтованої на навчання
              програмування). Часто згадується, що ABC є попередником мови
              Python. Щодо вибору назви Python відомо цікавий факт. Гвідо ван
              Россум був шанувальником популярного на той час комедійного шоу
              BBC “Літаючий цирк Монті Пайтона”. Тому він вирішив взяти назву
              Python для нової мови програмування.
            </p>
          </div>
          <div>
            <p className="mt-6 text-xl font-semibold mb-4">Версії Python</p>
            <p>
              Мови програмування з часом змінюються - розробники додають в них
              нові можливості, а також виправляють помилки. Так з’являються
              різні версії мови. Наприклад, код написаний на Python 2 у
              більшості випадків не буде працювати у версії Python 3 без
              внесення додаткових змін. Основна команда розробників мови Python
              припиняє підтримку версії Python 2.x з 1 січня 2020 року. У
              посібнику використовується версія 3.x. Зокрема, усі приклади коду
              написані і протестовані для версій Python 3.4 і вище. Тобто,
              використання новіших версій інтерпретатора Python 3 не повинно
              викликати появу помилок при виконанні прикладів коду (де це
              необхідно, наводиться пояснення щодо версії, яка
              використовується). Якщо необхідно дізнатися, що і коли було додано
              у різні версії мови програмування Python,{" "}
              <a
                className="text-red-600 font-semibold"
                href="https://docs.python.org/3/whatsnew/"
              >
                відвідайте сторінку з документацією Python .
              </a>
            </p>
          </div>
          <div>
            <p className="mt-6 text-xl font-semibold mb-4">
              Python - інтерпретована мова програмування
            </p>
            <p>
              <span className="text-red-500 font-semibold"> Python </span> - це
              високорівнева інтерпретована мова програмування, на відміну від
              C++, яка є прикладом компільованої мови програмування. Назва
              Python відноситься як до мови програмування, так і до
              інтерпретатора - комп’ютерної програми, яка зчитує початковий код
              (написаний на Python) і виконує інструкції (команди).
            </p>
            <div>
              <p>
                <span className="text-red-500 font-semibold"> Компілятор </span>{" "}
                перекладає весь початковий код на машинну мову за один раз,
                потім машинний код виконується.
              </p>

              <div className="mt-6 mb-2 flex justify-center items-center flex-col">
                <img
                  className="hover:shadow-2xl"
                  alt="Compilprogramm"
                  src="/exampl1.png"
                />
                <p className="mt-2 font-semibold">
                  Виконання програми компілятором
                </p>
              </div>

              <p>
                <span className="text-red-500 font-semibold">
                  Інтерпретатор
                </span>
                перекладає програму з мови високого рівня у машинну мову рядок
                за рядком, виконуючи кожен з них.
              </p>
              <div className="mt-6 mb-2 flex justify-center items-center flex-col">
                <img
                  className="transition-transform hover:shadow-2xl "
                  alt="Interpritprogramm"
                  src="/exampl2.png"
                />

                <p className="mt-2 font-semibold">
                  Виконання програми інтерпретатором
                </p>
              </div>
              <p>
                Інтерпретатор Python починає свою роботу у верхній частині
                файла, перекладає перший рядок на машинну мову, а потім виконує
                його. Цей процес повторюється до кінця файла.
              </p>
            </div>
          </div>

          <div>
            <p className="mt-6 text-xl font-semibold mb-4">
              Використання Python
            </p>
            <p>
              Python використовується для різних цілей: для створення ігор і
              веб-застосунків, розробки внутрішніх інструментів для
              різноманітніх проектів. Мова також широко застосовується в
              науковій області для досліджень і розв’язування прикладних
              завдань. Python - це високорівнева інтерпретована мова
              програмування, на відміну від C++, яка є прикладом компільованої
              мови програмування. Назва Python відноситься як до мови
              програмування, так і до інтерпретатора - комп’ютерної програми,
              яка зчитує початковий код (написаний на Python) і виконує
              інструкції (команди).
            </p>
          </div>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ff93c87ab0d1def499519`}
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
export default Lesson1;

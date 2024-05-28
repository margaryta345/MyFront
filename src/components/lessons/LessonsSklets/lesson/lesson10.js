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
function Lesson10({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 9 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 9, value: true }));
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
            Оператор break
          </span>
          використовується для негайного завершення циклу.
        </p>
        <p>
          <span className=" text-red-500 font-semibold mr-1">
            Оператор continue
          </span>
          використовується для пропуску поточної ітерації
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Оператор break в Python
        </p>
        <p>
          <span className="text-red-500  mr-1 font-semibold">
            Оператор break
          </span>
          використовується для негайного завершення циклу.
        </p>
        <p className="mt-2 font-semibold">
          Синтаксис оператора break наступний:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>break</p>
          </code>
        </div>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less10_1.png"
          />
          <p className="mt-2 font-semibold">Робота оператора break в Python</p>
        </div>
        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор break та цикл for
        </p>
        <p>
          Ми можемо використовувати оператор break із циклом for для завершення
          виконання циклу при досягненні певної умови. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>for i in range(5):</p>
            <p>&nbsp;&nbsp;if i == 3:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break</p>
            <p>&nbsp;&nbsp; print(i)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>0</p>
          <p>1</p>
          <p>2</p>
        </div>
        <p>
          Тут ми використали цикл for для виводу значення змінної
          <span className="bg-gray-100 mr-1 ml-1 ">i</span>. Зверніть увагу на
          використання оператора break:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>&nbsp;&nbsp;if i == 3:</p>
            <p>&nbsp;&nbsp;break</p>
          </code>
        </div>
        <p>
          Коли <span className="bg-gray-100 mr-1 ml-1 ">i</span>. дорівнює
          <span className="font-semibold mr-1 ml-1 ">3</span>, оператор break
          перериває виконання циклу. Отже, все, що після значення
          <span className="font-semibold mr-1 ml-1 ">2</span> — не виводиться на
          екран.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор break та цикл while
        </p>
        <p>
          Ми також можемо завершити виконання циклу while за допомогою оператора
          break. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>i = 1</p>
            <p>while i &lt;= 10:</p>
            <p>&nbsp;&nbsp;print('6 *', i, '=', 6 * i)</p>
            <p>&nbsp;&nbsp;if i &gt;= 5:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;break</p>
            <p>&nbsp;&nbsp;i = i + 1</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p> 6 * 1 = 6</p>
          <p> 6 * 2 = 12</p>
          <p> 6 * 3 = 18</p>
          <p> 6 * 4 = 24</p>
          <p> 6 * 5 = 30</p>
        </div>
        <p>
          Тут ми використали цикл while, щоб знайти перші
          <span className="font-semibold mr-1 ml-1 ">5</span> множників для
          числа
          <span className="font-semibold mr-1 ml-1 ">6</span>. Зверніть увагу на
          використання оператора break:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>if i &gt;= 5:</p>
            <p>&nbsp;&nbsp;break</p>
          </code>
        </div>
        <p>
          Якщо i більше або дорівнює
          <span className="font-semibold mr-1 ml-1 ">5</span>, цикл while
          завершується.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Оператор continue в Python
        </p>

        <p>
          <span className="text-red-500  mr-1 font-semibold">
            Оператор continue
          </span>
          використовується для пропуску поточної ітерації циклу, та переходу до
          наступної ітерації.
        </p>
        <p className="mt-2 font-semibold">Синтаксис оператора continue:</p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>continue</p>
          </code>
        </div>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less10_2.png"
          />
          <p className="mt-2 font-semibold">
            Робота оператора continue в Python
          </p>
        </div>
        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор continue та цикл for
        </p>
        <p>
          Ми можемо використовувати оператор continue із циклом for, щоб
          пропустити поточну ітерацію циклу та перейти до наступної. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>for i in range(5):</p>
            <p>&nbsp;&nbsp;if i == 3:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue</p>
            <p>&nbsp;&nbsp; print(i)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>0</p>
          <p>1</p>
          <p>2</p>
          <p>4</p>
        </div>
        <p>
          ут ми використали цикл for для виводу значення змінної
          <span className="bg-gray-100 mr-1 ml-1 ">i</span>. верніть увагу на
          використання оператора continue:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>&nbsp;&nbsp;if i == 3:</p>
            <p>&nbsp;&nbsp;continue</p>
          </code>
        </div>
        <p>
          Коли <span className="bg-gray-100 mr-1 ml-1 ">i</span>. виконується
          оператор continue та значення
          <span className="font-semibold mr-1 ml-1 ">3</span> не виводиться на
          екран.
        </p>

        <p className="mt-6 text-xl font-semibold mb-4">
          Оператор continue та цикл while
        </p>
        <p>
          В Python ми також можемо пропустити поточну ітерацію циклу while,
          використовуючи оператор continue. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Виводимо на екран непарні числа від 1 до 10</p>
            <p>num = 0</p>
            <p>while i &lt; 10:</p>
            <p>&nbsp;&nbsp;num += 1</p>
            <p>&nbsp;&nbsp;if (num % 2) == 0:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;continue</p>
            <p>&nbsp;&nbsp;print(num)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>1</p>
          <p>3</p>
          <p>5</p>
          <p>7</p>
          <p>9</p>
        </div>
        <p>
          Тут ми використали цикл while для виводу непарних чисел від
          <span className="font-semibold mr-1 ml-1 ">1</span> до
          <span className="font-semibold mr-1 ml-1 ">10</span>Зверніть увагу на
          використання оператора continue:
        </p>
        <div className="bg-gray-100 mt-2 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>if (num % 2) == 0:</p>
            <p>&nbsp;&nbsp;continue</p>
          </code>
        </div>
        <p>
          Якщо число
          <span className="font-semibold mr-1 ml-1 "> (num) </span>парне, то
          оператор continue пропускає поточну ітерацію і переходить до виконання
          наступної.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6635f93451078fe0ca8b93d8`}
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
export default Lesson10;

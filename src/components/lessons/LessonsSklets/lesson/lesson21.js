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
function Lesson21({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 20 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 20, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1">Файл</span>— це
          контейнер для зберігання даних. Коли ми хочемо читати з файлу або
          записувати в нього, нам потрібно спочатку його відкрити. Після того,
          як ми закінчили читання/запис, нам потрібно закрити файл, щоб
          звільнити ресурси, пов’язані з ним.
        </p>

        <p className="mt-4">
          Таким чином, в Python операції з файлами виконуються в наступному
          порядку:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              відкрити файл;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              читання або запис;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              закрити файл.
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Відкрити файл в Python
        </p>
        <p>
          В Python для відкриття файлів використовується
          <span className="font-semibold ml-1 mr-1"> метод open()</span>.
          Наприклад, у нас є файл test.txt з наступним вмістом:
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less21_1.png"
          />
        </div>

        <p className="mt-4">
          Тепер спробуємо відкрити цей файл за допомогою функції open():
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Відкриваємо файл у поточному каталозі
            <br />
            ile1 = open("test.txt")
          </code>
        </div>
        <p>
          Тут ми створили файловий об’єкт з ім’ям file1. Його можна використати
          для роботи з файлами та каталогами.
        </p>
        <p>
          За замовчуванням файли відкриті в режимі читання (не можуть бути
          змінені). Вищенаведений код рівнозначний:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>file1 = open("test.txt", "r")</code>
        </div>
        <p>Тут "r" означає, що файл відкритий для читання.</p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less21_2.png"
          />
          <p className="mt-2 font-semibold">
            Ось кілька простих прикладів того, як відкрити файл у різних
            режимах:
          </p>
        </div>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            file1 = open("test.txt") # рівнозначний 'r' або 'rt'
            <br />
            file1 = open("test.txt",'w') # запис у текстовому режимі
            <br />
            file1 = open("img.bmp",'r+b') # читання та запис у двійковому режимі
          </code>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Читання файлів в Python
        </p>
        <p>
          В Python для читання файлів використовується метод read(). Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Відкриваємо файл
            <br />
            file1 = open("test.txt", "r")
            <br />
            # Читаємо файл
            <br />
            read_content = file1.read()
            <br />
            print(read_content)
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          This is a test file.
          <br />
          Hello from the test file.
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Тут file1.read() читає файл test.txt та зберігає його в змінну
          read_content.
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Закрити файл в Python
        </p>
        <p>
          Коли ми перестали виконувати операції з файлом, нам потрібно його
          правильно закрити. Закриття файлу звільняє ресурси, які були
          використані для роботи з ним. Це робиться за допомогою методу close().
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Відкриваємо файл
            <br />
            file1 = open("test.txt", "r")
            <br />
            # Читаємо файл
            <br />
            read_content = file1.read()
            <br />
            print(read_content)
            <br />
            # Закриваємо файл
            <br />
            file1.close()
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          This is a test file.
          <br />
          Hello from the test file.
        </div>
        <p>
          Тут ми використали метод close() для закриття файлу. Після виконання
          операції з файлом ми завжди маємо закривати файл; це важливий момент.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Обробка винятків у файлах
        </p>
        <p>
          Якщо під час виконання будь-якої операції з файлом виникає виняток,
          програма завершує виконання, не закриваючи при цьому файли. Одним із
          рішень в цій ситуації є використання блоку try...finally. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp;file1 = open("test.txt", "r")
            <br />
            &nbsp;&nbsp;read_content = file1.read()
            <br />
            &nbsp;&nbsp;print(read_content)
            <br />
            finally:
            <br />
            &nbsp;&nbsp;# Закриваємо файл
            <br />
            &nbsp;&nbsp;file1.close()
          </code>
        </div>

        <p>
          Тут ми закрили файл у блоці finally, оскільки блок finally завжди
          виконується, то файл буде закритий, навіть якщо згенерується виняток.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Використання синтаксису with…open
        </p>
        <p>
          В Python ми можемо використовувати синтаксис with...open для
          автоматичного закриття файлу. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            with open("test.txt", "r") as file1:
            <br />
            &nbsp;&nbsp;read_content = file1.read()
            <br />
            &nbsp;&nbsp;print(read_content) try:
          </code>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Оскільки в цьому варіанті не потрібно турбуватися про закриття файлу,
          рекомендується завжди використовувати синтаксис with...open.
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Запис у файл в Python
        </p>
        <p>
          При записі у файл необхідно пам’ятати дві речі:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Якщо ми намагаємося відкрити неіснуючий файл, створюється новий
              файл.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Якщо файл уже існує, його вміст видаляється, а до файлу додається
              новий вміст.
            </li>
          </ul>
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less21_3.jpg"
          />
          <p className="mt-2 font-semibold">
            Методи для роботи з файлами в Python
          </p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663000c487ab0d1def499532`}
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
export default Lesson21;

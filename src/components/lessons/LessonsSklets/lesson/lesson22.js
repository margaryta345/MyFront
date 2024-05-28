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
function Lesson22({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 21 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 21, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1">Каталог </span>— це
          набір файлів та підкаталогів. Каталог усередині каталогу називається
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            підкаталогом
          </span>
          . В Python є
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            модуль os
          </span>
          , який надає багато корисних методів для роботи з каталогами та
          файлами.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Поточний каталог в Python
        </p>

        <p className="mt-4">
          Ми можемо вивести поточний каталог за допомогою
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            методу getcwd()
          </span>
          модуля os. Цей метод повертає поточний робочий каталог як рядок.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            print(os.getcwd())
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          C:\Program Files\PyScripter
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Зміна каталогу в Python
        </p>
        <p>
          В Python ми можемо змінити поточний робочий каталог за допомогою
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            методу chdir()
          </span>
          . Новий шлях, який ми хочемо використати, потрібно вказати під час
          виклику цього методу у вигляді рядка.
        </p>
        <p>
          При цьому для розділення елементів шляху ми можемо використовувати як
          скісну риску /, так і обернену скісну риску \. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            # Зміна каталогу
            <br />
            os.chdir('C:\\Python33')
            <br />
            print(os.getcwd())
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          C:\Python33
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Список каталогів та файлів в Python
        </p>
        <p>
          В Python ми можемо змінити поточний робочий каталог за допомогою Всі
          файли та підкаталоги всередині каталогу можна отримати за допомогою
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            методу listdir()
          </span>
          . Цей метод приймає шлях і повертає список підкаталогів та файлів за
          вказаним шляхом.
        </p>
        <p>
          Якщо шлях не вказано, повертається список підкаталогів та файлів із
          поточного робочого каталогу.
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            print(os.getcwd())
            <br />
            C:\Python33
            <br />
            # Список всіх підкаталогів
            <br />
            os.listdir()
            <br />
            ['DLLs',
            <br />
            'Doc',
            <br />
            'include',
            <br />
            'Lib',
            <br />
            'libs',
            <br />
            'LICENSE.txt',
            <br />
            'NEWS.txt',
            <br />
            'python.exe',
            <br />
            'pythonw.exe',
            <br />
            'README.txt',
            <br />
            'Scripts',
            <br />
            'tcl',
            <br />
            'Tools']
            <br />
            os.listdir('G:\\')
            <br />
            ['$RECYCLE.BIN',
            <br />
            'Movies',
            <br />
            'Music',
            <br />
            'Photos',
            <br />
            'Series',
            <br />
            'System Volume Information']
          </code>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення нового каталогу в Python
        </p>
        <p>
          В Python ми можемо створити новий каталог за допомогою
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            методу mkdir()
          </span>
          . Цей метод приймає шлях до нового каталогу. Якщо повний шлях не
          вказано, новий каталог створюється у поточному робочому каталозі.
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            os.mkdir('test')
            <br />
            os.listdir()
            <br />
            ['test']
          </code>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Перейменування каталогу чи файлу в Python
        </p>
        <p>
          В Python ми можемо перейменувати каталог або файл за допомогою
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            методу rename()
          </span>
          . Даний метод приймає два основні аргументи:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Старе ім’я як перший аргумент.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Нове ім’я як другий аргумент.
            </li>
          </ul>
        </p>
        <p>Наприклад:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            os.listdir()
            <br />
            ['test']
            <br />
            # Перейменування каталогу
            <br />
            os.rename('test','new_one')
            <br />
            os.listdir()
            <br />
            ['new_one']
          </code>
        </div>
        <p>
          Тут каталог 'test' перейменовується в 'new_one' за допомогою методу
          rename().
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Видалення каталогу чи файлу в Python
        </p>
        <p>
          В Python ми можемо використовувати{" "}
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            метод remove()
          </span>{" "}
          або{" "}
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            метод rmdir()
          </span>
          для видалення файлу або каталогу.
        </p>
        <p>Спочатку скористаємося методом remove() для видалення файлу:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            # Видалення файлу "myfile.txt"
            <br />
            os.remove("myfile.txt")
          </code>
        </div>
        <p>
          Тепер скористаємося методом rmdir() для видалення порожнього каталогу:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import os
            <br />
            # Видалення порожнього каталогу "mydir"
            <br />
            os.rmdir("mydir")
          </code>
        </div>
        <p>
          Щоб видалити каталог, ми можемо використати метод rmtree() з модуля
          shutil. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            import shutil
            <br />
            # Видалення каталогу "mydir" та його вмісту
            <br />
            shutil.rmtree("mydir")
          </code>
        </div>
        <p>
          Важливо зазначити, що ці функції безповоротно видаляють файли або
          каталоги, тому при їх використанні потрібно бути обережними.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663a6fc8d24fe3aae2918ccc`}
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
export default Lesson22;

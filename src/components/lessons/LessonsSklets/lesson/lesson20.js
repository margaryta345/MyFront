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
function Lesson20({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 19 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 19, value: true }));
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
          При автоматизації дуже часто треба буде працювати з рядками, так як
          конфігураційний файл, виведення команд і команди, що відправляються -
          це рядки. Знання різних методів (дій), які можна застосовувати до
          рядків, допомагає ефективно працювати з ними.
        </p>
        <p className="mt-4">
          Рядки незмінний тип даних, тому всі методи, які перетворюють рядок
          повертають новий рядок, а вихідний рядок залишається незмінним.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Методи upper, lower, swapcase, capitalize
        </p>
        <p>
          <span className="text-red-500 font-semibold mr-1">
            Методи upper ,lower,swapcase,capitalize
          </span>
          виконують перетворення регістра рядка:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'FastEthernet'
            <br />
            string1.upper()
            <br />
            string1.lower()
            <br />
            string1.swapcase()
            <br />
            string2 = 'tunnel 0'
            <br />
            string2.capitalize()
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          'FASTETHERNET'
          <br />
          'fastethernet'
          <br />
          'fASTeTHERNET'
          <br />
          'Tunnel 0'
        </div>
        <p>
          Методи не перетворюють вихідний рядок, а повертають новий із виконаним
          перетворенням. Це означає, що треба не забути записати його в якусь
          змінну (можна в ту саму).
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = string1.upper()
            <br />
            print(string1)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          FASTETHERNET
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">Метод join</p>
        <p>
          <span className="text-red-500 font-semibold mr-1"> Метод join </span>
          повертає рядок, який є об'єднанням рядків у послідовності рядків,
          переданої як аргумент. Між елементами в об'єднанні рядків
          проставляється роздільник.
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            vlans = ['10', '20', '30']
            <br />
            sep = ","
            <br />
            sep.join(vlans)
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          '10,20,30'
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          Об'єднання рядків без роздільника:
          <code>
            <br />
            mac_parts = ["AAAA", "BBBB", "CCCC"]
            <br />
            "".join(mac_parts)
            <br />
            'AAAABBBBCCCC'
          </code>
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">Метод count</p>
        <p>
          <span className="text-red-500 font-semibold mr-1">Метод count </span>
          використовується для підрахунку того, скільки разів символ або
          підрядок зустрічаються у рядку:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'Hello, hello, hello, hello'
            <br />
            string1.count('hello')
            <br />
            string1.count('ello')
            <br />
            string1.count('l')
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          3
          <br />
          4
          <br />8
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">Метод find</p>
        <p>
          <span className="text-red-500 font-semibold mr-1"> Методу find </span>
          можна передати підрядок або символ, і він покаже, на якій позиції
          знаходиться перший символ підрядка (перший збіг):
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'interface FastEthernet0/1'
            <br />
            string1.find('Fast')
            <br />
            string1[string1.find('Fast')::]
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          10
          <br />
          'FastEthernet0/1'
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          Якщо збіг не виявлено, метод find повертає -1.
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">
          Методи startswith, endswith
        </p>
        <p>
          Перевірка на те, чи починається чи закінчується рядок на певні символи
          <span className="text-red-500 font-semibold ml-1 mr-1">
            (методи startswith, endswith)
          </span>
          :
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'FastEthernet0/1'
            <br />
            string1.startswith('Fast')
            <br />
            string1.startswith('fast')
            <br />
            string1.endswith('0/1')
            <br />
            string1.endswith('0/2')
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          True
          <br />
          False
          <br />
          True
          <br />
          False
        </div>
        <p>
          Методам startswith і endswith можна передавати кілька значень
          (обов'язково як кортеж):
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            "test".startswith(("r", "t"))
            <br />
            "test".startswith(("r", "a"))
            <br />
            "rtest".startswith(("r", "a"))
            <br />
            "rtest".endswith(("r", "a"))
            <br />
            "rtest".endswith(("r", "t"))
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          True
          <br />
          False
          <br />
          True
          <br />
          False
          <br />
          True
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">Метод replace</p>
        <p>
          Заміна послідовності символів у рядку на іншу послідовність
          <span className="text-red-500 font-semibold ml-1 mr-1">
            (метод replace)
          </span>
          :
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'FastEthernet0/1'
            <br />
            string1.replace('Fast', 'Gigabit')
            <br />
            line = "aabb.cc10.a1a0"
            <br />
            line.replace("a", "A")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          'GigabitEthernet0/1'
          <br />
          'AAbb.cc10.A1A0'
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">Метод split</p>
        <p>
          <span className="text-red-500 font-semibold ml-1 mr-1">
            Метод split
          </span>
          розбиває рядок на частини, використовуючи як роздільник якийсь символ
          (або символи) та повертає список рядків:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            string1 = 'switchport trunk allowed vlan 10,20,30,100'
            <br />
            commands = string1.split()
            <br />
            print(commands)
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          ['switchport', 'trunk', 'allowed', 'vlan', '10,20,30,100']
        </div>
        <p className="mt-4">
          У прикладі вище string1.split розбиває рядок за пробілом і повертає
          список рядків. Список записаний у змінну commands.
        </p>
        <p>
          Це не повний список методів для роботи з рядками. З повним списпок ви
          можете ознайомитись
          <a
            className="text-red-500 font-semibold ml-1"
            href="https://docs.python.org/3/library/stdtypes.html#string-methods"
          >
            тут
          </a>
          .
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ff9a787ab0d1def49951e`}
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
export default Lesson20;

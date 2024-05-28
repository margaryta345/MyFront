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
function Lesson16({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 15 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 15, value: true }));
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
            Списки в Python
          </span>
          використовуються для одночасного зберігання багатьох даних. Список
          створюється шляхом розміщення елементів всередині квадратних дужок
          <span className="bg-gray-100 pl-1 pr-1">[ ]</span>, розділених комами.
          Список може містити будь-яку кількість елементів, і вони можуть бути
          різних типів (int, float, string тощо).
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення списку в Python
        </p>
        <p>
          Список створюється шляхом розміщення елементів всередині
          <span className="bg-gray-100 pl-1 pr-1">[ ]</span>, розділених комами.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Список із 3 цілих чисел</p>
            <p>numbers = [1, 2, 5]</p>
            <p>print(numbers)</p>
            <p># Результат: [1, 2, 5]</p>
          </code>
        </div>
        <p>
          Тут ми створили список з іменем
          <span className="bg-gray-100 pl-1 pr-1">numbers</span>, який містить 3
          цілочисельних елементи.
        </p>
        <p className="mt-4">
          Список може містити будь-яку кількість елементів і вони можуть бути
          різних типів (int, float, string тощо). Наприклад
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Порожній список</p>
            <p>my_list = []</p>
            <p>def add():</p>
            <p># Список із змішаними типами даних </p>
            <p>my_list = [1, "Hello", 3.4]</p>
          </code>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Доступ до елементів списку в Python
        </p>
        <p>
          В Python кожен елемент списку асоціюється з
          <span className="font-semibold pl-1 pr-1">індексом</span>. Ми можемо
          отримати доступ до елементів масиву, використовуючи номер індексу{" "}
          <span className="font-semibold pl-1 pr-1">(0, 1, 2,…)</span>.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ["Python", "Swift", "C++"]</p>
            <p># Отримуємо доступ до елемента під індексом 0</p>
            <p>print(languages[0]) # виведе Python</p>
            <p># Отримуємо доступ до елемента під індексом 2</p>
            <p>print(languages[2]) # виведе C++</p>
          </code>
        </div>
        <p>
          Тут бачимо, що кожен елемент списку пов’язаний з номером індексу. І ми
          використали індекс для доступу до елементів.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less16_1.png"
          />
          <p className="mt-2 font-semibold">Cхема звязку індексу та елементу</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Відлік елементів у списку завжди починається з індексу
          <span className="font-semibold pl-1 pr-1">0</span>. Звідси випливає,
          що перший елемент списку перебуває під індексом 0, а не 1
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Від’ємна індексація в Python
        </p>
        <p>
          Python дозволяє використовувати від’ємний індекс для своїх
          послідовностей. Індекс
          <span className="font-semibold pl-1 pr-1">-1</span> відноситься до
          останнього елемента,
          <span className="font-semibold pl-1 pr-1">-2</span>
          відноситься до передостаннього елемента і так далі. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ["Python", "Swift", "C++"]</p>
            <p># Отримуємо доступ до елемента під індексом 0</p>
            <p>print(languages[-1]) # виведе C++</p>
            <p># Отримуємо доступ до елемента під індексом 2</p>
            <p>print(languages[-3]) # виведе Python</p>
          </code>
        </div>
        <p>Детально:</p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less16_2.png"
          />
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Якщо вказаний індекс не існує у списку, Python видасть помилку
          <span className="font-semibold pl-1 pr-1">IndexError</span> .
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">Зріз списку в Python</p>
        <p>
          В Python за допомогою оператора
          <span className="bg-gray-100 pl-1 pr-1">:</span> можна отримати доступ
          відразу до групи елементів (а не тільки до одного). Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Зріз списку в Python</p>
            <p>my_list = ['p','r','o','g','r','a','m','i','z']</p>
            <p># Виводимо "зрізані" елементи з 2 по 4 індекс</p>
            <p>print(my_list[2:4])</p>
            <p># Виводимо "зрізані" елементи від індексу 5 і до кінця списку</p>
            <p>print(my_list[5:])</p>
            <p># Виводимо всі елементи списку</p>
            <p>print(my_list[:])</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>['o', 'g']</p>
          <p>['a', 'm', 'i', 'z']</p>
          <p>['p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z']</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          При виконанні зрізу в списках перший індекс є
          <span className="font-semibold">включаючим</span>, а кінцевий —
          <span className="font-semibold">виключаючим</span>.
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Додавання елементів до списку в Python
        </p>
        <p>
          В Python є відразу декілька методів для додавання елементів до списку.
        </p>
        <p className="mt-6 text-xl font-semibold mb-4">
          1. Використання методу append()
        </p>
        <p>Метод append() додає елемент в кінець списку. Наприклад:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>numbers = [21, 34, 54, 12]</p>
            <p>print("Before Append:", numbers)</p>
            <p># Використання методу append()</p>
            <p>numbers.append(32)</p>
            <p>print("After Append:", numbers)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Before Append: [21, 34, 54, 12]</p>
          <p>['a', 'm', 'i', 'z']</p>
          <p>After Append: [21, 34, 54, 12, 32]</p>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Тут функція append() додає 32 в кінець масиву.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          2. Використання методу extend()
        </p>
        <p>
          Метод extend() використовується для додавання всіх елементів одного
          списку до іншого. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>prime_numbers = [2, 3, 5]</p>
            <p>print("List1:", prime_numbers)</p>
            <p>even_numbers = [4, 6, 8]</p>
            <p>print("List2:", even_numbers)</p>
            <p># Об'єднання двох списків</p>
            <p>prime_numbers.extend(even_numbers)</p>
            <p>print("List after append:", prime_numbers)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>List1: [2, 3, 5]</p>
          <p>List2: [4, 6, 8]</p>
          <p>List after append: [2, 3, 5, 4, 6, 8]</p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Зміна значень елементів списку
        </p>
        <p>
          Списки в Python є <span className="font-semibold">змінюваними</span>.
          Це означає, що ми можемо змінювати елементи списку, надаючи їм нові
          значення за допомогою оператора
          <span className="bg-slate-100 pl-1 pr-1">=</span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ['Python', 'Swift', 'C++']</p>
            <p># Змінюємо значення третього елемента на 'C'</p>
            <p>languages[2] = 'C'</p>
            <p>print(languages)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>['Python', 'Swift', 'C']</p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Зміна значень елементів списку
        </p>
        <p className="mt-6 text-xl font-semibold mb-4">
          1. Використання оператора del
        </p>
        <p>
          В Python ми можемо використовувати оператор
          <span className="bg-slate-100 pl-1 pr-1">del</span> для видалення
          одного або кількох елементів зі списку. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>
              languages = ['Python', 'Swift', 'C++', 'C', 'Java', 'Rust', 'R']
            </p>
            <p># Видаляємо другий елемент зі списку</p>
            <p>del languages[1]</p>
            <p>print(languages)</p>
            <p># Видаляємо останній елемент зі списку</p>
            <p>del languages[-1]</p>
            <p>print(languages)</p>
            <p># Видаляємо перші два елементи зі списку</p>
            <p>del languages[0 : 2]</p>
            <p>print(languages)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>['Python', 'C++', 'C', 'Java', 'Rust', 'R']</p>
          <p>['Python', 'C++', 'C', 'Java', 'Rust']</p>
          <p>['C', 'Java', 'Rust']</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          2. Використання методу remove()
        </p>
        <p>
          Ми також можемо використовувати метод remove() для видалення елементів
          зі списку. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>
              languages = ['Python', 'Swift', 'C++', 'C', 'Java', 'Rust', 'R']
            </p>
            <p># Видаляємо 'Python' зі списку</p>
            <p>languages.remove('Python')</p>
            <p>print(languages)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>['Swift', 'C++', 'C', 'Java', 'Rust', 'R']</p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Методи для роботи зі списками в Python
        </p>
        <p>
          Розглянемо найчастіше використовувані методи для роботи зі списками в
          Python.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less16_3.png"
          />
          <p className="mt-2 font-semibold">
            Найчастіше використовувані методи для роботи зі списками в Python
          </p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          Поверхнева копія створює новий складений об’єкт, а потім (по
          можливості) вставляє в нього посилання на об’єкти, що знаходяться в
          оригіналі. Глибока копія створює новий складений об’єкт, а потім
          рекурсивно вставляє у нього копії об’єктів, що містяться в оригіналі.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Ітерація по списку в Python
        </p>
        <p>
          Ми можемо використовувати цикл for для перебору елементів списку.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ['Python', 'Swift', 'C++']</p>
            <p># Ітерація по списку</p>
            <p>for language in languages:</p>
            <p>print(language)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Python</p>
          <p>Swift</p>
          <p>C++</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Перевірка наявності елемента у списку
        </p>
        <p>
          Ключове слово <span className="bg-slate-100 pl-1 pr-1">in</span>
          використовується для перевірки того, чи існує елемент у списку, чи ні.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ['Python', 'Swift', 'C++']</p>
            <p>print('C' in languages)</p>
            <p>print('Python' in languages)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>False</p>
          <p>True</p>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          Тут:'C' — відсутній у списку languages, тому результатом є False, а
          'Python' — присутній у списку languages, тому результатом є True.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Довжина списку в Python
        </p>
        <p>
          <span className="text-red-500 font-semibold pl-1 pr-1">
            Функція len()
          </span>
          використовується для визначення кількості елементів у списку.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages = ['Python', 'Swift', 'C++']</p>
            <p>print("List: ", languages)</p>
            <p>print("Total Elements: ", len(languages))</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>List: ['Python', 'Swift', 'C++']</p>
          <p>Total Elements: 3</p>
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Абстракція списків в Python
        </p>
        <p>
          <span className="text-red-500 font-semibold  pl-1 pr-1">
            Абстракція списків (List Comprehension)
          </span>
          — це лаконічний спосіб створення списків. Абстракція списків
          складається з виразу, за яким слідує оператор for у квадратних дужках.
        </p>
        <p>
          Ось приклад створення списку, в якому кожен елемент підноситься до
          степеня 2:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>numbers = [number*number for number in range(1, 6)]</p>
            <p>print(numbers)</p>
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>[1, 4, 9, 16, 25]</p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffe6887ab0d1def49952a`}
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
export default Lesson16;

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
function Lesson18({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 17 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 17, value: true }));
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
            Множина (set) в Python
          </span>
          — це набір унікальних даних. Елементи множини не можуть дублюватися.
          Множина може містити будь-яку кількість елементів, і вони можуть бути
          різних типів (int, float, кортеж, рядки тощо). Але множина не може
          мати <span className="font-semibold">змінювані</span> елементи, такі
          як списки, словники або інші множини. Для створення множини всі
          елементи поміщають усередині фігурних дужок
          {}, розділених комами.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення множини в Python
        </p>
        <p>
          В Python для створення множини всі елементи поміщають усередині
          фігурних дужок <span className="bg-gray-100 pl-1 pr-1">{}</span>,
          розділених комами.
        </p>
        <p>
          Множина може містити будь-яку кількість елементів, і вони можуть бути
          різних типів (int, float, кортеж, рядки тощо). Але множина не може
          мати <span className="font-semibold">змінювані</span> елементи, такі
          як списки, словники або інші множини.
        </p>
        <p>Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Множина цілочисленного типу</p>
            <p>student_id = {(112, 114, 116, 118, 115)}</p>
            <p>print('Student ID:', student_id)</p>
            <p># Множина рядкового типу</p>
            <p>vowel_letters = {("a", "e", "i", "o", "u")}</p>
            <p>print('Vowel Letters:', vowel_letters)</p>
            <p># Множина змішаного типу</p>
            <p>mixed_set = {("Hello", 101, -2, "Bye")}</p>
            <p>print('Set of mixed data types:', mixed_set)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Student ID:{`{112, 114, 115, 116, 118}`}</p>
          <p>Vowel Letters:{`{'u', 'a', 'e', 'i', 'o'}`}</p>
          <p>Set of mixed data types:{`{'Hello', 'Bye', 101, -2}`}</p>
        </div>
        <p>
          Тут ми створили різні типи множин, помістивши всі елементи усередині
          фігурних дужок <span className="bg-gray-100 pr-1 pl-1">{}</span>.
        </p>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>При виконанні цього
          коду можна отримати результат з елементами в іншому порядку. Це
          відбувається через те, що множина не має певного порядку.
        </div>
        <p className="mt-4">
          Створення порожньої множини — справа нехитра. Порожні фігурні дужки
          створюють порожній словник у Python. А для створення
          <span className="font-semibold">порожньої множини</span>
          потрібно використати функцію set() без жодних аргументів. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Створення порожньої множини</p>
            <p>empty_set = set()</p>
            <p># Створення порожнього словника</p>
            <p>empty_dictionary = {}</p>
            <p># Перевірка типу даних empty_set</p>
            <p>print('Data type of empty_set:', type(empty_set))</p>
            <p># Перевірка типу даних dictionary_set</p>
            <p>
              print('Data type of empty_dictionary', type(empty_dictionary))
            </p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Data type of empty_set: {`<class 'set'>`}</p>
          <p>Data type of empty_dictionary{` <class 'dict'>`}</p>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>Тут
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              empty_set — порожня множина, створена за допомогою set();
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              empty_dictionary — порожній словник, створений за допомогою {}.
            </li>
          </ul>
          Нарешті ми використали функцію type() для визначення типу даних
          <span className="font-semibold mr-1 ml-1">empty_set</span> та
          <span className="font-semibold mr-1 ml-1">empty_dictionary</span>.
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Дублювання елементів у множині
        </p>
        <p>
          Подивимося, що станеться, якщо ми спробуємо включити в набір елементи,
          що дублюються.
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>numbers = {`{2, 4, 6, 6, 2, 8}`}</p>
            <p>print(numbers)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>{`{8, 2, 4, 6}`}</p>
        </div>
        <p>
          Тут бачимо, що у множині немає однакових елементів, оскільки вона може
          містити дублі.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Додавання, оновлення та видалення елементів множини в Python
        </p>
        <p>
          <span className="font-semibold">Множини змінювані</span>. Однак,
          оскільки вони невпорядковані, індексування не має сенсу. Ми не можемо
          отримати доступ або змінити елемент множини за допомогою індексації
          або зрізу. Тип даних set не підтримує цього.
        </p>
        <p className="mt-6 text-xl font-semibold mb-4">
          Додавання елемента до множини
        </p>
        <p className="mt-4">
          В Python <span className="font-semibold">метод add()</span>
          використовується для додавання елемента до множини. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>numbers = {`{21, 34, 54, 12}`}</p>
            <p>print('Initial Set:',numbers)</p>
            <p># Використання методу add() </p>
            <p>numbers.add(32)</p>
            <p>print('Updated Set:', numbers)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Initial Set: {`{34, 12, 21, 54}`}</p>
          <p>Updated Set: {`{32, 34, 12, 21, 54}`}</p>
        </div>
        <p className="mt-6 text-xl font-semibold mb-4">Оновлення множини</p>
        <p>
          В Python <span className="font-semibold">метод update()</span>
          використовується для оновлення множини елементів інших типів даних
          (списки, кортежі тощо). Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>companies = {`{'Lacoste', 'Ralph Lauren'}`}</p>
            <p>tech_companies = ['apple', 'google', 'apple']</p>
            <p>companies.update(tech_companies)</p>
            <p>print(companies)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>{`{'Lacoste', 'Ralph Lauren', 'apple', 'google'}`}</p>
        </div>
        <p className="mt-6 text-xl font-semibold mb-4">
          Видалення елемента з множини
        </p>
        <p>
          В Python <span className="font-semibold">метод discard()</span>
          використовується для видалення зазначеного елемента з множини.
          Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>languages ={` {'Swift', 'Java', 'Python'}`}</p>
            <p>print('Initial Set:',languages)</p>
            <p># Видалення 'Java' з множини</p>
            <p>removedValue = languages.discard('Java')</p>
            <p>print('Set after remove():', languages)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Initial Set: {`{'Python', 'Swift', 'Java'}`}</p>
          <p>Set after remove(): {`{'Python', 'Swift'}`}</p>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Ітерація по множині в Python
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>fruits = {`{"Apple", "Peach", "Mango"}`}</p>
            <p># Використовуємо цикл for для доступу до кожного елемента</p>
            <p>for fruit in fruits:</p>
            <p>&nbsp;&nbsp;print(fruit)</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Mango</p>
          <p>Peach</p>
          <p>Apple</p>
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Визначення кількості елементів множини
        </p>
        <p>
          В Python <span className="font-semibold">метод len()</span>
          використовується для визначення кількості елементів, присутніх у
          множині. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p>even_numbers = {`{2,4,6,8}`}</p>
            <p>print('Set:',even_numbers)</p>
            <p>print('Total Elements:', len(even_numbers))</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Set:{`{8, 2, 4, 6}`}</p>
          <p>Total Elements: 4</p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Операції з множинами в Python
        </p>
        <p className="mt-2">
          Python надає різні вбудовані методи для виконання математичних
          операцій з множинами, таких як об’єднання, перетин, різниця та
          симетрична різниця.
        </p>
        <p className="mt-6 text-xl font-semibold mb-4">Об’єднання множин</p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_1.png"
          />
          <p className="mt-2 font-semibold">
            Об’єднання двох множин A та B включає всі елементи множин A та B.
          </p>
        </div>

        <p>
          Для виконання операції об’єднання множин використовується оператор
          <span className="font-semibold">|</span> або#
          <span className="font-semibold">метод union()</span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Перша множина</p>
            <p>A = {`{1, 3, 5}`}</p>
            <p># Друга множина</p>
            <p>B = {`{0, 2, 4}`}</p>
            <p># Виконання операції об'єднання за допомогою |</p>
            <p>print('Union using |:', A | B)</p>
            <p># Виконання операції об'єднання за допомогою union()</p>
            <p>print('Union using union():', A.union(B))</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Union using |: {`{0, 1, 2, 3, 4, 5}`}</p>
          <p>Union using union(): {`{0, 1, 2, 3, 4, 5}`}</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>A | B та union()
          еквівалентні операції множини A ⋃ B.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">Перетин множин</p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_2.png"
          />
          <p className="mt-2 font-semibold">
            Перетин двох множин A і B включає загальні елементи між множинами A
            та B.
          </p>
        </div>

        <p>
          В Python для виконання операції перетину множин використовується
          оператор
          <span className="font-semibold">&</span> або
          <span className="font-semibold">метод intersection()</span>.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Перша множина</p>
            <p>A = {`{1, 3, 5}`}</p>
            <p># Друга множина</p>
            <p>B = {`{1, 2, 3}`}</p>
            <p># Виконання операції перетину за допомогою &</p>
            <p>print('Intersection using &:', A & B)</p>
            <p># Виконання операції перетину за допомогою intersection()</p>
            <p>
              print('Intersection using intersection():', A.intersection(B))
            </p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Intersection using &: {(1, 3)}</p>
          <p>Intersection using intersection(): {(1, 3)}</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>A & B і
          intersection() еквівалентні операції множини A ⋂ B.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">Різниця множин</p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_3.png"
          />
          <p className="mt-2 font-semibold">
            Різниця між двома множинами A і B включає елементи множини A, яких
            немає в множині B.
          </p>
        </div>

        <p>
          В Python для виконання операції різниці між двома множинами
          використовується оператор
          <span className="font-semibold">-</span> або
          <span className="font-semibold">метод difference()</span>. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Перша множина</p>
            <p>A = {`{2, 3, 5}`}</p>
            <p># Друга множина</p>
            <p>B = {`{1, 2, 6}`}</p>
            <p># Виконання операції різниці за допомогою -</p>
            <p>print('Difference using -:', A - B)</p>
            <p># Виконання операції різниці за допомогою difference()</p>
            <p>print('Difference using difference():', A.difference(B))</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Difference using -: {(3, 5)}</p>
          <p>Difference using difference(): {(3, 5)}</p>
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span> - B та
          A.difference(B) еквівалентні операції множини A - B.
        </div>

        <p className="mt-6 text-xl font-semibold mb-4">
          Симетрична різниця множин
        </p>
        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_4.png"
          />
          <p className="mt-2 font-semibold">
            Симетрична різниця двох множин A і B включає всі елементи A і B без
            спільних елементів.
          </p>
        </div>

        <p>
          В Python для виконання операції симетричної різниці між двома
          множинами використовується оператор
          <span className="font-semibold">^</span> або
          <span className="font-semibold">метод symmetric_difference()</span>.
          Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Перша множина</p>
            <p>A = {`{2, 3, 5}`}</p>
            <p># Друга множина</p>
            <p>B = {`{1, 2, 6}`}</p>
            <p># Виконання операції симетричної різниці за допомогою &</p>
            <p>print('using ^:', A ^ B)</p>
            <p>
              # Виконання операції симетричної різниці за допомогою
              symmetric_difference()
            </p>
            <p>
              print('using symmetric_difference():', A.symmetric_difference(B))
            </p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>using ^: {(1, 3, 5, 6)}</p>
          <p>using symmetric_difference(): {(1, 3, 5, 6)}</p>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Перевірка, чи є дві множини рівними
        </p>
        <p>
          В Python оператор <span className="font-semibold">==</span>
          використовується, щоб перевірити, чи рівні дві множини. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            <p># Перша множина</p>
            <p>A = {`{1, 3, 5}`}</p>
            <p># Друга множина</p>
            <p>B = {`{3, 5, 1}`}</p>
            <p># Перевіряємо, чи рівні дві множини</p>
            <p>if A == B:</p>
            <p>&nbsp;&nbsp;print('Set A and Set B are equal')</p>
            <p>else:</p>
            <p>&nbsp;&nbsp;print('Set A and Set B are not equal')</p>
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <p>Set A and Set B are equal</p>
        </div>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_5.png"
          />
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less18_6.png"
          />
          <p className="mt-2 font-semibold">
            Методи для роботи з множинами в Python
          </p>
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ffe7687ab0d1def49952c`}
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
export default Lesson18;

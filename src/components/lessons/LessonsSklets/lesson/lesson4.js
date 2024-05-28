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
function Lesson4({ module, name, mainPart }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 3 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 3, value: true }));
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
          <span className="text-red-500 font-semibold">Змінна </span>— це об’єкт
          (область) для зберігання даних. Python не має команди для оголошення
          змінної. Змінна створюється в той момент, коли ви вперше присвоюєте їй
          значення. Оператор присвоювання = використовується для присвоювання
          значень змінним. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p> number = 10</p>
          </code>
        </div>
        <p>
          Тут <span className="bg-gray-100 ">number </span>— це змінна, що
          зберігає значення 10.
        </p>
        <p>
          <span className="text-red-500 font-semibold">Константа в Python</span>
          — це особливий тип змінної, значення якої не можна змінити. У Python
          константи зазвичай оголошуються/визначаються в модулі (окремий файл,
          що містить змінні, функції та інше, який імпортується в основний
          файл).
        </p>
        <span className="text-red-500 font-semibold">Літерали Python </span> —
        це представлення фіксованих значень у програмі. Це можуть бути числа,
        символи, рядки тощо, наприклад, 'Hello, World!', 12, 23.0, 'C'.
        <p className="mt-6 text-xl font-semibold mb-4">
          Присвоювання значень змінним
        </p>
        <p>
          Оператор присвоювання = використовується для присвоювання значень
          змінним. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p> site_name = 'acode.com.ua'</p>
          </code>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">: </span>
          <span className="text-red-500 font-semibold">Python</span> — це мова з
          автоматичним визначенням типів, тому вам не потрібно явно вказувати
          тип змінної. Інтерпретатор автоматично розуміє, що acode.com.ua є
          рядком, тому надає змінній site_name тип string.
        </div>
        <p className="mt-6 text-xl font-semibold mb-4">
          Правила іменування змінних
        </p>
        <p>
          <span className="text-red-500 font-semibold">Правило №1</span>: Імена
          констант та змінних можуть складатися з комбінації букв нижнього (від
          a до z) або верхнього регістру (від A до Z) або цифр (від 0 до 9) або
          знаку підкреслення (_). Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>snake_case, MACRO_CASE, camelCase, CapWords2 </p>
          </code>
        </div>
        <p>
          <span className="text-red-500 font-semibold">Правило №2</span>:
          Вказуйте імена, які мають сенс. Наприклад, vowel зрозуміліше, ніж v.
        </p>
        <p>
          <span className="text-red-500 font-semibold">Правило №3</span>: Якщо
          хочете використовувати два слова як ім’я змінної, розділяйте їх за
          допомогою знаку підкреслення. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p>my_name current_salary </p>
          </code>
        </div>
        <p>
          <span className="text-red-500 font-semibold">Правило №4</span>: Python
          чутливий до регістру. num та Num — це різні змінні. Наприклад:
        </p>
        <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
          <code>
            <p> num = 5 print(num) # виведе 5 </p>
            <p> Num = 55 print(Num) # виведе 55 </p>
          </code>
        </div>
        <p>
          <span className="text-red-500 font-semibold">Правило №5</span>:
          Уникайте використання ключових слів як імен змінних (наприклад,
          <span className="text-red-500 font-semibold">if, True, class </span>
          не можна використовувати як імена змінних, оскільки це ключові слова в
          Python).
        </p>
        <div>
          <p className="mt-6 text-xl font-semibold mb-4">Типи даних у Python</p>
          <p>
            У Python є кілька базових
            <span className="text-red-500 font-semibold ">типів даних</span>:
          </p>
          <ul className="list-disc ml-10 mb-4">
            <li>Numbers (числа)</li>
            <li>Strings (рядки)</li>
            <li>Lists (списки)</li>
            <li>Dictionaries (словники)</li>
            <li>Tuples (кортежі)</li>
            <li>Sets (множини)</li>
            <li>Boolean (логічний тип даних)</li>
          </ul>
          <p>
            Ці типи даних можна класифікувати за
            <span className="text-red-500 font-semibold">
              кількома ознаками
            </span>
            :
          </p>
          <ul className="list-disc ml-10">
            <li>змінювані (списки, словники та множини)</li>
            <li>незмінні (числа, рядки та кортежі)</li>
            <li>упорядковані (списки, кортежі, рядки та словники)</li>
            <li>невпорядковані (множини)</li>
          </ul>
          <div className="mt-6 mb-2 flex justify-center items-center flex-col">
            <img
              className="transition-transform hover:shadow-2xl "
              alt="Interpritprogramm"
              src="/less4_1.png"
            />
            <p className="mt-2 font-semibold">Класифікація типів данних</p>
          </div>
          <p className="mt-6 text-xl font-semibold mb-4">Константи в Python</p>
          <p>
            <span className="text-red-500 font-semibold">Константа</span> — це
            особливий тип змінної, значення якої не можна змінити. У Python
            константи зазвичай оголошуються/визначаються в модулі (окремий файл,
            що містить змінні, функції та інше, який імпортується в основний
            файл).Приклад:
          </p>
          <p className="inline-block bg-gray-100 p-2 rounded-sm">PI = 3.14</p>
          <div className="bg-gray-100 mb-4 mt-6 p-4 border-red-500 border-l-4">
            <span className="font-semibold">Примітка:</span> Насправді ми не
            використовували константи в Python. Великі літери в іменах змінних є
            способом відокремити їх (константи) від звичайних змінних, проте це
            ніяк не запобігає їх зміні (переприсвоюванні) в майбутньому.
          </div>
          <p className="mt-6 text-xl font-semibold mb-4">
            Числові типи даних в Python
          </p>
          <p>
            Числовий тип даних використовується для зберігання числових значень.
            Цілі числа, числа типу з плаваючою крапкою та складені числа
            потрапляють у категорію чисел у Python і визначаються як int, float
            та complex.
          </p>
          <ul className="justify-start ml-2">
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <span className=" font-semibold mr-2">int</span> - містить цілі
              числа зі знаком необмеженої довжини
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <span className="font-semibold mr-2">float</span>- містить числа з
              плаваючою десятковою крапкою з точністю до 15 знаків після крапки.
            </li>
            <li className="flex items-center">
              <FaArrowRight className="text-red-500 mr-2" />
              <span className=" font-semibold mr-2">complex</span>- містить
              складені числа.
            </li>
          </ul>
          <p>
            Ми можемо використовувати функцію
            <span className="text-red-500 font-semibold">type()</span> , щоб
            дізнатися, до якого класу належить змінна чи значення.
          </p>

          <p className="mt-6 text-xl font-semibold mb-2">
            Рядок (str) в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold">Рядок</span> — це
            послідовність символів, поміщена в одинарні чи подвійні лапки.
            Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p>name = 'Python' </p>
            </code>
          </div>
          <p className="mt-2 text-xl font-semibold mb-2">
            Список (list) в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold">Список</span> — це
            впорядкована послідовність однакових чи різних типів елементів,
            розділених комами та поміщених у квадратні дужки [ ]. Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p> languages = ["Swift", "Java", "Python"] </p>
            </code>
          </div>
          <p>
            Тут ми створили список languages з 3 рядковими значеннями всередині
            нього. Для доступу до елементів списку використовується індекс (він
            же “порядковий номер”). Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p>
                languages = ["Docker", "Java", "Python"] # Отримуємо доступ до
                елемента з індексом 0
              </p>
              <p>print(languages[0]) # виведе Docker </p>
            </code>
          </div>

          <p className="mt-6 text-xl font-semibold mb-4">
            Словник (dict) в Python
          </p>
          <p>
            Словник — це впорядкований набір елементів. Він зберігає елементи в
            парах ключ-значення. Ключі — це унікальні ідентифікатори, пов’язані
            зі значеннями. Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p># Створюємо словник capital_city</p>
              <p>
                {`capital_city = {'Ukraine': 'Kyiv', 'Spain': 'Madrid', 'Japan': 'Tokio'}`}
                <p>print(capital_city)</p>
              </p>
            </code>
          </div>
          <p>Результат:</p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p>
                {`{'Ukraine': 'Kyiv', 'Spain': 'Madrid', 'Japan': 'Tokio'}`}
              </p>
            </code>
          </div>

          <p>
            Тут ми створили словник
            <span className="bg-gray-100">capital_city</span>, у якому:
          </p>
          <p className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            <span className=" font-semibold mr-2">Ключі:</span> 'Ukraine',
            'Spain', 'Japan'
          </p>
          <p className="flex items-center">
            <FaArrowRight className="text-red-500 mr-2" />
            <span className=" font-semibold mr-2">Значення:</span> 'Kyiv',
            'Madrid', 'Tokio'
          </p>
          <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
            <span className="text-red-500 font-semibold">Ключі </span>
            використовуються для доступу до значень. Навпаки не працює.
          </div>
          <p className="mt-6 text-xl font-semibold mb-2">
            Кортеж (tuple) в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold">Кортеж </span> — це
            впорядкована послідовність елементів, аналогічна до списку. Єдина
            відмінність полягає в тому, що кортежі незмінні. Створені кортежі
            уже не можуть змінюватися.
          </p>
          <p>
            У Python круглі дужки ( ) використовуються для зберігання елементів
            кортежу. Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p> product = ('Sony', 599.99) </p>
            </code>
          </div>
          <p>
            Тут <span className="bg-gray-100">product</span> — це кортеж з
            рядковим значенням Sony та числом типу з плаваючою крапкою 599.99.
          </p>
          <p>
            Подібно до списків, для доступу до елементів кортежу в Python
            використовується номер індексу (0, 1, 2…). Наприклад:
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p># Створюємо кортеж</p>
              <p>product = ('Sony', 'PlayStation', 599.99)</p>
              <p># Отримуємо доступ до елемента з індексом 0</p>
              <p>print(product[0]) # виведе Sony</p>
              <p># Отримуємо доступ до елемента з індексом 1</p>
              <p>print(product[1]) # виведе PlayStation</p>
            </code>
          </div>

          <p className="mt-6 text-xl font-semibold mb-2">
            Множина (set) в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold mr-1">
              Множина (набір)
            </span>
            це змінюваний невпорядкований набір унікальних хешованих об'єктів.
          </p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p># Створюємо множину student_id</p>
              <p>{`student_id = {112, 114, 116, 118, 115}`}</p>
              <p># Виводимо елементи множини student_id</p>
              <p>print(student_id)</p>
              <p># Виводимо тип даних множини student_id</p>
              <p>print(type(student_id))</p>
            </code>
          </div>

          <p>Результат:</p>
          <div className="bg-gray-100 mt-2 p-3 rounded-sm inline-block mb-2.5 min-w-max">
            <code>
              <p>{`{112, 114, 115, 116, 118}`}</p>
              <p>class 'set'</p>
            </code>
          </div>

          <p>
            Тут ми створили послідовність з ім’ям student_id з 5 цілочисленними
            значеннями.
          </p>
          <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
            Оскільки послідовності є невпорядкованими, їх
            <span className="text-red-500 font-semibold ml-1">
              індексація немає сенсу
            </span>
            . Отже, оператор доступу за індексом [] не працює.
          </div>
          <p className="mt-6 text-xl font-semibold mb-2">
            Boolean (логічний тип даних) в Python
          </p>
          <p>
            <span className="text-red-500 font-semibold">Булеві значення</span>-
            це дві константи True і False.
          </p>
          <p>
            У Python істинними та хибними значеннями вважаються не тільки True
            та False.
          </p>
          <p>Правда:</p>
          <ul className="list-disc ml-10 mb-4">
            <li>будь-яке ненульове число</li>
            <li>будь-який непустий рядок</li>
            <li>будь-який непустий об'єкт</li>
          </ul>
          <p>Хибність</p>
          <ul className="list-disc ml-10 mb-4">
            <li>0</li>
            <li>None</li>
            <li>порожній рядок</li>
            <li>порожній об'єкт</li>
          </ul>
          <p>
            Для перевірки булевого значення об'єкта можна скористатися bool:
          </p>
          <div className="flex items-center">
            <p>bool(0)</p>
            <FaArrowRight className="text-red-500 ml-2 mr-2" />
            <p>False</p>
          </div>
        </div>
        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663a7734d24fe3aae2918cce`}
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
export default Lesson4;

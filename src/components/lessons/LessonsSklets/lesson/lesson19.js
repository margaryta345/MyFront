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
function Lesson19({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 18 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 18, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            Кортеж в Python
          </span>
          схожий на список. Різниця між ними полягає в тому, що ми не можемо
          змінити елементи кортежу після присвоювання їм значень, тоді як
          елементи списку ми можемо змінити.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення кортежу в Python
        </p>
        <p>
          Кортеж створюється шляхом розміщення всіх елементів у круглих дужках
          (), розділених комами. Круглі дужки необов’язкові, проте їх
          використання є хорошою практикою. Кортеж може містити будь-яку
          кількість елементів, і вони можуть бути різних типів (int, float,
          list, string тощо). Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Різні типи кортежів
            <br />
            # Порожній кортеж my_tuple = ()
            <br />
            print(my_tuple)
            <br />
            # Кортеж, що містить цілі числа
            <br />
            my_tuple = (1, 2, 3)
            <br />
            print(my_tuple)
            <br />
            # Кортеж зі змішаними типами даних
            <br />
            my_tuple = (1, "Hello",3.4)
            <br />
            print(my_tuple)
            <br />
            # Вкладений кортеж
            <br />
            my_tuple = ("mouse", [8, 4,6], (1, 2, 3))
            <br />
            print(my_tuple)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          () <br /> (1, 2, 3) <br /> (1, 'Hello', 3.4) <br /> ('mouse', [8, 4,
          6], (1, 2, 3))
        </div>
        <p>
          Також ми можемо створювати кортежі без використання круглих дужок:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            my_tuple = 1, 2, 3
            <br />
            my_tuple = 1, "Hello", 3.4
          </code>
        </div>

        <p className="mt-2 text-2xl font-semibold mb-4">
          Створення кортежу з одним елементом
        </p>
        <p>
          В Python при створенні кортежу з одним елементом потрібно вказувати
          кому в кінці, щоб вказати, що це саме кортеж (а не рядок):
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            var1 = ("Hello") # це рядок
            <br />
            var2 = ("Hello",) # а це кортеж
          </code>
        </div>
        <p>
          Ми можемо використовувати
          <span className="text-red-500 font-semibold ml-1 mr-1">
            функцію type()
          </span>
          , щоб дізнатися, до якого класу належить змінна чи значення:
        </p>
        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            var1 = ("hello")
            <br />
            print(type(var1))
            <br />
            # Створення кортежу, що містить один елемент
            <br />
            var2 = ("hello",)
            <br />
            print(type(var2))
            <br />
            # Круглі дужки необов'язкові
            <br />
            var3 = "hello",
            <br />
            print(type(var3))
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          {`<class 'str'>`}
          <br />
          {`<class 'tuple'>`}
          <br />
          {`<class 'tuple'>`}
        </div>

        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              ("hello") — це рядок, тому функція type() повертає
              {`<class 'str'>`}
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              ("hello",) та "hello", — обидва кортежі, тому функція type()
              повертає {`<class 'tuple'>`}
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Доступ до елементів кортежу в Python
        </p>
        <p>
          Подібно до списку, кожен елемент кортежу представлений індексними
          номерами (0, 1, …), де індекс першого елемента 0. Номер індексу
          використовується для доступу до елементів кортежу. Наприклад:
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">1. Індексація</p>
        <p>
          Ми можемо використовувати оператор індексу [] для доступу до елемента
          в кортежі, у якого індекс починається з 0.
        </p>
        <p className="mt-4">
          Таким чином, кортеж, що складається з 6 елементів, матиме індекси від
          0 до 5. Спроба отримати доступ до індексу за межами діапазону індексів
          кортежу (наприклад, до індексів 6 або 7) викличе помилку IndexError.
        </p>
        <p className="mt-4">
          Індекс має бути цілим числом, тому ми не можемо використовувати тип
          float чи інші типи. Це призведе до помилки TypeError.
        </p>
        <p className="mt-4">
          Аналогічно доступ до вкладених кортежів здійснюється з використанням
          вкладеної індексації, як показано в наступному прикладі:
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Доступ до елементів кортежу з використанням індексації
            <br />
            letters =("p", "r", "o", "g", "r", "a", "m", "i", "z")
            <br />
            print(letters[0]) # виведе "p"
            <br />
            print(letters[5]) # виведе "a"
          </code>
        </div>

        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              letters[0] — звертається до першого елементу;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              letters[5] — звертається до шостого елементу.
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          2. Від’ємна індексація
        </p>
        <p>
          Python дозволяє і від’ємну індексацію своїх послідовностей. Індекс -1
          відноситься до останнього елемента, індекс -2 відноситься до
          передостаннього елемента і так далі. Наприклад:
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Доступ до елементів кортежу з використанням від'ємної індексації
            <br />
            letters =("p", "r", "o", "g", "r", "a", "m", "i", "z")
            <br />
            print(letters[-1]) # виведе 'z'
            <br />
            print(letters[-3]) # виведе 'm'
          </code>
        </div>

        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              letters[-1] — звертається до останнього елементу;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              letters[-3] — звертається до третього з кінця елемента
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">3. Зріз</p>
        <p>
          Ми можемо отримати доступ до діапазону елементів у кортежі,
          використовуючи оператор зрізу :.
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Доступ до елементів кортежу за допомогою зрізу
            <br />
            my_tuple = ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')
            <br />
            # Виводимо "зрізані" елементи з 2 по 4 індекс
            <br />
            print(my_tuple[2:4]) # Виводимо елементи до 2-го індексу – від'ємна
            індексація
            <br />
            print(my_tuple[:-7])
            <br />
            # Виводимо елементи з 7-го індексу до останнього
            <br />
            print(my_tuple[7:])
            <br />
            # Виводимо всі елементи кортежу
            <br />
            print(my_tuple[:])
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          ('o', 'g')
          <br />
          ('p', 'r')
          <br />
          ('i', 'z')
          <br />
          ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')
        </div>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          При виконанні зрізу в кортежах перший індекс є
          <span className="font-semibold ml-1 mr-1">включаючим</span>, а
          кінцевий —<span className="font-semibold ml-1 mr-1">виключаючим</span>
          .
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Методи для роботи з кортежами в Python
        </p>
        <p>
          У Python методи, які додають або видаляють елементи, не працюють з
          кортежами. Працюють лише наступні два методи:
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            my_tuple = ('a', 'p', 'p', 'l', 'e',)
            <br />
            print(my_tuple.count('p')) # виведе 2
            <br />
            print(my_tuple.index('l')) # виведе 3'
          </code>
        </div>

        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              my_tuple.count('p') — рахує загальну кількість 'p' у кортежі
              my_tuple;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              my_tuple.index('l') — повертає індекс першого входження 'l' у
              кортежі my_tuple.
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Ітерація кортежу в Python
        </p>
        <p>
          Ми можемо використовувати цикл for для перебору елементів кортежу.
          Наприклад:
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            languages = ('Python', 'Swift', 'C++')
            <br />
            # Перебираємо та виводимо елементи кортежу
            <br />
            for language in languages:
            <br />
            &nbsp;&nbsp;print(language)
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Python
          <br />
          Swift
          <br />
          C++
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Перевірка, чи існує елемент у кортежі
        </p>
        <p>
          <span className="text-red-500 font-semibold">Ключове слово in</span>
          використовується для перевірки того, чи існує елемент у кортежі, чи
          ні. Наприклад:
        </p>

        <div className=" bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            languages = ('Python', 'Swift', 'C++')
            <br />
            print('C' in languages) # виведе False
            <br />
            print('Python' in languages) # виведе True
          </code>
        </div>

        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              'C' — відсутній у кортежі languages, тому результатом є False.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              'Python' — присутній у кортежі languages, тому результатом є True.
            </li>
          </ul>
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Переваги використання кортежу замість списку в Python
        </p>
        <p>
          Оскільки кортежі дуже схожі на списки, вони використовуються в схожих
          ситуаціях. Проте існують певні переваги використання кортежу порівняно
          зі списком.
        </p>
        <ul className="ml-4">
          <li className="flex items-center  mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Зазвичай кортежі використовуються для різних типів даних, а списки —
            для елементів схожих типів даних.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Оскільки кортежі незмінні, ітерація кортежу виконується швидше, ніж
            списку. Таким чином, відбувається невелике підвищення
            продуктивності.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Кортежі, що містять незмінні елементи, можуть використовуватися як
            ключ для словника. Зі списками це неможливо.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Якщо у вас є дані, які не змінюються, реалізація їх у вигляді
            кортежу гарантує, що вони залишаться незмінними.
          </li>
        </ul>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ff93c87ab0d1def499519`}
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
export default Lesson19;

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
function Lesson24({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 23 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 23, value: true }));
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
          На минулому уроці ми дізналися про винятки в Python. Винятки можуть у
          будь-який момент завершити виконання програми. Саме тому важливо
          обробляти винятки. Для цього в Python використовується
          <span className=" text-red-500 font-semibold mr-1 ml-1">
            блок try...except.
          </span>
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Конструкція try…except в Python
        </p>

        <p className="mt-4">
          Блок try...except використовується для обробки винятків. Його
          синтаксис:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp;# Код, який може згенерувати виняток
            <br />
            except:
            <br />
            &nbsp;&nbsp;# Код для виконання у разі генерації винятку
          </code>
        </div>
        <p>
          Код, який може згенерувати виняток, знаходиться всередині блоку try.
          За кожним блоком try слідує блок except. Коли виникає виняток, він
          перехоплюється блоком except.
        </p>

        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Блок except не може бути використаний без блоку try.
        </div>
        <p className="mt-4">
          Приклад обробки винятку за допомогою try...except:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp; numerator = 10
            <br />
            &nbsp;&nbsp;denominator = 0
            <br />
            &nbsp;&nbsp;result = numerator/denominator
            <br />
            print(result)
            <br />
            except:
            <br />
            &nbsp;&nbsp; print("Error: Denominator cannot be 0.")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Error: Denominator cannot be 0.
        </div>
        <p>
          У цьому прикладі ми намагаємось поділити число на 0. Через це
          генерується виняток. Щоб обробити виняток, ми помістили код result =
          numerator/denominator всередині блоку try. Тепер, коли виникає
          виняток, решта коду всередині блоку try пропускається.
        </p>
        <p className="mt-4">
          Блок except перехоплює виняток, і код всередині блоку except
          виконується. Якщо код у блоці try не генерує виняток, блок except
          пропускається.
        </p>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Перехоплення специфічних винятків в Python
        </p>
        <p>
          Для кожного блоку try може існувати від нуля і більше блоків except.
          Декілька блоків except дозволяють обробляти кожен виняток по-різному.
        </p>
        <p className="mt-4">
          Тип аргументу кожного блоку except вказує на тип винятку, який може
          бути оброблений цим блоком. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp;even_numbers = [2,4,6,8]
            <br />
            &nbsp;&nbsp;print(even_numbers[5])
            <br />
            except ZeroDivisionError:
            <br />
            &nbsp;&nbsp;print("Denominator cannot be 0.")
            <br />
            except IndexError:
            <br />
            &nbsp;&nbsp;print("Index Out of Bound.")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Error: Index Out of Bound
        </div>
        <p>Тут ми створили список з ім’ям even_numbers.</p>
        <p className="mt-2">
          Оскільки перший елемент списку знаходиться під індексом 0, останній
          елемент списку знаходиться під індексом 3. Зверніть увагу на
          стейтмент:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>print(even_numbers[5])</code>
        </div>
        <p>
          Тут ми намагаємося отримати доступ до елемента під індексом 5. Отже,
          виникає виняток IndexError.
        </p>
        <p>Коли виняток IndexError виникає у блоці try:</p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            виняток ZeroDivisionError пропускається;
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            виконується код всередині винятку IndexError.
          </li>
        </ul>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Конструкція try з умовою else в Python
        </p>
        <p>
          У деяких ситуаціях може знадобитися виконати певний блок коду, якщо
          код всередині try виконається без помилок. Для таких випадків
          використовується необов’язкове ключове слово else разом з оператором
          try. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp;num = int(input("Enter a number: "))
            <br />
            &nbsp;&nbsp;assert num % 2 == 0
            <br />
            except:
            <br />
            &nbsp;&nbsp;print("Not an even number!")
            <br />
            else:
            <br />
            &nbsp;&nbsp;reciprocal = 1/num
            <br />
            &nbsp;&nbsp;print(reciprocal)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          <ul>
            <li className="flex items-center mt-4  mb-2">
              <FaArrowRight className="text-red-500 mr-2" />
              Якщо ми передаємо непарне число:
            </li>
            Enter a number: 1
            <br />
            Not an even number!
            <br />
            <li className="flex items-center mt-4 mb-2">
              <FaArrowRight className="text-red-500 mr-2" />
              Якщо ми передаємо парне число, то обчислюється значення:
            </li>
            Enter a number: 4
            <br />
            0.25
            <br />
            <li className="flex items-center mt-4 mb-2">
              <FaArrowRight className="text-red-500 mr-2" />
              Однак, якщо ми передамо 0, то отримаємо помилку ZeroDivisionError,
              оскільки код всередині else не обробляється попереднім except:
            </li>
            Enter a number: 0
            <br />
            Traceback (most recent call last):
            <br />
            File {`"<string>"`}, line 7, in {`<module>`}
            <br />
            reciprocal = 1/num
            <br />
            ZeroDivisionError: division by zero
          </ul>
        </div>
        <div className="bg-gray-100 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Винятки у блоці else не обробляються попередніми блоками except
        </div>
        <p className="mt-6 text-2xl font-semibold mb-4">
          Конструкція try…finally в Python
        </p>
        <p>
          В Python блок finally виконується завжди, незалежно від того,
          генерується виняток чи ні. Блок finally є необов’язковим. І для
          кожного блоку try може бути лише один блок finally. Наприклад:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            try:
            <br />
            &nbsp;&nbsp;numerator = 10
            <br />
            &nbsp;&nbsp;denominator = 0
            <br />
            &nbsp;&nbsp; result = numerator/denominator
            <br />
            &nbsp;&nbsp; print(result)
            <br />
            except:
            <br />
            &nbsp;&nbsp;print("Error: Denominator cannot be 0.")
            <br />
            finally:
            <br />
            &nbsp;&nbsp;print("This is finally block.")
            <br />
            &nbsp;&nbsp;
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Error: Denominator cannot be 0.
          <br />
          This is finally block.
        </div>
        <p>
          Тут ми ділимо число на 0 всередині блоку try. При цьому генерується
          виняток, який перехоплюється блоком except. Потім виконується блок
          finally.
        </p>

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
export default Lesson24;

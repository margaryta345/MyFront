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
function Lesson27({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 26 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 26, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1 ">Об’єкт</span>— це
          набір даних (змінних) та методів (функцій).
        </p>
        <p className="mt-2">
          <span className=" text-red-500 font-semibold mr-1 ">Клас</span>— це
          креслення (план) об’єкта. Ми можемо уявити клас як ескіз (прототип)
          будинку. Він містить всі деталі про поверхи, двері, вікна тощо. На
          основі цих описів ми будуємо будинок. Будинок — це об’єкт. Оскільки з
          одного й того самого опису можна побудувати багато будинків, ми можемо
          створити багато об’єктів з одного класу.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Визначення класу в Python
        </p>
        <p>Для створення класу в Python використовується ключове слово class</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class ClassName:
            <br />
            &nbsp;&nbsp;# Визначення класу
          </code>
        </div>
        <p>Тут ми створили клас з ім’ям ClassName.</p>
        <p>Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Bike:
            <br />
            &nbsp;&nbsp;name = ""
            <br />
            &nbsp;&nbsp;gear = 0
          </code>
        </div>
        <p className="mt-4">
          Тут:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Bike – назва класу;
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              name та gear — змінні всередині класу.
            </li>
          </ul>
        </p>

        <div className="bg-gray-100 mt-10 mb-10 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Змінні всередині класу називаються атрибутами.
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">Об’єкти в Python</p>
        <p>
          Об’єкт — це екземпляр класу. Наприклад, Bike — це клас і ми можемо
          створити об’єкти типу bike1, bike2 з цього класу.
        </p>
        <p>Синтаксис створення об’єктів класу в Python:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>objectName = ClassName()</code>
        </div>
        <p>Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Створюємо клас
            <br />
            class Bike:
            <br />
            &nbsp;&nbsp;name = ""
            <br />
            &nbsp;&nbsp;gear = 0
            <br />
            # Створюємо об'єкт класу
            <br />
            bike1 = Bike() class Bike:
          </code>
        </div>
        <p className="mt-4">
          Тут bike1 — це об’єкт класу Bike. Ми можемо використовувати цей об’єкт
          для доступу до атрибутів (даних) класу Bike.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Доступ до атрибутів класу через об’єкти
        </p>
        <p>
          Оператор . використовується для доступу до атрибутів класу. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Змінюємо атрибут name об'єкта bike1
            <br />
            bike1.name = "Mountain Bike"
            <br />
            # Отримуємо доступ до атрибута gear об'єкта bike1
            <br />
            bike1.gear
          </code>
        </div>
        <p>
          Тут ми використали bike1.name та bike1.gear для доступу та зміни
          значень атрибутів name та gear.
        </p>
        <p className="mt-2">Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Створюємо клас
            <br />
            class Bike:
            <br />
            &nbsp;&nbsp;name = ""
            <br />
            &nbsp;&nbsp;gear = 0
            <br />
            # Створюємо об'єкт класу
            <br />
            bike1 = Bike()
            <br />
            # Отримуємо доступ до атрибутів об'єкта та присвоюємо нові значення
            <br />
            bike1.gear = 11
            <br />
            bike1.name = "Mountain Bike"
            <br />
            # Виводимо дані об'єкта на екран
            <br />
            print(f"Name: {`{bike1.name}`}, Gears: {`{bike1.gear}`} ")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Name: Mountain Bike, Gears: 11
        </div>

        <p className="mt-4">
          Тут ми визначили клас Bike з двома атрибутами: name та gear. Створили
          об’єкт bike1 класу Bike та отримали доступ до атрибутів об’єкта, а
          потім змінили їх, використовуючи оператор ..
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Створення кількох об’єктів одного класу
        </p>
        <p>Ми можемо створити багато об’єктів одного класу. Наприклад:</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Створюємо клас class Employee:
            <br />
            &nbsp;&nbsp;# Визначаємо атрибут
            <br />
            &nbsp;&nbsp;employee_id = 0
            <br />
            # Створюємо два об'єкти класу Employee
            <br />
            employee1 = Employee()
            <br />
            employee2 = Employee()
            <br />
            # Отримуємо доступ до атрибутів об'єкта employee1 та присвоюємо нове
            значення
            <br />
            employee1.employeeID = 1001
            <br />
            print(f"Employee ID: {`{employee1.employeeID}`}")
            <br />
            # Отримуємо доступ до атрибутів об'єкта employee2 та присвоюємо нове
            значення
            <br />
            employee2.employeeID = 1002
            <br />
            print(f"Employee ID: {`{employee2.employeeID}`}")
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Employee ID: 1001
          <br />
          Employee ID: 1002
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">Методи в Python</p>
        <p>Функція, визначена всередині класу, називається методом.</p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # Створюємо клас
            <br />
            class Room:
            <br />
            &nbsp;&nbsp;length = 0.0
            <br />
            &nbsp;&nbsp;width = 0.0
            <br />
            &nbsp;&nbsp;# Метод обчислення площі
            <br />
            &nbsp;&nbsp;def calculate_area(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("Area of Room =", self.length *
            self.width)
            <br />
            # Створюємо об'єкт класу Room
            <br />
            study_room = Room()
            <br />
            # Надаємо нові значення всім атрибутам об'єкта
            <br />
            study_room.length = 42.5
            <br />
            study_room.width = 30.8
            <br />
            # Отримуємо доступ до методу всередині класу
            <br />
            study_room.calculate_area()
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Area of Room = 1309.0
        </div>
        <p>
          Тут ми створили клас Room з атрибутами: length та width; та методом
          calculate_area(). Потім ми створили об’єкт study_room класу Room та
          використали цей об’єкт для присвоєння значень атрибутам length та
          width. Зверніть увагу, що ми також використали цей об’єкт для виклику
          методу всередині класу за допомогою оператора .:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>study_room.calculate_area()</code>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Конструктори в Python
        </p>
        <p>
          Раніше ми присвоїли значення за замовчуванням атрибуту name класу
          Bike:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Bike:
            <br />
            &nbsp;&nbsp;name = ""
            <br />
            ...
            <br />
            # Створюємо об'єкт класу
            <br />
            bike1 = Bike()
          </code>
        </div>
        <p>
          Однак, ми також можемо ініціалізувати значення за допомогою
          конструкторів. Наприклад:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Bike:
            <br />
            &nbsp;&nbsp;# Функція-конструктор
            <br />
            &nbsp;&nbsp;def __init__(self, name = ""):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.name = name
            <br />
            bike1 = Bike()
          </code>
        </div>
        <p>
          Тут __init__() – це функція-конструктор, яка викликається щоразу, коли
          створюється новий об’єкт цього класу. Конструктор ініціалізує значення
          атрибута name. Ми використали self.name, щоб посилатися на атрибут
          name об’єкта bike1.
        </p>
        <p>
          Якщо ми використовуємо конструктор для ініціалізації значень всередині
          класу, нам необхідно передати відповідне значення під час створення
          об’єкта класу:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>bike1 = Bike("Mountain Bike")</code>
        </div>
        <p>
          Тут "Mountain Bike" передається як аргумент name функції __init__()
          (яка є конструктором класу Bike) для ініціалізації атрибута name.
        </p>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/663bb198f22c033d662d474c`}
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
export default Lesson27;

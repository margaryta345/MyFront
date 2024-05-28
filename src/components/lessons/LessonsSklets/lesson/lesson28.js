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
function Lesson28({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 27 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 27, value: true }));
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
          <span className=" text-red-500 font-semibold mr-1 ">
            Конструктори
          </span>
          — це зазвичай використовуються для ініціалізації об’єктів класу. Їх
          завдання полягає у присвоюванні значень членам класу. В Python метод
          __init__() називається конструктором і завжди викликається при
          створенні об’єкта.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Синтаксис оголошення конструктора в Python:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            def __init__(self):
            <br />
            &nbsp;&nbsp; # Тіло конструктора
          </code>
        </div>
        <p>
          Типи конструкторів:
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Конструктор за замовчуванням — це простий конструктор, який не
              приймає жодних параметрів. Його визначення має тільки один
              параметр, яким є посилання на створюваний об’єкт.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Параметризований конструктор — це конструктор з параметрами:
              перший параметр — це посилання на створюваний об’єкт (self), а
              інші параметри надаються програмістом.
            </li>
          </ul>
        </p>
        <p className="mt-4">Приклад конструктора за замовчуванням в Python:</p>

        <p className="mt-2">Тут ми створили клас з ім’ям ClassName.</p>
        <p>Розглянемо приклад:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class GeekforGeeks:
            <br />
            &nbsp;&nbsp; # Конструктор за замовчуванням
            <br />
            &nbsp;&nbsp;def __init__(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.geek = "Ravesli"
            <br />
            &nbsp;&nbsp;# Виводимо дані
            <br />
            &nbsp;&nbsp;def print_Geek(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp; print(self.geek)
            <br />
            # Створюємо об'єкт класу
            <br />
            obj = GeekforGeeks()
            <br />
            # Викликаємо метод класу через об'єкт obj
            <br />
            obj.print_Geek()
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Ravesli
        </div>
        <p>Приклад параметризованого конструктора в Python:</p>

        <div className="bg-gray-100 mt-4 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Addition:
            <br />
            &nbsp;&nbsp;first = 0
            <br />
            &nbsp;&nbsp;second = 0
            <br />
            &nbsp;&nbsp;answer = 0
            <br />
            <br />
            &nbsp;&nbsp;# Параметризований конструктор
            <br />
            &nbsp;&nbsp; def __init__(self, f, s):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.first = f
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.second = s
            <br />
            <br />
            &nbsp;&nbsp;def display(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("First number = " + str(self.first))
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("Second number = " +
            str(self.second))
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("Addition of two numbers = " +
            str(self.answer))
            <br />
            <br />
            &nbsp;&nbsp;def calculate(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.answer = self.first + self.second
            <br />
            <br />
            # Створюємо об'єкт класу.
            <br />
            # При цьому викликається параметризований конструктор
            <br />
            obj1 = Addition(1000, 2000)
            <br />
            <br />
            # Створюємо другий об'єкт того ж класу
            <br />
            obj2 = Addition(10, 20)
            <br />
            <br />
            # Виконуємо операцію додавання через об'єкт obj1
            <br />
            obj1.calculate()
            <br />
            <br />
            # Виконуємо операцію додавання через об'єкт obj2
            <br />
            obj2.calculate()
            <br /> <br />
            # Виводимо на екран результат роботи об'єкта obj1
            <br />
            obj1.display()
            <br />
            <br />
            # Виводимо на екран результат роботи об'єкта obj2
            <br />
            obj2.display()
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          First number = 1000
          <br />
          Second number = 2000
          <br />
          Addition of two numbers = 3000
          <br />
          First number = 10
          <br />
          Second number = 20
          <br />
          Addition of two numbers = 30
        </div>
        <p>
          Приклад використання конструктора за замовчуванням разом із
          параметризованим конструктором в Python:
        </p>

        <div className="bg-gray-100 mt-4 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class MyClass:
            <br />
            &nbsp;&nbsp;def __init__(self, name=None):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if name is None:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Default constructor
            called")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;else:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = name
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Parameterized constructor
            called with name", self.name)
            <br /> <br />
            &nbsp;&nbsp;def method(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if hasattr(self, 'name'):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Method called with name",
            self.name)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;else:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Method called without a
            name")
            <br /> <br />
            # Створюємо об'єкт класу за допомогою конструктора за замовчуванням
            <br />
            obj1 = MyClass()
            <br /> <br />
            # Викликаємо метод класу через об'єкт obj1
            <br />
            obj1.method()
            <br /> <br />
            # Створюємо об'єкт класу за допомогою параметризованого конструктора
            <br />
            obj2 = MyClass("John")
            <br /> <br />
            # Викликаємо метод класу через об'єкт obj2
            <br />
            obj2.method()
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Default constructor called
          <br />
          Method called without a name
          <br />
          Parameterized constructor called with name John
          <br />
          Method called with name John
        </div>

        <p>
          Тут ми визначаємо клас MyClass з конструктором за замовчуванням та
          параметризованим конструктором.
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Конструктор за замовчуванням перевіряє, чи передано параметр, і
              виводить відповідне повідомлення на екран. Якщо параметр не
              вказано, викликається конструктор за замовчуванням, якщо вказано,
              то викликається параметризований конструктор.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Параметризований конструктор приймає параметр, який присвоює
              атрибуту (члену класу) name.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Ми також визначаємо метод method(), який перевіряє наявність або
              відсутність в об’єкта атрибута name і виводить відповідне
              повідомлення на екран.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Ми створюємо два об’єкти класу MyClass, використовуючи обидва типи
          конструкторів.
          <ul>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Спочатку ми створюємо об’єкт за допомогою конструктора за
              замовчуванням — виводиться Default constructor called. Потім ми
              викликаємо у цього об’єкта метод method(), який виводить на екран
              повідомлення Method called without a name.
            </li>
            <li className="flex items-center mt-4">
              <FaArrowRight className="text-red-500 mr-2" />
              Потім ми створюємо об’єкт за допомогою параметризованого
              конструктора, передавши йому ім’я "John". Конструктор викликається
              автоматично і на екран виводиться повідомлення Parameterized
              constructor called with name John. Потім ми викликаємо у цього
              об’єкта метод method(), який виводить на екран повідомлення Method
              called with name John.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Загалом цей приклад показує, як в одному класі можна використовувати
          відразу обидва типи конструкторів.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Синтаксис оголошення конструктора в Python:
        </p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Ініціалізація об’єктів. Конструктори використовуються для
            ініціалізації об’єктів класу. Вони дозволяють встановити значення за
            замовчуванням для членів класу, а також ініціалізувати об’єкт
            користувацькими даними.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Простота реалізації. Конструктори легко реалізувати в Python за
            допомогою методу __init__().
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Покращення читабельності коду. Конструктори покращують читабельність
            коду, оскільки дають зрозуміти, які значення ініціалізуються і як
            вони ініціалізуються.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Інкапсуляція. Конструктори можуть використовуватися для забезпечення
            інкапсуляції, гарантуючи, що члени об’єкта ініціалізуються коректно
            та контрольовано.
          </li>
        </ul>

        <p className="mt-6 text-2xl font-semibold mb-4">
          Недоліки використання конструкторів в Python
        </p>
        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Обмежена функціональність. Конструктори в Python мають обмежену
            функціональність порівняно з конструкторами з інших мов
            програмування. Наприклад, у Python немає конструкторів з
            модифікаторами доступу, такими як public, private або protected.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Конструктори можуть бути непотрібними. У деяких випадках
            конструктори можуть бути непотрібними, оскільки є достатньо значень
            за замовчуванням для членів класу. У таких випадках використання
            конструктора може призвести до зайвого ускладнення коду.
          </li>
        </ul>
        <p className="mt-4">
          В цілому, конструктори в Python можуть бути корисними для
          ініціалізації об’єктів та забезпечення інкапсуляції. Однак вони не
          завжди є необхідними та мають обмежену функціональність у порівнянні з
          конструкторами в інших мовах програмування
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">Деструктори в Python</p>
        <p>
          Деструктори викликаються при знищенні об’єкта. В Python деструктори не
          є обов’язковими, як у C++, тому що Python має збирач сміття, який
          автоматично виконує керування пам’яттю.
        </p>
        <p className="mt-4">
          Метод __del__() відомий як функція-деструктор у Python. Він
          викликається, коли всі посилання на об’єкт були видалені, тобто коли
          об’єкт очищується збирачем сміття.
        </p>

        <p>Синтаксис оголошення деструктора в Python:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            def __del__(self):
            <br />
            &nbsp;&nbsp; # тіло деструктора
          </code>
        </div>

        <div className="bg-gray-100 mt-4 mb-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Посилання на об’єкт також видаляється, коли об’єкт виходить з області
          видимості або коли програма завершує своє виконання.
        </div>
        <p>Розглянемо приклад використання деструктора в Python:</p>

        <p className="mt-2">Синтаксис оголошення деструктора в Python:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Employee:
            <br />
            &nbsp;&nbsp; # Конструктор класу
            <br />
            &nbsp;&nbsp; def __init__(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; print('Employee created.')
            <br />
            &nbsp;&nbsp; # Деструктор класу
            <br />
            &nbsp;&nbsp; def __del__(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; print('Destructor called, Employee
            deleted.')
            <br />
            obj = Employee()
            <br />
            del obj
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Employee created.
          <br />
          Destructor called, Employee deleted.
        </div>
        <p>
          Використовуючи ключове слово del, ми видалили всі посилання на об’єкт
          obj, тому деструктор був викликаний автоматично.
        </p>

        <div className="bg-gray-100 mb-4 mt-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          Деструктор викликається після завершення програми або коли всі
          посилання на об’єкт видалені, тобто коли лічильник посилань стає
          рівним нулю, а не коли об’єкт виходить з області видимості.
        </div>
        <p>
          Наступний приклад дає пояснення до вищезгаданої примітки. Зверніть
          увагу, що деструктор викликається після виводу рядка Program End...:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Employee:
            <br />
            &nbsp;&nbsp;# Конструктор класу
            <br />
            &nbsp;&nbsp;def __init__(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print('Employee created')
            <br />
            <br />
            &nbsp;&nbsp;# Деструктор класу
            <br />
            &nbsp;&nbsp;def __del__(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("Destructor called")
            <br />
            <br />
            def Create_obj():
            <br />
            &nbsp;&nbsp;print('Making Object...')
            <br />
            &nbsp;&nbsp;obj = Employee()
            <br />
            &nbsp;&nbsp;print('function end...')
            <br />
            &nbsp;&nbsp;return obj
            <br />
            <br />
            print('Calling Create_obj() function...')
            <br />
            obj = Create_obj()
            <br />
            print('Program End...')
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Calling Create_obj() function...
          <br />
          Making Object...
          <br />
          Employee created
          <br />
          function end...
          <br />
          Program End...
          <br />
          Destructor calle
        </div>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662fe61e87ab0d1def49950f`}
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
export default Lesson28;

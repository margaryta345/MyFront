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
function Lesson29({ module, name }) {
  const { id, lessonId } = useParams();
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/done`, { params: { index: 28 } })
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onButtonClick = async () => {
    const data = await dispatch(fetchDoneSend({ index: 28, value: true }));
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
          ООП ґрунтується на чотирьох фундаментальних принципах: інкапсуляції,
          наслідування, поліморфізмі.
        </p>

        <p className="mt-6 text-2xl font-semibold mb-4">Iнкапсуляція</p>

        <p className="mt-4">
          <span className=" text-red-500 font-semibold mr-1 ">
            Iнкапсуляція
          </span>
          - механізм приховування деталей реалізації класу від інших об'єктів.
          Досягається шляхом використання модифікаторів доступу public, private
          і protected, які відповідають публічним, приватним і захищеним
          атрибутам.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less29_1.png"
          />
          <p className="mt-6 text-xl font-semibold mb-4">Інкапсуляція</p>
        </div>

        <p>
          Зробимо атрибути title, author і isbn класу Book приватними - тепер
          доступ до них можливий тільки всередині класу:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Book:
            <br />
            &nbsp;&nbsp;def __init__(self, title, author, isbn):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.__title = title # приватный
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.__author = author # приватный
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.__isbn = isbn # приватный
          </code>
        </div>
        <p>
          Щоб отримати доступ до цих атрибутів ззовні класу, ми визначаємо
          методи getter і setter, які забезпечують контрольований доступ до
          атрибутів:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            def get_title(self):
            <br />
            &nbsp;&nbsp;return self.__title
            <br /> <br />
            def set_title(self, title):
            <br />
            &nbsp;&nbsp;self.__title = title
            <br /> <br />
            def get_author(self):
            <br />
            &nbsp;&nbsp;return self.__author
            <br /> <br />
            def set_author(self, author):
            <br />
            &nbsp;&nbsp;self.__author = author
            <br /> <br />
            def get_isbn(self):
            <br />
            &nbsp;&nbsp;return self.__isbn
            <br /> <br />
            def set_isbn(self, isbn):
            <br />
            &nbsp;&nbsp;self.__isbn = isbn
          </code>
        </div>
        <p>
          У цьому прикладі методи get_title(), get_author() і get_isbn() є
          методами, що отримують (геттерами), які дають нам змогу отримувати
          значення приватних атрибутів ззовні класу. Методи set_title(),
          set_author() і set_isbn() - методи, що встановлюють (сеттери), які
          дають нам змогу встановлювати значення приватних атрибутів ззовні
          класу.
        </p>
        <div className="bg-gray-100 mt-4 mb-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
          <p>
            Геттери являють собою методи, які використовуються в ООП для
            отримання доступу до закритих атрибутів (властивостей) класу, що нас
            цікавить.
          </p>
          <p>
            Сеттери є методами, що застосовуються в ООП з метою присвоєння
            (зміни) значення у закритих атрибутів (властивостей) класу, який нас
            цікавить.
          </p>
        </div>
        <p>
          Створимо екземпляр об'єкта і спробуємо отримати доступ до його назви
          за допомогою звичайного методу:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            book1 = Book("Террор", "Дэн Симмонс", "558-0743553565")
            <br />
            # отримуємо приватні атрибути за допомогою геттерів
            <br />
            print(book1.__title)
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          AttributeError: 'Book' object has no attribute '__title'
        </div>
        <p>Скористаємося геттерами:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # отримуємо приватні атрибути за допомогою геттерів
            <br />
            print(book1.get_title())
            <br />
            print(book1.get_author())
            <br />
            print(book1.get_isbn())
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Террор
          <br />
          Дэн Симмонс
          <br />
          558-0743553565
        </div>
        <p>Змінимо назву за допомогою сетера і виведемо результат:</p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # змінюємо назву за допомогою сетера
            <br />
            book1.set_title(«Ендіміон»)
            <br />
            print(book1.get_title())
          </code>
        </div>
        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Эндимион
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">Наслідування</p>

        <p className="mt-4">
          <span className=" text-red-500 font-semibold mr-1 ">
            Наслідування
          </span>
          - процес створення нового класу на основі наявного класу. Новий клас,
          який називають підкласом або похідним класом, успадковує властивості
          та методи наявного класу, який називають суперкласом або базовим
          класом.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less29_3.png"
          />{" "}
          <p className="mt-6 text-xl font-semibold mb-4">Наслідування</p>
        </div>

        <p>
          Для ілюстрації концепції успадкування ми визначимо клас Publication,
          який має властивості, спільні для всіх публікацій - title, author і
          year, а також спільний метод display():
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Publication:
            <br />
            &nbsp;&nbsp;def __init__(self, title, author, year):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.title = title
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.author = author
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self.year = year
            <br />
            <br />
            &nbsp;&nbsp;def display(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("Назва:", self.title)
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("Автор:", self.author)
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;print("Рік випуску:", self.year)
            <br />
          </code>
        </div>
        <p>
          Тепер створимо два підкласи Book і Magazine, які успадковують усі
          властивості та методи від класу Publication, і крім того, мають свої
          атрибути. Підклас Book додає властивість isbn і перевизначає метод
          display() для включення властивості isbn. Підклас Magazine додає
          властивість issue_number (номер випуску) і перевизначає метод
          display() для включення властивості issue_number:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Book(Publication):
            <br />
            &nbsp;&nbsp;def __init__(self, title, author, year, isbn):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(title, author, year)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.isbn = isbn
            <br /> <br />
            &nbsp;&nbsp;def display(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super().display()
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("ISBN:", self.isbn)
            <br /> <br /> <br />
            class Magazine(Publication):
            <br />
            &nbsp;&nbsp;def __init__(self, title, author, year, issue_number):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(title, author, year)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.issue_number = issue_number
            <br /> <br />
            &nbsp;&nbsp;def display(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super().display()
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("Номер випуску:", self.issue_number)
          </code>
        </div>
        <p>
          Тепер, якщо ми створимо екземпляр класу Book або класу Magazine, ми
          зможемо викликати метод display()для відображення властивостей
          об'єкта. Спочатку буде викликано метод display() підкласу (Book або
          Magazine), який зі свого боку викличе метод display() суперкласу
          Publication за допомогою функції super(). Це дає нам змогу повторно
          використовувати код суперкласу й уникнути дублювання коду в підкласах:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            # створюємо об'єкт книжки
            <br />
            book1 = Book("Выбор", "Эдит Эгер", 2019, "112-3333273566")
            <br />
            # створюємо об'єкт випуску журналу
            <br />
            magazine1 = Magazine("Вокруг света", "коллектив авторов", 2023, 3)
            <br />
            # виводимо інформацію про книгу та номер журналу
            <br />
            book1.display()
            <br />
            magazine1.display()
            <br />
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Назва: Вибір
          <br />
          Автор: Едіт Егер
          <br />
          Рік випуску: 2019
          <br />
          ISBN: 112-3333273566
          <br />
          Назва: Навколо світу
          <br />
          Автор: колектив авторів
          <br />
          Рік випуску: 2023
          <br />
          Номер випуску: 3
        </div>

        <div className="bg-gray-100 mt-4 mb-4 p-4 border-red-500 border-l-4">
          <span className="font-semibold">Примітка: </span>
        </div>

        <p className="mt-6 text-2xl font-semibold mb-4">Поліморфізм</p>

        <p className="mt-4">
          <span className=" text-red-500 font-semibold mr-1 ">Поліморфізм</span>
          - здатність об'єктів набувати різних форм. В ООП поліморфізм дає змогу
          розглядати об'єкти різних класів так, наче б вони були об'єктами
          одного класу.
        </p>

        <div className="mt-6 mb-2 flex justify-center items-center flex-col">
          <img
            className="transition-transform hover:shadow-2xl "
            alt="Interpritprogramm"
            src="/less29_2.png"
          />{" "}
          <p className="mt-6 text-xl font-semibold mb-4">Поліморфізм</p>
        </div>

        <p>
          Якщо говорити буквально, то слово polymorphism означає «безліч форм».
        </p>
        <p>
          Тобто одна й та сама людина може набувати багатьох форм за аналогією
          зміни ролей актора в театрі. Так і код у програмуванні - завдяки
          використанню вищезгаданого принципу ООП, код стає гнучкішим, адже на
          практиці розробник отримує змогу використовувати одну й ту саму
          сутність (method, оператор чи об'єкт) для представлення різних типів у
          різних сценаріях.
        </p>
        <p>
          Розглянемо поліморфізм на прикладі класу Confectionary (кондитерські
          вироби):
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Confectionary:
            <br />
            &nbsp;&nbsp;def __init__(self, name, price):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.name = name
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self.price = price
            <br />
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(f"{`{self.name}`} по ціні
            {`{self.price}`} грн/кг")
            <br />
            <br />
            class Cake(Confectionary):
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(f"{`{self.name}`} торт коштує
            {`{self.price}`} грн/кг")
            <br />
            <br />
            class Candy(Confectionary):
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(f"{`{self.name}`} цукерки коштують
            {`{self.price}`} грн/кг")
            <br />
            <br />
            class Cookie(Confectionary):
            <br />
            &nbsp;&nbsp;pass
          </code>
        </div>
        <p>
          У цьому прикладі ми визначаємо базовий клас Confectionary, який має
          атрибути name і price, а також метод describe(). Потім ми визначаємо
          три підкласи класу Confectionary: Cake, Candy і Cookie. Cake і Candy
          перевизначають метод describe() своїми власними реалізаціями, які
          включають тип кондитерського виробу (торт і цукерки відповідно), а
          Cookie успадковує дефолтний метод describe() від Confectionary.
        </p>
        <p>
          Якщо створити екземпляри цих класів і викликати їхні методи
          describe(), можна переконатися, що результат залежить від реалізації
          методу в кожному конкретному підкласі:
        </p>
        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            cake = Cake("Києвський", 120)
            <br />
            candy = Candy("Бджілкі", 56)
            <br />
            cookie = Cookie("Вівсяне печево", 50)
            <br />
            <br />
            cake.describe()
            <br />
            candy.describe()
            <br />
            cookie.describe()
            <br />
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          Києвський торт коштує 120 грн/кг
          <br />
          Бджілкі цукерки коштують 56 грн/кг
          <br />
          Вівсяне печево по ціні 50 грн/кг
        </div>
        <p>
          Тепер розберемо на прикладі класу Beverage (напій) взаємодію
          поліморфізму з іншими концепціями ООП. Beverage - батьківський клас,
          який містить:
        </p>

        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            атрибути назви, обсягу та ціни
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            методи для отримання та встановлення цих атрибутів
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            метод для виведення опису напою.
          </li>
        </ul>
        <p>
          Soda (газована вода) - дочірній клас Beverage, у нього є додатковий
          атрибут flavor (смак) і власний метод describe(), що включає flavor.
          DietSoda - ще один дочірній клас Soda, який успадковує всі атрибути та
          методи Soda, але перевизначає метод describe(), щоб вказати, що
          газована вода є дієтичною:
        </p>

        <div className="bg-gray-100 mt-8 mb-4 p-3 rounded-sm inline-block min-w-max">
          <code>
            class Beverage:
            <br />
            &nbsp;&nbsp;def __init__(self, name, size, price):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self._name = name
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self._size = size
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;self._price = price
            <br /> <br />
            &nbsp;&nbsp;def get_name(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp;return self._name
            <br />
            <br />
            &nbsp;&nbsp; def get_size(self):
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp; return self._size
            <br />
            <br />
            &nbsp;&nbsp;def get_price(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return self._price
            <br />
            <br />
            &nbsp;&nbsp;def set_price(self, price):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self._price = price
            <br />
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; return f'{`{self._size}`} л солодкої
            газованої води "{`{self._name}`}" коштує {`{self._price}`} гривень.'
            <br />
            <br />
            class Soda(Beverage):
            <br />
            &nbsp;&nbsp;def __init__(self, name, size, price, flavor):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super().__init__(name, size, price)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;self._flavor = flavor
            <br />
            <br />
            &nbsp;&nbsp;def get_flavor(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return self._flavor
            <br />
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return f'{`{self._size}`} л солодкої
            газованої води "{`{self._name}`}" зі смаком "{`{self._flavor}`}"
            коштує {`{self._price}`} гривень.'
            <br />
            <br />
            class DietSoda(Soda):
            <br />
            &nbsp;&nbsp;def __init__(self, name, size, price, flavor):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; super().__init__(name, size, price, flavor)
            <br />
            <br />
            &nbsp;&nbsp;def describe(self):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return f'{`{self._size}`} л дієтичної
            солодкої газованої води "{`{self._name}`}" зі смаком "
            {`{self._flavor}`}" коштує {`{self._price}`} гривень.'
            <br />
            <br />
            regular_soda = Soda('Sprite', 0.33, 45, 'лимон')
            <br />
            print(regular_soda.describe())
            <br />
            diet_soda = DietSoda('Mirinda', 0.33, 50, 'мандарин')
            <br />
            print(diet_soda.describe())
            <br />
            regular_soda = Soda('Буратино', 1.5, 65, 'дюшес')
            <br />
            print(regular_soda.describe())
          </code>
        </div>

        <p className="font-semibold">Результат:</p>
        <div className=" mb-4 rounded-sm mt-2 inline-block min-w-max">
          0.33 л газованої води «Sprite» зі смаком «лимон» коштує 45 гривень.
          <br />
          0.33 л дієтичної газованої води «Mirinda» зі смаком «мандарин» коштує
          50 гривень.
          <br />
          1.5 л газованої води «Буратіно» зі смаком «дюшес» коштує 65 гривень.
        </div>

        <p>Цей приклад демонструє:</p>

        <ul>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Інкапсуляцію, оскільки атрибути захищені символами підкреслення і
            можуть бути доступні тільки через методи getter і setter.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Успадкування, оскільки Soda і DietSoda успадковують атрибути і метод
            від Beverage.
          </li>
          <li className="flex items-center mt-4">
            <FaArrowRight className="text-red-500 mr-2" />
            Поліморфізм, оскільки кожен клас має свою власну версію методу
            describe(), який повертає різні результати залежно від конкретного
            класу.
          </li>
        </ul>

        <div className="mb-4 mt-8">
          {done ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/6630012587ab0d1def499537`}
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
export default Lesson29;

// import MainList from "./limaker";
// import PartList from "./partList";
// import { useState } from "react";
// import {
//   PiNumberCircleOneFill,
//   PiNumberCircleTwoFill,
//   PiNumberCircleThreeFill,
//   PiNumberCircleFourFill,
//   PiNumberCircleFiveFill,
//   PiNumberCircleSixFill,
// } from "react-icons/pi";

// const MenuList = () => {
//   const [menus, setMenus] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);

//   const handleButtonClick = (index) => {
//     const newMenus = [...menus];
//     newMenus[index] = !newMenus[index];
//     setMenus(newMenus);
//   };
//   const listItems = [
//     [
//       { name: "Теорія", text: "Перша програма Hello World!" },
//       { name: "Проект", text: "Перша програма Hello World!" },
//       { name: "Теорія", text: "Змінні та типи даних" },
//       { name: "Теорія", text: "Консольне введення та виведення" },
//       { name: "Теорія", text: "Арифметичні та логічні операції з числами" },
//       { name: "Проект", text: "Калькулятор" },
//       { name: "Теорія", text: "Умовні конструкції, конструкція if" },
//       { name: "Проект", text: "Умовні конструкції, конструкція if" },
//       { name: "Теорія", text: "Цикли" },
//       { name: "Проект", text: "Цикли" },
//       { name: "Теорія", text: "Функції" },
//       { name: "Проект", text: "Функції" },
//     ],
//     [
//       { name: "Теорія", text: "Класи та об'єкти" },
//       { name: "Проект", text: "Класи та об'єкти" },
//       { name: "Теорія", text: "Інкапсуляція, атрибути та властивості" },
//       { name: "Теорія", text: "Наслідування" },
//       { name: "Теорія", text: "Перевизначення функціоналу базового класу" },
//       { name: "Проект", text: "Бібліотека" },
//       { name: "Теорія", text: "Атрибути класу та статичні методи" },
//       { name: "Проект", text: "Умовні конструкції, конструкція if" },
//       { name: "Теорія", text: "Клас оbject. Представлення об'єкту" },
//       { name: "Проект", text: "Автомобільний салон" },
//     ],
//     [
//       { name: "Теорія", text: "Конструкція try...except...finally" },
//       { name: "Проект", text: "Конструкція try...except...finally" },
//       { name: "Теорія", text: "Except та обробка різних типів винятків" },
//       {
//         name: "Теорія",
//         text: "Генерація винятків та створення своїх типів",
//       },
//       { name: "Теорія", text: "Генерація винятків та створення своїх типів" },
//     ],
//     [
//       { name: "Теорія", text: "Списки" },
//       { name: "Проект", text: "Списки" },
//       { name: "Теорія", text: "Кортежі" },
//       {
//         name: "Теорія",
//         text: "Словники",
//       },
//       { name: "Теорія", text: "Множини" },
//       { name: "Проект", text: "Кортежі, словники , множини" },
//     ],
//     [
//       { name: "Теорія", text: "Робота з рядками" },
//       { name: "Теорія", text: "Основні методи рядків" },
//       { name: "Теорія", text: "Форматування" },
//       {
//         name: "Теорія",
//         text: "Словники",
//       },
//       { name: "Теорія", text: "Модуль random" },
//       { name: "Теорія", text: "Модуль math" },
//       { name: "Проект", text: "Калькулятор" },
//     ],
//     [
//       { name: "Теорія", text: "Відкриття та закриття файлів" },
//       { name: "Теорія", text: "Текстові файли" },
//       { name: "Теорія", text: "Файли CSV" },
//       {
//         name: "Теорія",
//         text: "Словники",
//       },
//       { name: "Теорія", text: "Програма підрахунку слів" },
//       { name: "Теорія", text: "Запис та читання архівних zip-файлів" },
//       { name: "Проект", text: "Робота з файлами" },
//     ],
//   ];

//   return (
//     <div>
//       <MainList />
//       <PartList
//         text="В цьому розділі ми познайомимося з основами пайтону а саме змінними типами данних умовних конструкціях циклах та функціях"
//         name="Основи Python"
//         list={listItems[0]}
//         icon={
//           <PiNumberCircleOneFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[0]}
//         setA={() => handleButtonClick(0)}
//       />
//       <PartList
//         text="В цьому розділі ми познайомимося з основами об'єктно-орієнтованого програмування: навчимося створювати та взаємодіяти з об'єктами."
//         name="Обєкто-орієнтоване програмування"
//         list={listItems[1]}
//         icon={
//           <PiNumberCircleTwoFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[1]}
//         setA={() => handleButtonClick(1)}
//       />
//       <PartList
//         text="В цьому розділі ми вивчимо ефективні методи роботи з помилками та управління винятками у програмуванні"
//         name="Обробка помилок та винятків"
//         list={listItems[2]}
//         icon={
//           <PiNumberCircleThreeFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[2]}
//         setA={() => handleButtonClick(2)}
//       />
//       <PartList
//         text="У цьому розділі ви дізнаєтесь як створювати структури даних для зручного зберігання та обробки інформації"
//         name="Списки, кортежі та словники"
//         list={listItems[3]}
//         icon={
//           <PiNumberCircleFourFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[3]}
//         setA={() => handleButtonClick(3)}
//       />
//       <PartList
//         text="В цьому розділі ми познайомимося з обробкою та маніпуляцією рядків у Python, вивчимо основні операції та методи для роботи з текстовою інформацією."
//         name="Рядки та модулі"
//         list={listItems[4]}
//         icon={
//           <PiNumberCircleFiveFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[4]}
//         setA={() => handleButtonClick(4)}
//       />
//       <PartList
//         text="В цьому розділі ми вивчимо основи роботи з файлами в Python."
//         name="Робота з файлами"
//         list={listItems[5]}
//         icon={
//           <PiNumberCircleSixFill className="lg:text-[55px] md:text-[40px] sm:text-[30px] text-[25px]" />
//         }
//         a={menus[5]}
//         setA={() => handleButtonClick(5)}
//       />
//     </div>
//   );
// };
// export default MenuList;
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function MenuList() {
  const topics = [
    {
      title: "Фундаментальні принципи Python",
      content:
        "Починаючи з фундаментальних принципів, зокрема синтаксису, ми вивчаємо алфавіт Python і намагаємося конструювати прості вирази та блоки коду, схожі на створення простих слів і речень.",
      items: [
        "Введення",
        "Змінні та типи даних",
        "Оператори в Python",
        "Умовні вирази",
        "Конструкція if",
        "Цикли for while",
        "Операції з рядками",
      ],
    },
    {
      title: "Функції в Python",
      content:
        "Для полегшення та оптимізації роботи ознайомимося з  операціями з рядками для ефективного форматування коду. Після цього ми вивчатимемо модулі random та math, де освоїмо генерацію випадкових чисел та математичні операції.",
      items: [
        "Функції",
        "Рекурсія",
        "Ключове слово global",
        "Область видимості змінних",
        "Параметри та аргументи функції",
      ],
    },

    {
      title: "Списки, кортежі та словники",
      content:
        "В цьому розділі ви опануєте навички роботи зі списками, кортежами та словниками для ефективного структурування та оптимізації обробки інформації.",
      items: ["Списки", "Кортежі", "Словники", "Множини"],
    },

    {
      title: "Робота з файлами, модулями, пакетами в Python ",
      content:
        "В цьому розділі ми вивчимо основи роботи з файлами в Python, включаючи відкриття та закриття файлів, опрацювання текстових файлів та формату CSV. Також розглянемо програму для підрахунку слів та навчимося записувати та читати архівні zip-файли.",
      items: [
        "Робота з файлами в Python",
        "Робота з каталогами в Python",
        "Пакети в Python",
      ],
    },

    {
      title: "Об'єкто-орієнтоване програмування",
      content:
        "Від основ – до майстерності. Вивчаймо принципи ООП, працюймо з класами та об'єктами, і освоюймо інші ключові аспекти. На завершення цього модуля ти будеш володіти важливими навичками ООП, готовими до впровадження в реальні проекти",
      items: [
        "Класи та об'єкти",
        "Конструктори та деструктори",
        "Інкапсуляція та поліморфізм, наслідування",
      ],
    },
  ];

  const [expanded, setExpanded] = useState(
    new Array(topics.length).fill(false)
  );

  const handleButtonClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      {topics.map((topic, index) => (
        <div
          className={`grid grid-cols-6 bg-gray-50 shadow-inherit rounded-md text-gray-900
          lg:p-12 md:p-12 sm:p-8 p-6
          lg:mb-6 md:mb-6 sm:mb-4 mb-4
          lg:ml-36 md:ml-12 sm:ml-12 ml-10
          lg:mr-32 md:mr-12 sm:mr-12 mr-10
          lg:text-xl md:text-sm sm:text-base text-xs
           ${
             !expanded[index]
               ? "lg:h-[150px] md:h-[120px] sm:h-[120px] h-[100px]"
               : "h-auto"
           }`}
        >
          <div
            className="col-span-2 font-semibold 
          lg:w-[270px] md:w-[250px] sm:w-[180px] w-[120px] 
          "
          >
            {topic.title}
          </div>

          <div className="col-span-3">
            {topic.content.length > 100 && !expanded[index]
              ? topic.content.substring(0, 90) + "..."
              : topic.content}
            {expanded[index] ? (
              <div className="pt-8 ">
                <p
                  className="font-semibold 
                lg:pb-4 md:pb-2 sm:pb-2 pb-1
                "
                >
                  Теми модуля
                </p>
                <ul
                  className="grid grid-cols-2
                 lg:w-[700px]  md:w-[500px]  sm:w-[450px] w-[300px] 
                 "
                >
                  {topic.items.map((item, i) => (
                    <li
                      key={i}
                      className={` 
                      mr-10
                      pb-1
                      font-normal `}
                      style={{ top: `${i * 44}px` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="justify-self-end">
            <button
              onClick={() => handleButtonClick(index)}
              className="bg-[#a0a0a02e] shadow-inner flex justify-center items-center 
             lg:rounded-lg  md:rounded-lg sm:rounded-md rounded-md
             lg:w-16  md:w-12  sm:w-12 w-8
             lg:h-16  md:h-12  sm:h-12 h-8
             "
            >
              {!expanded[index] ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default MenuList;

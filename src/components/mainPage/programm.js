import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Program() {
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
      <div
        className="grid grid-cols-6 text-[#FE0000] font-bold
         lg:ml-36  md:ml-12 sm:ml-16 ml-10
         lg:mr-32  md:mr-20 sm:mr-16 mr-10
         lg:mt-20  md:mt-16 sm:mt-12 mt-8
         lg:mb-4   md:mb-4  sm:mb-4  mb-4
         lg:text-xl md:text-l sm:text-base text-xs
         "
      >
        <p className="col-span-2">6 модулів</p>
        <p className="col-span-3">30 тем</p>
        <p className="justify-self-end">4 місяці</p>
      </div>
      {topics.map((topic, index) => (
        <div
          className={`grid grid-cols-6 border-t border-red-200 text-gray-900
          lg:pt-12 md:pt-12 sm:pt-8 pt-6
          lg:pb-12 md:pb-12 sm:pb-8 pb-6
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
              className="bg-[#a0a0a02e] flex justify-center items-center 
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

  // <div>
  //   {topics.map((topic, index) => (
  //     <ul key={index} className="flex ml-[22%] mb-[10px]">
  //       <li
  //         className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white lg:text-xl md:text-sm text-[10px] font-extrabold w-[25%] ${
  //           expanded[index]
  //             ? "lg:h-[340px] md:h-[350px]  h-[370px] "
  //             : "h-[75px]"
  //         } rounded-l-[20px]`}
  //       >
  //         <span className="absolute top-2 text-center w-[90%]">
  //           {topic.title}
  //         </span>
  //         {expanded[index] && (
  //           <span className="absolute lg:top-20 top-16  font-medium lg:text-[13px] md:text-[10px] text-[8px] pl-[20px] pr-[30px]">
  //             {topic.content}
  //           </span>
  //         )}
  //       </li>
  //       <li
  //         className={`relative flex items-center justify-start bg-[#F5F5F5] text-black w-[50%] ${
  //           expanded[index] ? "lg:h-[330px]" : "h-[75px]"
  //         } rounded-r-[20px]`}
  //       >
  //         <button
  //           onClick={() => handleButtonClick(index)}
  //           className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7"
  //         >
  //           {!expanded[index] ? (
  //             <img
  //               className="lg:w-[12px]"
  //               src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png"
  //               alt="arrow"
  //             />
  //           ) : (
  //             <img
  //               src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png"
  //               alt="collapse-arrow"
  //             />
  //           )}
  //         </button>
  //         <span className="absolute top-3.5 right-12 lg:text-[16px] md:text-[12px] text-[10px] text-gray-700 font-bold">
  //           Теми: {topic.items.length}
  //         </span>
  //         {expanded[index] && (
  //           <div>
  //             {topic.items.map((item, i) => (
  //               <span
  //                 key={i}
  //                 className={`inline-block p-2  m-2 font-normal lg:text-[13px] md:text-[10px] text-[8px] pl-3 pr-3 bg-[#dadada] rounded-xl`}
  //                 style={{ top: `${i * 44}px` }}
  //               >
  //                 {item}
  //               </span>
  //             ))}
  //           </div>
  //         )}
  //       </li>
  //     </ul>
  //   ))}
  // </div>
}

export default Program;

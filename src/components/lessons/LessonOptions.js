import { useParams } from "react-router-dom";
import MenuModules from "./MenuModules";
import Lesson1 from "./LessonsSklets/lesson/lesson1";
import Lesson2 from "./LessonsSklets/lesson/lesson2";
import Lesson3 from "./LessonsSklets/lesson/lesson3";
import Lesson4 from "./LessonsSklets/lesson/lesson4";
import Lesson5 from "./LessonsSklets/lesson/lesson5";
import Lesson6 from "./LessonsSklets/lesson/lesson6";
import Lesson7 from "./LessonsSklets/lesson/lesson7";
import Lesson8 from "./LessonsSklets/lesson/lesson8";
import Lesson9 from "./LessonsSklets/lesson/lesson9";
import Lesson10 from "./LessonsSklets/lesson/lesson10";
import Lesson11 from "./LessonsSklets/lesson/lesson11";
import Lesson12 from "./LessonsSklets/lesson/lesson12";
import Lesson13 from "./LessonsSklets/lesson/lesson13";
import Lesson14 from "./LessonsSklets/lesson/lesson14";
import Lesson15 from "./LessonsSklets/lesson/lesson15";
import Lesson16 from "./LessonsSklets/lesson/lesson16";
import Lesson17 from "./LessonsSklets/lesson/lesson17";
import Lesson18 from "./LessonsSklets/lesson/lesson18";
import Lesson19 from "./LessonsSklets/lesson/lesson19";
import Lesson20 from "./LessonsSklets/lesson/lesson20";
import Lesson21 from "./LessonsSklets/lesson/lesson21";
import Lesson22 from "./LessonsSklets/lesson/lesson22";
import Lesson23 from "./LessonsSklets/lesson/lesson23";
import Lesson24 from "./LessonsSklets/lesson/lesson24";
import Lesson25 from "./LessonsSklets/lesson/lesson25";
import Lesson26 from "./LessonsSklets/lesson/lesson26";
import Lesson27 from "./LessonsSklets/lesson/lesson27";
import Lesson28 from "./LessonsSklets/lesson/lesson28";
import Lesson29 from "./LessonsSklets/lesson/lesson29";
import { useState } from "react";
import axios from "../axios";
import { useEffect } from "react";
import Test1 from "./LessonsSklets/testen/operator";
import Test2 from "./LessonsSklets/testen/forwhile";
import Test3 from "./LessonsSklets/testen/function";
import Test4 from "./LessonsSklets/testen/list";
import Test5 from "./LessonsSklets/testen/file";
import Test6 from "./LessonsSklets/testen/modul";
import Test7 from "./LessonsSklets/testen/oop";
import ConsoleLesson1 from "./LessonsSklets/console1";
import ConsoleLesson2 from "./LessonsSklets/console2";
import ConsoleLesson3 from "./LessonsSklets/console3";
import ConsoleLesson4 from "./LessonsSklets/console4";
import ConsoleLesson5 from "./LessonsSklets/console5";
const Less = () => {
  const { id, lessonId } = useParams();
  console.log(lessonId);
  let show;
  const [done, setDone] = useState("");

  useEffect(() => {
    axios
      .get(`/doneAll`)
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [lessonId]);

  switch (lessonId) {
    case "662ff93387ab0d1def499518":
      show = (
        <Lesson1
          module={"Фундаментальні принципи Python"}
          name={"Короткий опис мови програмування Python"}
        />
      );
      break;
    case "662ff93c87ab0d1def499519":
      show = (
        <Lesson2
          module={"Фундаментальні принципи Python"}
          name={"Завантаження Python та середовища розробки"}
        />
      );
      break;
    case "6635d2a28a57c07fa81e88bb":
      show = (
        <Lesson3
          module={"Фундаментальні принципи Python"}
          name={"Ключові слова та ідентифікатори в Python"}
        />
      );
      break;
    case "662ff99c87ab0d1def49951c":
      show = (
        <Lesson4
          module={"Фундаментальні принципи Python"}
          name={"Типи данних"}
        />
      );
      break;
    case "663a7734d24fe3aae2918cce":
      show = (
        <Lesson20
          module={"Фундаментальні принципи Python"}
          name={"Корисні методи для роботи з рядками"}
        />
      );
      break;
    case "662ff9a787ab0d1def49951e":
      show = (
        <Lesson5
          module={"Фундаментальні принципи Python"}
          name={"Ввід та вивід даних у Python"}
        />
      );
      break;
    case "6637c147ec6e98fa23a45919":
      show = (
        <Lesson6
          module={"Фундаментальні принципи Python"}
          name={"Оператори в Python"}
        />
      );
      break;
    case "6637c1f9ec6e98fa23a4591a":
      show = (
        <Test1
          module={"Фундаментальні принципи Python"}
          name={"Тест ввід та вивід даних у Python , змінні, типи даних"}
        />
      );
      break;
    case "662ffa6687ab0d1def499521":
      show = (
        <Lesson7
          module={"Фундаментальні принципи Python"}
          name={"Умовний оператор if...else"}
        />
      );
      break;
    case "662ffa6d87ab0d1def499522":
      show = (
        <Lesson8
          module={"Фундаментальні принципи Python"}
          name={"Цикл for в Python"}
        />
      );
      break;
    case "662ffa7287ab0d1def499523":
      show = (
        <Lesson9
          module={"Фундаментальні принципи Python"}
          name={"Цикл while в Python"}
        />
      );
      break;
    case "662ffa7e87ab0d1def499524":
      show = (
        <Lesson10
          module={"Фундаментальні принципи Python"}
          name={"Оператори break та continue в Python"}
        />
      );
      break;

    case "6635f93451078fe0ca8b93d8":
      show = (
        <Test2
          module={"Фундаментальні принципи Python"}
          name={"Тест використання циклів"}
        />
      );
      break;

    case "662ffca187ab0d1def499525":
      show = <Lesson11 module={"Функції в Python"} name={"Функції в Python"} />;
      break;
    case "662ffcac87ab0d1def499526":
      show = (
        <Lesson12
          module={"Функції в Python"}
          name={"Параметри та аргументи функції в Python"}
        />
      );
      break;
    case "662ffcb487ab0d1def499527":
      show = (
        <Lesson13 module={"Функції в Python"} name={"Рекурсія в Python"} />
      );
      break;
    case "662ffcba87ab0d1def499528":
      show = (
        <Lesson14
          module={"Функції в Python"}
          name={"Область видимості змінних в Python"}
        />
      );
      break;
    case "6638abb98dab168597758d0a":
      show = (
        <Lesson15
          module={"Функції в Python"}
          name={"Ключове слово global в Python"}
        />
      );
      break;
    case "663889d90dd35f20b0dc1f10":
      show = (
        <Test3 module={"Функції в Python"} name={"Тест функції в Python"} />
      );
      break;

    case "662ffe4b87ab0d1def499529":
      show = (
        <Lesson16 module={"Списки, кортежі та словники"} name={"Списки"} />
      );
      break;

    case "662ffe6887ab0d1def49952a":
      show = (
        <Lesson17 module={"Списки, кортежі та словники"} name={"Словники"} />
      );
      break;

    case "662ffe7187ab0d1def49952b":
      show = (
        <Lesson18 module={"Списки, кортежі та словники"} name={"Множини"} />
      );
      break;

    case "662ffe7687ab0d1def49952c":
      show = (
        <Lesson19 module={"Списки, кортежі та словники"} name={"Кортежі"} />
      );
      break;
    case "662ffe7c87ab0d1def49952d":
      show = (
        <Test4
          module={"Списки, кортежі та словники"}
          name={"Тест списки, кортежі та словники "}
        />
      );
      break;

    case "663000be87ab0d1def499531":
      show = (
        <Lesson21
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Робота з файлами в Python"}
        />
      );
      break;
    case "663000c487ab0d1def499532":
      show = (
        <Lesson22
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Робота з каталогами в Python"}
        />
      );
      break;

    case "663a6fc8d24fe3aae2918ccc":
      show = (
        <Lesson23
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Винятки в Python"}
        />
      );
      break;
    case "663a6fcad24fe3aae2918ccd":
      show = (
        <Lesson24
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Обробка винятків в Python"}
        />
      );
      break;
    case "663000cc87ab0d1def499533":
      show = (
        <Test5
          module={"Списки, кортежі та словники"}
          name={"Теснування операціями з рядками та файлами"}
        />
      );
      break;
    case "6630012d87ab0d1def499538":
      show = (
        <Lesson25
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Обробка винятків в Python"}
        />
      );
      break;
    case "6630012587ab0d1def499537":
      show = (
        <Lesson26
          module={"Робота з файлами, модулями, пакетами в Python"}
          name={"Пакети в Python"}
        />
      );
      break;
    case "6630011487ab0d1def499536":
      show = (
        <Test6
          module={"Списки, кортежі та словники"}
          name={"Теснування по модулям та пакетам"}
        />
      );
      break;
    case "662fe60687ab0d1def49950e":
      show = (
        <Lesson27
          module={"Об'єкто-орієнтоване програмування"}
          name={"Класи та об’єкти в Python"}
        />
      );
      break;
    case "663bb198f22c033d662d474c":
      show = (
        <Lesson28
          module={"Об'єкто-орієнтоване програмування"}
          name={"Конструктори та деструктори в Python"}
        />
      );
      break;
    case "662fe61e87ab0d1def49950f":
      show = (
        <Lesson29
          module={"Об'єкто-орієнтоване програмування"}
          name={"Інкапсуляція та поліморфізм, наслідування, абстракція"}
        />
      );
      break;
    case "662fe63287ab0d1def499510":
      show = (
        <Test7
          module={"Об'єкто-орієнтоване програмуванняи"}
          name={"Теснування по Основам ООП"}
        />
      );
      break;
    case "662ff9b387ab0d1def499520":
      show = <ConsoleLesson1 />;
      break;

    case "6635f93651078fe0ca8b93d9":
      show = <ConsoleLesson2 />;
      break;

    case "663889dc0dd35f20b0dc1f11":
      show = <ConsoleLesson3 />;
      break;
    case "662ffe8787ab0d1def49952f":
      show = <ConsoleLesson4 />;
      break;

    case "664b5ad217f17ac3e34ea92e":
      show = <ConsoleLesson5 />;
      break;

    default:
      break;
  }

  return (
    <div className="h-screen pt-20 grid grid-cols-8">
      <div className="h-[600px] col-span-2 border-r border-gray-300 ">
        <MenuModules done={done} />
      </div>
      <div className="lg:pl-24 lg:pr-16 md:pl-24 md:pr-16 sm:pl-20 sm:pr-4 pl-20 pr-4 overflow-y-auto overflow-x-hidden max-h-[610px] col-span-6 ">
        {show}
      </div>
    </div>
  );
};
export default Less;

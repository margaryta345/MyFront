import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaChevronCircleDown } from "react-icons/fa";
export const Topic = (topic, lessonId, time, IconComponent, IconTask, done) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="flex items-center hover:bg-gray-100 hover:rounded-sm pt-1">
      {IconComponent ? (
        <IconComponent size={18} className="text-green-800 mr-2 ml-3" />
      ) : (
        <div className=" p-[1px] rounded-xl border border-gray-600 mr-2 ml-3">
          <IconTask />
        </div>
      )}

      <div>
        <Link
          to={`/lessons/${id}/${lessonId}`}
          className="lg:text-base md:text-base sm:text-sm text-sm"
        >
          {topic}
        </Link>
        <p className="text-gray-500 lg:text-sm md:text-sm sm:text-xs text-xs mb-2">
          Час читання {time} хвилин
        </p>
      </div>
    </div>
  );
};

export const topicName = (
  index,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  toggleCollapse,
  isCollapsed,
  thema,
  done
) => {
  return (
    <div
      className={`flex justify-between items-center p-2 ${
        isHovered[index] ? "bg-red-100" : ""
      } ${isCollapsed[index] ? "border-b" : ""}`}
    >
      <p
        className="font-semibold lg:text-base md:text-base sm:text-sm text-sm flex  "
        onMouseEnter={handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave(index)}
      >
        <span onClick={toggleCollapse(index)}>
          {isCollapsed[index] ? (
            <IoIosArrowDown className="mt-1 mr-2" />
          ) : (
            <MdArrowForwardIos className="mt-1 mr-2" />
          )}
        </span>
        {thema}
      </p>
      {(done["0"] &&
        done["1"] &&
        done["2"] &&
        index === 0 &&
        thema === "Вступ") ||
      (done["3"] &&
        done["19"] &&
        done["4"] &&
        done["5"] &&
        done["29"] &&
        done["40"] &&
        index === 1 &&
        thema === "Змінні, типи даних та оператори у Python ") ||
      (done["6"] &&
        done["7"] &&
        done["8"] &&
        done["9"] &&
        done["30"] &&
        done["41"] &&
        index === 2 &&
        thema === "Використання циклів, умовних операторів") ||
      (done["10"] &&
        done["11"] &&
        done["12"] &&
        done["13"] &&
        done["14"] &&
        done["31"] &&
        done["42"] &&
        index === 0 &&
        thema === "Функції в Python") ||
      (done["15"] &&
        done["16"] &&
        done["17"] &&
        done["18"] &&
        done["32"] &&
        done["43"] &&
        index === 0 &&
        thema === "Списки, кортежі та словники") ||
      (done["20"] &&
        done["21"] &&
        done["22"] &&
        done["23"] &&
        done["33"] &&
        index === 0 &&
        thema === "Робота з рядками та файлами") ||
      (done["24"] &&
        done["25"] &&
        done["34"] &&
        index === 1 &&
        thema === "Модулі та пакети") ||
      (done["26"] &&
        done["27"] &&
        done["28"] &&
        done["35"] &&
        done["44"] &&
        index === 0 &&
        thema === "Основи ООП") ? (
        <span className="text-sm bg-emerald-100 p-1 pl-2 pr-2 text-green-800 rounded-md font-medium flex items-center ">
          <FaChevronCircleDown size={15} className="text-green-800 mr-2 " />
          Завершено
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

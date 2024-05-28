import MenuLessonsStart from "../pages/lessons";
import { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
const ResultCourse = () => {
  const [done, setDone] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`/lessons`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("error");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/auth/me`)
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-auto grid grid-cols-8">
      <div className="col-span-2">
        <MenuLessonsStart />
      </div>

      <div className="mt-20 ml-12 pr-10 overflow-y-auto max-h-[600px] col-span-6 ">
        <div className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-600 items-center mt-6 flex">
          <Link className="text-red-600 mr-3" to={`/lessons`}>
            <AiOutlineHome className="w-5 h-5" />
          </Link>
          <MdArrowForwardIos className="w-4 h-4 mr-3" />
          <p className="text-red-600 text-base mr-3">Оцінки</p>
        </div>
        {done ? (
          <div>
            <div className="mt-4 border shadow-inner lg:pl-12 md:pl-10 sm:pl-6 pl-6 lg:pr-12 md:pr-10 sm:pr-6 pr-6 pb-4">
              <ul className="pt-4 lg:text-sm md:text-sm sm:text-xs text-xs">
                {Array.isArray(data) ? (
                  data.map((items) =>
                    items.lessons.map((lessons) =>
                      lessons.lesson.map((lesson, index) => (
                        <li
                          className="flex shadow-inner pt-6 pb-6 border mt-3 font-semibold text-gray-800 border-gray-100"
                          key={index}
                        >
                          {done.done[`${lesson.ind}`] === true ||
                          (typeof done.done[`${lesson.ind}`] === "string" &&
                            parseFloat(done.done[`${lesson.ind}`]) > 80) ? (
                            <IoCheckmarkDoneCircle
                              size={24}
                              className="text-green-800 mr-2 ml-3"
                            />
                          ) : (
                            <FaCircleArrowRight
                              size={24}
                              className="text-[red] mr-2 ml-3"
                            />
                          )}
                          <Link
                            to={`/lessons/${items._id}/${lesson.lessonId}`}
                            className="flex items-baseline justify-between lg:text-base md:text-base sm:text-sm text-sm"
                            style={{ width: "1000px" }} // Пряме встановлення ширини для вирівнювання
                          >
                            {lesson.topic}
                            {typeof done.done[`${lesson.ind}`] === "string" && (
                              <p className="mr-6">
                                {lesson.topic !== "Програма"
                                  ? `${Math.round(done.done[lesson.ind])}%`
                                  : ""}
                              </p>
                            )}
                          </Link>
                        </li>
                      ))
                    )
                  )
                ) : (
                  <li>No data available</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default ResultCourse;

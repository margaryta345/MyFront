import axios from "../axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuLessonsStart from "../pages/lessons";
import { LiaBookReaderSolid } from "react-icons/lia";
import { BiEdit } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { FaChevronCircleDown } from "react-icons/fa";
import { topicName } from "./items";
import { Topic } from "./items";
export const FullLesson = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const [done, setDone] = useState("");

  useEffect(() => {
    axios
      .get(`/doneAll`)
      .then((res) => {
        setDone(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isHovered, setIsHovered] = useState([false, false, false, false]);
  const [isCollapsed, setIsCollapsed] = useState([true, true, true, true]);

  const toggleCollapse = (index) => () => {
    const updatedCollapsed = [...isCollapsed];
    updatedCollapsed[index] = !updatedCollapsed[index];
    setIsCollapsed(updatedCollapsed);
  };

  const handleMouseEnter = (index) => () => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = true;
      return updatedHovered;
    });
  };

  const handleMouseLeave = (index) => () => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = false;
      return updatedHovered;
    });
  };

  useEffect(() => {
    axios
      .get(`/lessons/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert("error");
      });
  }, [id]);
  console.log(data);

  return (
    <div className="  grid grid-cols-8 ">
      <div className="col-span-2 ">
        <MenuLessonsStart />
      </div>
      {isLoading ? null : (
        <div className="mt-20   pl-10 overflow-y-auto max-h-[600px] col-span-6 ">
          <div className="h-auto text-gray-700 border border-gray-300 lg:w-[700px] md:w-[500px] sm:w-[400px] w-[280px] lg:ml-10 md:ml-8 sm:ml-6 ml-9 mt-4">
            <p
              className="font-semibold flex items-center hover:bg-red-100 lg:text-base md:text-base sm:text-sm text-sm lg:pl-12 md:pl-10 sm:pl-6 pl-6 lg:p-4 md:p-4 sm:p-2 p-2"
              onClick={toggleCollapse(3)}
            >
              <span>
                {isCollapsed[3] ? (
                  <IoIosArrowDown className="mt-1 mr-2" />
                ) : (
                  <MdArrowForwardIos className="mt-1 mr-2" />
                )}
              </span>
              {data.name}
            </p>
            {isCollapsed[3] ? (
              <div>
                <div className="border-b lg:pl-12 md:pl-10 sm:pl-6 pl-6 pb-4">
                  <ul className="pt-1 lg:text-sm md:text-sm sm:text-xs text-xs">
                    <li className="flex items-center pb-1">
                      <div className="p-[1px] rounded-xl border border-gray-600 mr-1">
                        <LiaBookReaderSolid />
                      </div>
                      {data.learnTime}
                    </li>
                    <li className="flex items-center">
                      <div className="p-[1px] rounded-xl border border-gray-600 mr-1">
                        <BiEdit />
                      </div>
                      {data.test}
                    </li>
                  </ul>
                </div>
                <p className="pt-4 lg:text-sm md:text-sm sm:text-xs text-xs pb-4 p-4 lg:pl-12 md:pl-10 sm:pl-6 pl-6">
                  {data.einleitung}
                </p>
                {data.lessons.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`lg:ml-12 md:ml-10 sm:ml-6 ml-6 mr-8 mb-4 mt-4 ${
                        isHovered[index]
                          ? "border border-red-200 rounded-md"
                          : ""
                      }`}
                    >
                      {topicName(
                        index,
                        isHovered,
                        handleMouseEnter,
                        handleMouseLeave,
                        toggleCollapse,
                        isCollapsed,
                        item.title,
                        done
                      )}
                      {isCollapsed[index] ? (
                        <>
                          {item.lesson.map((lessonItem, lessonIndex) =>
                            Topic(
                              lessonItem.topic,
                              lessonItem.lessonId,
                              lessonItem.time,
                              "",
                              LiaBookReaderSolid,
                              done,
                              lessonIndex
                            )
                          )}
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

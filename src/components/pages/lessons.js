import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLessons } from "../../redux/slices/lessons";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import axios from "../axios";
function MenuLessonsStart() {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state.lessons);
  const isLessonsLoading = lessons.status === "loading";
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchLessons());
  }, []);
  console.log(lessons);
  console.log(id);

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

  const lengthOfArray = Object.keys(done).length;

  console.log(done["1"]);

  const percentage = Math.round((lengthOfArray / 29) * 100);

  console.log(percentage);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="h-screen">
      <div
        className="  w-auto
      lg:pl-10 md:pl-8 sm:pl-6 pl-4
      pt-20 flex overflow-y-auto h-full
      
      "
      >
        <div className="p-2 pt-10 border-r-2 lg:pr-10 md:pr-8 sm:pr-6 pr-4 ">
          <Link
            to="/lessons"
            className="mb-2  lg:text-2xl md:text-xl sm:text-xl text-lg font-bold "
          >
            Курс Python Basic
          </Link>
          <div>
            <p className="lg:text-base md:text-base sm:text-sm text-sm">
              Прогрес у курсі: {percentage} / 100 %
            </p>
            <div className="flex justify-between mt-3 bg-gray-200 rounded-lg">
              <div
                style={{ width: `${percentage}%` }}
                className="h-2 bg-gradient-to-r from-rose-500 to-red-700"
              ></div>
            </div>
          </div>
          <div
            className={`mt-4 lg:text-lg md:text-lg sm:text-base text-sm font-semibold text-gray-700  ${
              isHovered ? "border border-red-200 rounded-md" : ""
            }`}
          >
            <div className="flex pt-2 pb-2 pl-2 rounded-sm items-center hover:bg-red-100 ">
              <div
                className="flex items-center w-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span onClick={toggleCollapse}>
                  {isCollapsed ? (
                    <IoIosArrowDown className="mt-1 mr-2" />
                  ) : (
                    <MdArrowForwardIos className="mt-1 mr-2" />
                  )}
                </span>
                <p className="lg:text-lg md:text-base sm:text-sm text-sm">
                  Матеріал курсу
                </p>
              </div>
            </div>
            {isCollapsed ? (
              <div className="mt-2 ">
                {(isLessonsLoading ? [...Array(5)] : lessons.items).map(
                  (obj, index) =>
                    isLessonsLoading ? null : (
                      <div
                        key={obj.id || index}
                        className={`flex p-3  pl-4 items-center mb-1 font-normal text-sm 
                      ${
                        id === obj._id
                          ? "border-l-4 flex bg-gray-100 border-l-red-600 p-2 items-center w-full h-full"
                          : " hover:bg-gray-100 "
                      }`}
                      >
                        <div>
                          {(done["0"] &&
                            done["1"] &&
                            done["2"] &&
                            done["3"] &&
                            done["19"] &&
                            done["4"] &&
                            done["5"] &&
                            done["29"] &&
                            done["40"] &&
                            done["6"] &&
                            done["7"] &&
                            done["8"] &&
                            done["9"] &&
                            done["30"] &&
                            done["41"] &&
                            index === 0) ||
                          (done["10"] &&
                            done["11"] &&
                            done["12"] &&
                            done["13"] &&
                            done["14"] &&
                            done["31"] &&
                            done["42"] &&
                            index === 1) ||
                          (done["15"] &&
                            done["16"] &&
                            done["17"] &&
                            done["18"] &&
                            done["32"] &&
                            done["43"] &&
                            index === 2) ||
                          (done["20"] &&
                            done["21"] &&
                            done["22"] &&
                            done["23"] &&
                            done["23"] &&
                            done["33"] &&
                            done["24"] &&
                            done["25"] &&
                            done["34"] &&
                            index === 3) ||
                          (done["26"] &&
                            done["27"] &&
                            done["28"] &&
                            done["35"] &&
                            done["44"] &&
                            index === 4) ? (
                            <FaChevronCircleDown
                              size={15}
                              className="text-green-800 mr-2 ml-2"
                            />
                          ) : (
                            <FaCircle
                              size={15}
                              className="text-gray-200 mr-2 ml-2"
                            />
                          )}
                        </div>
                        <div>
                          <Link
                            className="lg:text-[17px] md:text-[15px] sm:text-sm text-xs"
                            to={`/lessons/${obj._id} `}
                          >
                            {obj.name}
                          </Link>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="lg:text-lg ml-4 md:text-lg sm:text-base text-sm font-semibold text-gray-700">
            <Link
              to="/resulat"
              className="block pt-1 pb-2 hover:border-l-4 hover:border-red-600 pl-4
            lg:text-lg md:text-base sm:text-sm text-sm"
            >
              Оцінки
            </Link>
            <Link
              to="/resources"
              className="mt-2 mb-10 pt-2 pb-2 hover:border-l-4 hover:border-red-600 pl-4
            lg:text-lg md:text-base sm:text-sm text-sm"
            >
              Ресурси
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MenuLessonsStart;

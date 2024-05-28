import { Link, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { IoIosDoneAll } from "react-icons/io";
import { ImgMaker, Topic } from "./text";
function StruckLess({ module, name, mainPart }) {
  const { id } = useParams();
  const [buttonOn, setButtonOn] = useState(false);
  console.log(id);

  const onButtonClick = () => {
    setButtonOn(true);
  };
  return (
    <div className="">
      <div className="text-base text-gray-600  items-center mt-6 flex">
        <Link className="text-red-600 mr-2" to={`/lessons/${id}`}>
          {module}
        </Link>
        <MdArrowForwardIos size={18} />
        <p className="ml-2">{name}</p>
      </div>

      <div className="mt-6">
        <p className=" text-3xl mb-10 ">{name}</p>

        {mainPart}

        <div className="mb-4 mt-8">
          {buttonOn ? (
            <div className="flex items-center">
              <Link
                to={`/lessons/${id}/662ff93c87ab0d1def499519`}
                onClick={onButtonClick}
                className="p-4 mr-4  bg-red-500 text-xl text-white font-semibold rounded-md"
              >
                Перейти до наступного елементу
              </Link>
              <p className="flex text-green-700 items-center text-xl">
                <IoIosDoneAll size={40} /> Завершено
              </p>
            </div>
          ) : (
            <button
              onClick={onButtonClick}
              className="p-4 mr-4  bg-red-500 text-xl text-white font-semibold rounded-md"
            >
              Позначити як виконане
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default StruckLess;

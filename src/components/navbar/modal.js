import { IoClose } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LiaBookReaderSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import "./menu.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";

const item = (src, text) => {
  return (
    <li className="transition duration-300 hover:text-red-500  hover:translate-x-[10px] flex">
      {src}
      <span className="ml-2 pb-2">{text}</span>
    </li>
  );
};
function ModalNavbar(props) {
  return (
    <div className="fixed left-0 top-0 w-full bg-[#ffffff] ease-in-out duration-500 h-full z-10">
      <div className="float-right flex items-center h-28 lg:pr-[85px] md:pr-[60px] sm:pr-[40px] pr-[30px]">
        <span onClick={() => props.setNav(false)}>
          <IoClose className="float-right w-[50px] h-[50px] text-gray-800 hover:text-red-500" />
        </span>
      </div>
      <div className="flex items-center justify-center h-full text-[30px] font-extrabold  text-gray-800 uppercase">
        <ul onClick={() => props.setNav(false)} className="grid grid-rows-5">
          <Link to="/">
            {item(<IoHomeOutline className="mt-2" />, "Головна")}
          </Link>
          <Link to="/aboutus">
            {item(<RiGroupLine className="mt-2" />, "Про нас")}
          </Link>
          <Link to="/aboutcourse">
            {item(<LiaBookReaderSolid className="mt-2" />, "Про курс")}
          </Link>
          <Link to="/lessons">
            {item(<LiaChalkboardTeacherSolid className="mt-2" />, "Курс")}
          </Link>
          <Link to="/test">
            {item(<GoTasklist className="mt-2" />, "Тест")}
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default ModalNavbar;

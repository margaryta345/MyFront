import { MdAccountCircle } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./menu.css";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useState } from "react";
function Navbar(props) {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div className="flex lg:pt-12 md:pt-10 sm:pt-8 pt-6">
      <div className="text-white lg:pl-20 md:pl-12 sm:pl-10 pl-6">
        <Link to="/">
          <img
            src="/Logo.png"
            alt="logo_python"
            className="lg:w-72 md:w-64 sm:w-52 w-44"
          />
        </Link>
      </div>
      <div
        className="flex justify-end text-white flex-grow
      
      lg:pr-20 md:pr-12 sm:pr-10 pr-6
      "
      >
        {isAuth ? (
          <div>
            <MdAccountCircle
              onClick={toggleMenu}
              className="hover:text-gray-200 lg:text-5xl md:text-4xl sm:text-3xl text-3xl"
            />
            {isMenuOpen && (
              <div className="absolute lg:right-32 md:right-20 sm:right-16 right-12 mt-2  bg-white border rounded shadow-lg ">
                <Link
                  to="/"
                  onClick={() => {
                    toggleMenu();
                    onClickLogout();
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Вийти
                </Link>
                <Link
                  to="/profile"
                  onClick={toggleMenu}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Профіль
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <BiSolidLogInCircle className="hover:text-gray-200 lg:text-5xl md:text-4xl sm:text-3xl text-3xl" />
          </Link>
        )}
        <span onClick={() => props.setNav(true)} className="cursor-pointer">
          <HiOutlineMenu className="hover:text-gray-200 lg:text-5xl md:text-4xl sm:text-3xl text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;

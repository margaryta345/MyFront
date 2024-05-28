import { MdAccountCircle } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import { useState } from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
function RedNav(props) {
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
    <div className="flex h-20 items-center border-b border-gray-250">
      <div className="text-white lg:pl-20 md:pl-12 sm:pl-10 pl-6 ">
        <Link to="/">
          <img
            src="/redNav.png"
            alt="logo_python"
            className="lg:w-52 md:w-44 sm:w-40 w-36"
          />
        </Link>
      </div>
      <div
        className="flex justify-end text-[red] flex-grow
      lg:text-4xl md:text-4xl sm:text-3xl text-3xl
      lg:pr-20 md:pr-12 sm:pr-10 pr-6
      "
      >
        {isAuth ? (
          <div>
            <MdAccountCircle
              onClick={toggleMenu}
              className="hover:text-red-600 lg:text-5xl md:text-4xl sm:text-3xl text-3xl"
            />
            {isMenuOpen && (
              <div className="absolute lg:right-32 md:right-20 sm:right-16 right-12 mt-2 text-base  bg-white border rounded shadow-lg ">
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
            <BiSolidLogInCircle className="hover:text-red-600 lg:text-5xl md:text-4xl sm:text-3xl text-3xl" />
          </Link>
        )}
        <span onClick={() => props.setNav(true)} className="cursor-pointer">
          <HiOutlineMenu className="hover:text-red-600 lg:text-5xl md:text-4xl sm:text-3xl text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default RedNav;

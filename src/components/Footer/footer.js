import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";
function Footer() {
  const isAuth = useSelector(selectIsAuth);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div
      className="flex mt-24 text-white justify-center w-full bg-[#7F0000] 
     lg:text-xl md:text-base text-xs
     lg:h-[200px] md:h-[170px] sm:h-[150px] h-[130px] 
    lg:space-x-24 md:space-x-12 space-x-8 items-center"
    >
      <ul className="space-y-2 ">
        <li onClick={scrollToTop}>
          <Link to="/aboutus">Про нас</Link>
        </li>
        <li onClick={scrollToTop}>
          {isAuth ? (
            <Link to="/test">Початковий тест</Link>
          ) : (
            <Link to="/login">Початковий тест</Link>
          )}
        </li>
        <li onClick={scrollToTop}>
          {isAuth ? (
            <Link to="/lessons">Курс</Link>
          ) : (
            <Link to="/login">Курс</Link>
          )}
        </li>
      </ul>

      <ul>
        <li onClick={scrollToTop}>
          <Link to="/" className="flex space-x-2">
            <img
              className="lg:h-[40px] md:h-[34px] w-auto sm:h-[28px] h-[22px] "
              src="/logob.png"
              alt="logo_bottom"
            />
            <img
              className="lg:h-[40px] md:h-[34px] w-auto sm:h-[28px] h-[22px]  "
              src="/Logo.png"
              alt="logo"
            />
          </Link>
        </li>
        <li className="text-center">2024</li>
      </ul>

      {isAuth ? (
        <ul className="space-y-4 flex flex-col items-center">
          <li onClick={scrollToTop}>
            <Link
              to="/profile"
              className="pt-2 pb-2 lg:pl-6 lg:pr-6 md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 pr-3 pl-3 rounded-md bg-[#e40000e7]
         hover:bg-[red]
          "
            >
              Профіль
            </Link>
          </li>
          <li className="text-center">
            <Link to="/login">Вийти з кабінету</Link>
          </li>
        </ul>
      ) : (
        <ul className="space-y-4 flex flex-col items-center">
          <li onClick={scrollToTop}>
            <Link
              to="/sign-up"
              className="pt-2 pb-2 lg:pl-6 lg:pr-6 md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 pr-3 pl-3 rounded-md bg-[#e40000e7]
         hover:bg-[red]
          "
            >
              Зареєструватись
            </Link>
          </li>
          <li className="text-center">
            <Link to="/login">Увійти в кабінет</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Footer;

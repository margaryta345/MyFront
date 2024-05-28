import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";
import { RxAvatar } from "react-icons/rx";
import { logout } from "../../redux/slices/auth";
import { Link } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(fetchAuthMe());
      setData(result.payload);
    };

    fetchData();
  }, []);
  const lengthOfArray = Object.keys(data ? data.done : "").length;
  const percentage = Math.round((lengthOfArray / 29) * 100);

  return data ? (
    <div className="pt-32">
      <div className="w-[540px] h-[440px] mx-auto pt-16 bg-gray-50 rounded-md shadow-lg">
        <RxAvatar className="text-red-500 w-28  mx-auto h-28"></RxAvatar>
        <p className="text-center font-semibold mt-3 text-2xl">
          {data.fullName}
        </p>
        <div className="border-2   m-2 p-4 rounded-lg w-[500px] h-auto mx-auto mt-3">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-lg">Курс Python basic</p>
              <Link
                to="/lessons"
                className="mr-4 p-2 hover:bg-red-700 bg-red-500 rounded-lg text-white font-semibold"
              >
                Продовжити
              </Link>
            </div>
            <p className="font-semibold">Просування {percentage} %</p>
            <div className="flex justify-between mt-1 bg-gray-200 rounded-lg">
              <div
                style={{ width: `${percentage}%` }}
                className="h-2 bg-gradient-to-r from-rose-500 to-red-700"
              ></div>
            </div>
          </div>
        </div>

        <Link
          to="/"
          onClick={() => {
            onClickLogout();
          }}
          className="block ml-6 mt-4 text-lg text-gray-800"
        >
          Налаштування
        </Link>
        <Link
          to="/"
          onClick={() => {
            onClickLogout();
          }}
          className="block ml-6 mt-2 text-lg text-gray-800 "
        >
          Вийти
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Profile;

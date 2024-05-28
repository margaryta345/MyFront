import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "shcherbiakmargaryta@gmail.com",
      password: "Olena2828",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values));

    if (!data.payload) {
      alert("Failed");
    } else {
      if ("token" in data.payload) {
        window.localStorage.setItem("token", data.payload.token);
      }
    }
  };

  if (isAuth) {
    return <Navigate to="/lessons" />;
  }

  return (
    <div className="h-fit ">
      <div className="flex justify-center">
        <div
          className="bg-white 
          lg:h-[400px] lg:w-[500px] md:h-[400px] md:w-[500px] sm:h-[340px] sm:w-[450px] h-[300px] w-[400px]
          drop-shadow-xl grid place-items-center 
          lg:pb-16  md:pb-16 sm:pb-12 pb-12 
          mt-40 mb-36"
        >
          <p
            className="font-bold text-gray-800
            lg:text-2xl  md:text-2xl  sm:text-xl  text-l 
            lg:pt-16  md:pt-16  sm:pt-12  pt-12"
          >
            Вхід в аккаунт
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="block lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-14 md:h-14 sm:h-12 h-10 border border-gray-200 pl-4 mt-2 "
              type="email"
              placeholder="E-Mail"
              {...register("email", {
                required: "Вкажіть пошту",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Неправильний формат email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
            <input
              className="block lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-14 md:h-14 sm:h-12 h-10 border border-gray-200 pl-4 mt-1 "
              type="password"
              placeholder="Пароль"
              {...register("password", {
                required: "Вкажіть пароль",
                minLength: {
                  value: 6,
                  message: "Пароль повинен містити принаймні 6 символів",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
            <button
              type="submit"
              className="block mt-1 rounded-md bg-[#e40000e7] text-white text-bold hover:bg-[red] lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-12 md:h-12 sm:h-10 h-9 lg:text-l md:text-l sm:text-base text-sm"
            >
              Ввійти
            </button>
          </form>
          <p className="mt-2 text-gray-800 lg:text-l md:text-l sm:text-base text-sm">
            Ще немає акаунту?
            <Link to="/sign-up" className="text-[red]">
              Зареєструватися
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

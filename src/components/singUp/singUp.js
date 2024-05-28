import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, fetchRegister } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не вдалось зареєструватись");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" h-fit">
      <div className="flex justify-center">
        <div className="bg-white lg:h-[500px] lg:w-[500px] md:h-[500px] md:w-[500px] sm:h-[410px] sm:w-[450px] h-[380px] w-[400px] drop-shadow-xl grid place-items-center lg:pb-16 md:pb-16 sm:pb-12 pb-12 mt-40 mb-36">
          <p className="font-bold text-gray-800 lg:text-2xl md:text-2xl sm:text-xl text-l lg:pt-16 md:pt-16 sm:pt-12 pt-12">
            Реєстрація
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col mb-2">
              <input
                className="lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] block lg:h-14 md:h-14 sm:h-12 h-10 border border-gray-200 pl-4"
                type="text"
                placeholder="Ім'я та прізвище"
                {...register("fullName", {
                  required: "Вкажіть ваше ім'я та прізвище",
                  minLength: {
                    value: 3,
                    message: "Ім'я повинно містити принаймні 3 символи",
                  },
                })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-xs ml-2">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <input
                className="block lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-14 md:h-14 sm:h-12 h-10 border border-gray-200 pl-4"
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
                <span className="text-red-500 text-xs ml-2">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <input
                className="block lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-14 md:h-14 sm:h-12 h-10 border border-gray-200 pl-4"
                type="password"
                placeholder="Пароль"
                {...register("password", {
                  required: "Вкажіть ваш пароль",
                  minLength: {
                    value: 6,
                    message: "Пароль повинен містити принаймні 6 символів",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs ml-2">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              className="lg:w-[400px] md:w-[400px] sm:w-[380px] w-[350px] lg:h-12 md:h-12 sm:h-10 h-9 lg:text-l md:text-l sm:text-base text-sm rounded-md bg-[#e40000e7] text-white font-bold hover:bg-[red]"
              type="submit"
            >
              Зареєструватись
            </button>
          </form>

          <p className="text-gray-800 lg:text-l md:text-l sm:text-base text-sm">
            Вже є акаунт?
            <Link to="/login" className="text-[red] pl-2">
              Вхід
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

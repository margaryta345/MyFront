import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTestResult } from "../../redux/slices/auth";
import { Link } from "react-router-dom";
function Result({ correct, length }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestResult({ result: correct }))
      .then((res) => {
        if (res.payload.startTestResult) {
          console.log("Дані успішно відправлено на бекенд");
          console.log(res.payload.startTestResult);
        } else {
          console.log("Виникла помилка при відправці даних на бекенд");
        }
      })
      .catch((error) => {
        console.error("Помилка при відправці даних на бекенд:", error);
      });
  }, [correct]);
  return (
    <div className="h-auto border border-gray-200 bg-white rounded-2xl mx-auto drop-shadow-2xl lg:w-[800px] md:w-[600px] sm:w-[500px] w-[400px]">
      <div className="text-center font-semibold mt-7">
        <img
          className="mx-auto"
          src="https://img.icons8.com/color/150/confetti.png"
          alt="confetti"
        />
        <p className="mb-2 lg:text-lg">Ваш результат:</p>
        <p>
          {correct} із {length} правильних відповідей
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-4 mb-7">
        <Link
          to="/lessons"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Перейти до курсу
        </Link>
      </div>
    </div>
  );
}
export default Result;

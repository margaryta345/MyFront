import { Link } from "react-router-dom";
import Intro from "../mainPage/intro";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuthMe,
  selectResult,
  selectIsAuth,
} from "../../redux/slices/auth";
import Footer from "../Footer/footer";

function Test() {
  const Result = useSelector(selectResult);
  return (
    <div>
      <Intro
        kind={<img src="/hand.png" alt="main_abouUs" />}
        text="Протестуй свої знання"
        textspan=""
      />

      <div className="grid grid-row-2 text-center">
        <div class="flex items-center justify-center pb-2">
          <img
            class="mr-2 lg:w-[50px] md:w-[0px] sm:w-[20px] w-[20px]"
            src="https://img.icons8.com/ios-filled/50/FE0000/test.png"
            alt="test"
          />
          <h2 class="text-[#FE0000] font-bold text-lg md:text-2xl lg:text-3xl ">
            Тест для визначення рівня володіння Python
          </h2>
        </div>

        <h3 className="w-[60%] mx-auto pb-8  md:text-xl md:pb-12 lg:text-2xl lg:pb-16 ">
          Цей тест розроблений для визначення ваших навичків та умінь в сфері
          пайтону . Він підскаже вам які теми краще підтягнути вивчити , а що
          слід починати з нуля. У тесті розміщенні як тестові так і відкриті
          відповіді. Уважно читайте завдання та усім успіхів!
        </h3>
      </div>

      <button className="uppercase bg-[#e40000e7] hover:bg-[red] rounded-md p-2 mx-auto block text-white font-semibold lg:mb-44 text-[10px] sm:text-[15px] md:text-l lg:text-xl">
        <Link to="/testStart">перейти до тесту</Link>
      </button>
      <Footer />
    </div>
  );
}
export default Test;

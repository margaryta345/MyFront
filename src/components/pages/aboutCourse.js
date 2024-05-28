import Intro from "../mainPage/intro";
import Text from "../mainPage/text";
import MenuList from "../mainPage/menuList";
import Footer from "../Footer/footer";

function AboutCourse() {
  return (
    <div>
      <Intro
        kind={<img src="/main.png" alt="main_abouUs" />}
        text="Курс  Python basic "
        textspan=""
      />
      <Text
        headline="Про цей курс"
        text="Python - універсальна та популярна мова програмування загального призначення. 
Вона чудово підходить для вивчення як перша мова, тому що вона лаконічна і легко читається, а також є хорошою мовою для будь-якого програміста, оскільки її можна використовувати для всього - від веб-розробки до розробки програмного забезпечення та наукових додатків."
      />
      <img src="/table.png" alt="course" />
      <Text
        headline="Навички які ви отримаєте"
        text="Цей курс є чудовим вступом як до фундаментальних концепцій програмування, так і до мови програмування Python. 
По закінченню курсу ви зможете вільно програмувати на Python і перенести свої навички з платформи python basic на власний комп'ютер."
      />
      <img src="/computer.png" alt="computerImg" />
      <h2 className=" text-[#FE0000] font-bold md:text-3xl uppercase mb-8 text-center">
        План навчання
      </h2>
      <div className="mx-auto">
        <MenuList />
      </div>

      <Footer />
    </div>
  );
}
export default AboutCourse;

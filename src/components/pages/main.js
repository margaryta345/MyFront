import Program from "../mainPage/programm";
import Video from "../mainPage/video";
import Text from "../mainPage/text";
import VideoSceleton from "../mainPage/VideoSceleton";
import Intro from "../mainPage/intro";
import Footer from "../Footer/footer";
import { FaQuoteLeft } from "react-icons/fa";

const info = (src, alt, main, text) => {
  return (
    <div
      className="lg:w-[330px]  md:w-[260px] sm:w-[200px] w-[130px]
    lg:text-xl md:text-base sm:text-[10px] text-[8px]"
    >
      <div className="flex">
        <img src={src} alt={alt} />
        <p className="ml-2 sm:pt-1 pt-2 font-bold text-gray-800">{main}</p>
      </div>
      <div className="text-gray-500">{text}</div>
    </div>
  );
};

function Main() {
  return (
    <div className="relative font-serif">
      <Intro
        kind={<VideoSceleton src="/main.mp4" />}
        text="Маєш бажання вчити пайтон?"
        textspan="Тоді почнемо"
      />
      <div>
        <Text
          headline=" Що ти отримаєш на курсі Python basic"
          text="На нашому курсі ви отримаєте унікальну можливість вивчити мову програмування Python з нуля. Це не просто навчання синтаксису, а повноцінний вступ у захопливий світ програмування, де тільки ваша уява є межею."
        />
      </div>
      <div>
        <div className="flex justify-center space-x-5">
          <Video
            src="/code.mp4"
            alt="code_video"
            img="https://img.icons8.com/glyph-neue/40/FFFFFF/head-with-brain.png"
            imgAlt="head-with-brain"
            text="Hard skills"
          />
          <Video
            src="/soft.mp4"
            alt="softSkills_video"
            img="https://img.icons8.com/material-rounded/27/FFFFFF/conference-call.png"
            imgAlt="conference-call"
            text="Soft skills"
          />
        </div>
        <div className="flex justify-center space-x-5 mt-5 mb-5">
          <Video
            src="/test.mp4"
            alt="code_video"
            img="https://img.icons8.com/ios-filled/27/FFFFFF/test-passed.png"
            imgAlt="test-passed"
            text="Тести та завдання"
          />
          <Video
            src="/theory.mp4"
            alt="code_video"
            img="https://img.icons8.com/ios-filled/27/FFFFFF/info-squared.png"
            imgAlt="info-squared"
            text="Теорія"
          />
        </div>
      </div>
      <div>
        <VideoSceleton src="/cyber.mp4" />
      </div>
      <div>
        <Text
          headline="Плюси професії Python-розробник"
          text="Python входить до топ-3 мов програмування. Він дозволяє працювати з даними, а також створювати вебсайти та застосунки. Наприклад, серверна частина YouTube, Instagram, Pinterest написана на Python. А ще його обожнюють у Tesla, NASA, IBM"
        />

        <div className="flex justify-center space-x-5 mb-8">
          {info(
            "https://img.icons8.com/metro/30/FF0000/expensive-2.png",
            "counts",
            "2800$",
            "Середня зарплатня Python-розробника в Україні"
          )}
          {info(
            "https://img.icons8.com/ios-filled/30/FF0000/video-conference.png",
            "video-conference",
            "Віддалена робота",
            "75% вакансій пропонують працювати віддалено, 15% – релокейт"
          )}

          {info(
            "https://img.icons8.com/ios-filled/30/FF0000/groups.png",
            "groups",
            "170+ вакансій",
            "Для Python-розробників щомісяця. І це лише на одному сайті"
          )}
        </div>
        <div className="flex justify-center space-x-5">
          {info(
            "https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/30/FF0000/external-gym-building-photo3ideastudio-solid-photo3ideastudio.png",
            "gym",
            "Найкращі умови",
            "Навчання, медична страховка, спортзал, відпустки та дей офи"
          )}
          {info(
            "https://img.icons8.com/ios-filled/28/FF0000/flipboard.png",
            "flipboard",
            "Цікаві проєкти",
            "Вебсайти та застосунки,соцмережі, онлайн-сервіси, аналіз даних, нейромережі тощо"
          )}
          {info(
            "https://img.icons8.com/ios-filled/30/FF0000/men-age-group-4.png",
            "person",
            "Ідеально для новачка",
            "Найпростіша мова програмування для вивчення з нуля"
          )}
        </div>
      </div>
      <div>
        <VideoSceleton src="/social.mp4" />
      </div>
      <div className="flex justify-center  items-center text-[#ffffff] ">
        <div
          className="bg-[#ff0000e0] border-2 border-red-300 w-[94%] mb-12 rounded-lg grid grid-cols-2
         lg:pb-24 lg:pt-24 md:pb-16 md:pt-16 sm:pb-12 sm:pt-12 pb-8 pt-8 pr-4
         lg:text-3xl md:text-xl sm:text-base text-xs
         "
        >
          <h2
            className=" font-bold lg:ml-20 md:ml-12 sm:ml-8 ml-6  
            w-[400px]"
          >
            Програма курсу Python basic
          </h2>
          <div>
            <FaQuoteLeft className="lg:text-3xl md:text-xl ms:text-base text-xs" />
            <p className="pt-10 lg:text-xl md:text-sm">
              Проста та інтуїтивно зрозуміла мова настільки ж потужна, як і
              основні конкуренти. Відкритий вихідний код, тому кожен може
              зробити свій внесок у його розвиток.
            </p>
            <div className="flex mt-10  ">
              <img
                alt="Van Rossum"
                src="/main.jpeg"
                className="lg:w-auto lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 w-16 h-16
                 rounded-md"
              />
              <div className="pl-6 lg:pt-6 md:pt-4 sm:pt-2 lg:text-xl md:text-sm">
                <div className="flex pr-2">
                  <p className=" font-bold mr-2">Ван Россум</p>
                  <img
                    className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] sm:w-[16px] sm:h-[16px] w-[16px] h-[16px]"
                    src="https://img.icons8.com/metro/26/ffffff/python.png"
                    alt="python"
                  />
                </div>
                <p> Засновник мови програмування Python. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Program />
      <Footer />
    </div>
  );
}
export default Main;

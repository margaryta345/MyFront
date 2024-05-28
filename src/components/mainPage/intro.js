const handleScrollDown = () => {
  let scrollValue;

  const windowWidth = window.innerWidth;

  if (windowWidth >= 1200) {
    scrollValue = 600;
  } else if (windowWidth >= 800) {
    scrollValue = 400;
  } else {
    scrollValue = 200;
  }

  window.scrollBy({
    top: scrollValue,
    behavior: "smooth",
  });
};

function Intro(props) {
  const { kind, text, textspan } = props;
  return (
    <div>
      {kind}
      <div className="absolute inset-x-0 top-0">
        <div
          className="text-center 
        pt-24 sm:pt-36 md:pt-44 lg:pt-64
        text-sm sm:text-m md:text-2xl lg:text-4xl font-bold text-white uppercase"
        >
          <p
            className={`mb-2 ${
              text !== "Маєш бажання вчити пайтон?"
                ? "text-s sm:text-lg md:text-xl lg:text-4xl  lg:pt-[60px]"
                : ""
            }`}
            md
          >
            {text}
          </p>
          <p>{textspan}</p>
        </div>
        <span onClick={handleScrollDown}>
          <img
            className="mx-auto my-2 sm:my-4 md:my-8 lg:my-10 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] animate-bounce transition-transform duration-500 ease-in-out"
            src="https://img.icons8.com/ios-filled/100/ffffff/double-down.png"
            alt="double-down"
          />
        </span>
      </div>
    </div>
  );
}
export default Intro;

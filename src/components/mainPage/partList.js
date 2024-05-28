import CreateLi from "./createli";

const PartList = (props) => {
  const { text, name, list, icon, a, setA } = props;
  return (
    <div>
      <div className="border-red-600  text-red-600 p-4 sm:p-6 lg:p-12 md:p-8 rounded-3xl border-2 bg-[#F5F5F5] relative h-auto">
        <div className="absolute lg:left-8 md:left-6 sm:left-6 left-4  lg:top-24 md:top-20 sm:top-14 top-10  transform -translate-y-1/2">
          {icon}
        </div>
        <div className="lg:ml-16 md:ml-14 sm:ml-12 ml-10">
          <p className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[10px] font-bold">
            {name}
          </p>
          <p className="lg:text-[20px] md:text-[15px] sm:text-[10px] text-[8px] font-semibold ">
            {text}
          </p>
          <button
            onClick={setA}
            className={`absolute top-0 right-3 text-red lg:px-4 md:px-3 sm:px-2 lg:py-8 md:py-7 sm:py-6 py-5`}
          >
            {!a ? (
              <img
                className="lg:w-5 md:w-4 sm:w-3 w-2"
                src="https://img.icons8.com/metro/20/FF0000/expand-arrow.png"
                alt="collapse-arrow"
              />
            ) : (
              <img
                className="lg:w-5 md:w-4 sm:w-3 w-2"
                src="https://img.icons8.com/metro/20/FF0000/collapse-arrow.png"
                alt="collapse-arrow"
              />
            )}
          </button>
        </div>
        {a ? (
          <ul className="lg:mt-12 md:mt-10 sm:mt-6 mt-4">
            {list.map((item) => (
              <CreateLi name={item.name} text={item.text} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};
export default PartList;

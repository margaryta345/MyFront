function Questions({ step, question, onClickVariant }) {
  const percentage = ((step + 1) / 28) * 100;
  console.log(percentage);

  return (
    <div
      className="h-auto border border-gray-200 bg-white mx-auto drop-shadow-2xl
  lg:w-[1200px] md:w-[800px] sm:w-[600px] w-[400px] "
    >
      <div>
        <div className="flex justify-between  m-6 mb-3 bg-gray-200 rounded-lg">
          <div
            style={{ width: `${percentage}%` }}
            className="h-2 bg-gradient-to-r from-rose-500 to-red-700"
          ></div>
        </div>
        <div className="flex justify-center">
          <div className=" text-base text-center text-gray-800 w-[1140px] flex flex-col justify-center items-center">
            <h2 className="font-bold text-lg mt-4">Frage {step + 1}</h2>
            <h3 className=" lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[300px] text-center text-gray-800 pb-8 pt-2">
              {question.title}
            </h3>
            <ul className="mb-12">
              {question.options.map((text, index) => (
                <span
                  onClick={() => onClickVariant(index)}
                  key={index}
                  className="block p-2 border border-gray-400  drop-shadow-md hover:bg-gradient-to-r from-rose-500 to-red-700 hover:text-white text-black bg-gray-50 mb-2
                lg:w-[1100px] md:w-[700px] sm:w-[500px] w-[300px]"
                >
                  {text}
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questions;

{
  /* <div className="bg-green-800">
<div className="pt-32 h-4 bg-black">
  <div
    style={{ width: `${percentage}%` }}
    className="h-4 bg-red-500"
  ></div>
</div>
<h1>{question.title}</h1>
<ul>
  {question.options.map((text, index) => (
    <li onClick={() => onClickVariant(index)} key={index}>
      {text}
    </li>
  ))}
</ul>
</div> */
}

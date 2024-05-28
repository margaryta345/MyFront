function Text(props) {
  const { headline, text } = props;
  return (
    <div className="grid grid-row-2 text-center">
      <h2
        className=" text-[#FE0000] font-bold pb-4 
       md:text-2xl md:pb-6
       lg:text-3xl lg:pb-8 "
      >
        {headline}
      </h2>
      <h3 className="w-[70%] mx-auto pb-8  md:text-xl md:pb-12 lg:text-2xl lg:pb-16  ">
        {text}
      </h3>
    </div>
  );
}
export default Text;

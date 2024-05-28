const MainList = () => {
  return (
    <div className="bg-red-600 p-6 sm:p-8 lg:p-12 md:p-10 rounded-3xl  text-white lg:text-[30px] md:text-[25px] sm:text-[20px] text-[10px] font-bold">
      <p>Програма</p>
      <ul className="flex justify-between lg:text-[20px] md:text-[15px] sm:text-[10px] text-[8px] font-normal">
        <li className=" pr-4">35 лекцій 10 тестів 10 проектів</li>
        <span>Розгорнути все</span>
      </ul>
    </div>
  );
};
export default MainList;

import MenuLessonsStart from "../pages/lessons";
const Resources = () => {
  return (
    <div className="h-auto grid grid-cols-8">
      <div className="col-span-2">
        <MenuLessonsStart />
      </div>
      <div className="mt-20 ml-10 overflow-y-auto max-h-[600px] col-span-6 ">
        результати
      </div>
    </div>
  );
};
export default Resources;

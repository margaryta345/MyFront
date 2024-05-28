import { BiSolidLockOpenAlt } from "react-icons/bi";
const CreateLi = (props) => {
  const { name, text } = props;
  return (
    <li className="flex text-red-600 font-semibold ml-8 mb-2 lg:text-[20px] md:text-[15px] sm:text-[10px] text-[8px]">
      <BiSolidLockOpenAlt className="mt-1" />
      <p
        className={`pl-8 ${
          name === "Проект"
            ? "lg:pr-[100px] md:pr-[70px] sm:pr-[55px] pr-[31px]"
            : "lg:pr-[109px] md:pr-[76px] sm:pr-[60px] pr-[35px]"
        }`}
      >
        {name}
      </p>
      <p className="text-left">{text}</p>
    </li>
  );
};
export default CreateLi;

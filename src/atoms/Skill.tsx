import { Dispatch, ReactElement, SetStateAction } from "react";

interface Props {
  icon: ReactElement;
  label: string;
  setButtonName: Dispatch<SetStateAction<string>>;
  buttonName: string;
}
const Skill = ({ icon, label, setButtonName, buttonName }: Props) => {
  return (
    <button
      className="group"
      onClick={() => {
        setButtonName(label);
      }}
      name={label}
    >
      <div
        className={`p-3 border rounded-xl flex align-middle items-center gap-4 cursor-pointer ${
          buttonName === label ? "border-salmon bg-salmon" : "border-gray"
        }  `}
      >
        <div
          className={`w-fit p-2 rounded-full  ${
            buttonName === label
              ? "bg-white text-salmon"
              : "text-white bg-salmon"
          }`}
        >
          {icon}
        </div>

        <p className={`font-semibold ${buttonName === label && "text-white"}`}>
          {label}
        </p>
      </div>
    </button>
  );
};

export default Skill;

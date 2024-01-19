import { Dispatch, ReactElement, SetStateAction } from "react";

interface Props {
  icon: ReactElement;
  label: string;
  setButtonName: Dispatch<SetStateAction<string>>;
}
const Skill = ({ icon, label, setButtonName }: Props) => {
  return (
    <button
      className="group"
      onClick={() => {
        setButtonName(label);
      }}
      name={label}
    >
      <div className="p-3 border rounded-xl group-hover:border-salmon group-focus:bg-salmon border-gray flex align-middle items-center gap-4 cursor-pointer">
        <div className="bg-salmon group-focus:bg-white w-fit p-2 rounded-full text-white group-focus:text-salmon">
          {icon}
        </div>
        <p className="font-semibold group-focus:text-white">{label}</p>
      </div>
    </button>
  );
};

export default Skill;

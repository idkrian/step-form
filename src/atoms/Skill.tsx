import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
}
const Skill = ({ icon }: Props) => {
  return (
    <div className="group">
      <div className="p-3 border rounded-xl group-hover:border-salmon border-gray flex align-middle items-center gap-4 cursor-pointer">
        <div className="bg-salmon w-fit p-2 rounded-full text-white">
          {icon}
        </div>
        <p className="font-semibold">Begginer</p>
      </div>
    </div>
  );
};

export default Skill;

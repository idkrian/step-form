import Skill from "../atoms/Skill";
import {
  PiPlantBold,
  PiCompassBold,
  PiRocketLaunchBold,
  PiTrophyBold,
} from "react-icons/pi";
import Title from "../atoms/Title";
import { Dispatch, SetStateAction } from "react";
interface Props {
  buttonName: string;
  setButtonName: Dispatch<SetStateAction<string>>;
}
const SkillLevel = ({ buttonName, setButtonName }: Props) => {
  return (
    <div>
      <Title
        label={"Skill Level"}
        subtitle={
          "Please tell us about your skill level in frontend development."
        }
      />
      <div className="grid grid-cols-2 my-6 gap-y-4 gap-x-10">
        <Skill
          icon={<PiPlantBold size={20} />}
          label={"Begginer"}
          setButtonName={setButtonName}
          buttonName={buttonName}
        />
        <Skill
          icon={<PiCompassBold size={20} />}
          label={"Intermediate"}
          setButtonName={setButtonName}
          buttonName={buttonName}
        />
        <Skill
          icon={<PiRocketLaunchBold size={20} />}
          label={"Advanced"}
          setButtonName={setButtonName}
          buttonName={buttonName}
        />
        <Skill
          icon={<PiTrophyBold size={20} label={"Expert"} />}
          setButtonName={setButtonName}
          label={"Expert"}
          buttonName={buttonName}
        />
      </div>
    </div>
  );
};

export default SkillLevel;

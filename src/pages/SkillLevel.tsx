import Skill from "../atoms/Skill";
import {
  PiPlantBold,
  PiCompassBold,
  PiRocketLaunchBold,
  PiTrophyBold,
} from "react-icons/pi";
import Title from "../atoms/Title";

const SkillLevel = () => {
  return (
    <div>
      <Title
        label={"Skill Level"}
        subtitle={
          "Please tell us about your skill level in frontend development."
        }
      />
      <div className="grid grid-cols-2 my-8 gap-y-4 gap-x-10">
        <Skill icon={<PiPlantBold size={20} />} />
        <Skill icon={<PiCompassBold size={20} />} />
        <Skill icon={<PiRocketLaunchBold size={20} />} />
        <Skill icon={<PiTrophyBold size={20} />} />
      </div>
    </div>
  );
};

export default SkillLevel;

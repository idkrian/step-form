import Skill from "../atoms/Skill";
import {
  PiPlantBold,
  PiCompassBold,
  PiRocketLaunchBold,
  PiTrophyBold,
} from "react-icons/pi";

const SkillLevel = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">Skill Level</h1>
        <p>Please tell us about your skill level in frontend development.</p>
      </div>
      <div className="grid grid-cols-2 my-5 gap-y-4 gap-x-10">
        <Skill icon={<PiPlantBold size={20} />} />
        <Skill icon={<PiCompassBold size={20} />} />
        <Skill icon={<PiRocketLaunchBold size={20} />} />
        <Skill icon={<PiTrophyBold size={20} />} />
      </div>
    </div>
  );
};

export default SkillLevel;

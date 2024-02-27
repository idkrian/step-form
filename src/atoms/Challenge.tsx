import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  name: string;
  setChallengePreferences: Dispatch<SetStateAction<string>>;
  challengePreferences: string;
}
const Challenge = ({
  label,
  name,
  setChallengePreferences,
  challengePreferences,
}: Props) => {
  return (
    <div className="group">
      <div
        className={`p-5 border rounded-xl group-hover:border-salmon  flex align-middle items-center gap-4 cursor-pointer ${
          challengePreferences === name ? "border-salmon" : "border-gray"
        }`}
      >
        <input
          type="radio"
          onClick={() => setChallengePreferences(name)}
          name="challenge"
          value={name}
          className="text-white border-gray accent-salmon hover:bg-salmon w-6 h-6 checked:bg-salmon rounded-md"
        />
        <label htmlFor={name} className="font-semibold cursor-pointer">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Challenge;

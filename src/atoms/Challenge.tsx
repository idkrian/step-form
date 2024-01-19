import { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  name: string;
  challengePreferences: string[];
  setChallengePreferences: Dispatch<SetStateAction<string[]>>;
}
const Challenge = ({
  label,
  name,
  setChallengePreferences,
  challengePreferences,
}: Props) => {
  return (
    <div className="group">
      <div className="p-5 border rounded-xl group-hover:border-salmon border-gray flex align-middle items-center gap-4 cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={challengePreferences.includes(label) ? true : false}
          onClick={() => {
            if (challengePreferences.includes(label)) {
              setChallengePreferences(
                challengePreferences.filter((e: string) => e !== label)
              );
            } else {
              setChallengePreferences((prevArray: string[]) => [
                ...prevArray,
                label,
              ]);
            }
          }}
          id={name}
          className="text-white border-gray accent-salmon hover:bg-salmon  w-6 h-6 checked:bg-salmon rounded-md"
        />
        <label htmlFor={name} className="font-semibold cursor-pointer">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Challenge;

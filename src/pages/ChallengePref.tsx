import { Dispatch, SetStateAction } from "react";
import Challenge from "../atoms/Challenge";
import Title from "../atoms/Title";
interface Props {
  challengePreferences: string[];
  setChallengePreferences: Dispatch<SetStateAction<string[]>>;
}
const ChallengePref = ({
  setChallengePreferences,
  challengePreferences,
}: Props) => {
  return (
    <div>
      <Title
        label={"Challenge Preference"}
        subtitle={
          "Please tell us which frontend challenges you would like to participate in."
        }
      />
      <div className="grid grid-cols-2 my-5 gap-y-4 gap-x-10">
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          label={"HTML/CSS/JS"}
          name={"HTML/CSS/JS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          label={"ReactJS"}
          name={"ReactJS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          label={"VueJS"}
          name={"VueJS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          label={"AngularJS"}
          name={"AngularJS"}
        />
      </div>
    </div>
  );
};

export default ChallengePref;

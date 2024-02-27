import { Dispatch, SetStateAction, useEffect } from "react";
import Challenge from "../atoms/Challenge";
import Title from "../atoms/Title";
interface Props {
  setChallengePreferences: Dispatch<SetStateAction<string>>;
  challengePreferences: string;
  setReleaseButton: Dispatch<SetStateAction<boolean>>;
}
const ChallengePref = ({
  setChallengePreferences,
  challengePreferences,
  setReleaseButton,
}: Props) => {
  useEffect(() => {
    setChallengePreferences("");
  }, []);

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
          setReleaseButton={setReleaseButton}
          label={"HTML/CSS/JS"}
          name={"HTML/CSS/JS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          setReleaseButton={setReleaseButton}
          label={"ReactJS"}
          name={"ReactJS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          setReleaseButton={setReleaseButton}
          label={"VueJS"}
          name={"VueJS"}
        />
        <Challenge
          setChallengePreferences={setChallengePreferences}
          challengePreferences={challengePreferences}
          setReleaseButton={setReleaseButton}
          label={"AngularJS"}
          name={"AngularJS"}
        />
      </div>
    </div>
  );
};

export default ChallengePref;

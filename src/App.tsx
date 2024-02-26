import PersonalInformation from "./pages/PersonalInformation";
import useMultistepForm from "./contexts/useMultistepForm";
import SkillLevel from "./pages/SkillLevel";
import ChallengePref from "./pages/ChallengePref";
import StepCircle from "./atoms/StepCircle";
import { useState } from "react";
import { IFormValues } from "./helpers/interfaces";
import Review from "./pages/Review";

function App() {
  const [validForm, setValidForm] = useState<boolean>();
  const [personalData, setPersonalData] = useState<IFormValues>({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
  });
  const [challengePreferences, setChallengePreferences] = useState<string[]>(
    []
  );
  const [buttonName, setButtonName] = useState<string>("");

  const handleValidForm = (value: boolean) => {
    setValidForm(value);
  };

  const nextValidForm = () => {
    if (validForm) {
      next();
    }
  };
  const { step, next, back, currentStep } = useMultistepForm([
    <PersonalInformation
      handleValidForm={handleValidForm}
      setPersonalData={setPersonalData}
      nextValidForm={nextValidForm}
    />,
    <SkillLevel buttonName={buttonName} setButtonName={setButtonName} />,
    <ChallengePref
      setChallengePreferences={setChallengePreferences}
      challengePreferences={challengePreferences}
    />,
    <Review
      personalData={personalData}
      buttonName={buttonName}
      challengePreferences={challengePreferences}
    />,
  ]);
  const isActive = "bg-salmon text-white";
  const isOffline = "bg-lightGray text-black";

  function handleActive(index: number) {
    return currentStep >= index ? isActive : isOffline;
  }

  return (
    <div className="bg-white rounded-xl p-8 w-[42.5rem] m-12">
      <div className="flex items-center">
        <StepCircle value={0} currentStep={currentStep} />
        <div className={`w-full ${handleActive(1)} mx-4 h-2 rounded-xl`} />

        <StepCircle value={1} currentStep={currentStep} />

        <div className={`w-full ${handleActive(2)} mx-4 h-2 rounded-xl`} />
        <StepCircle value={2} currentStep={currentStep} />

        <div className={`w-full ${handleActive(3)} mx-4 h-2 rounded-xl`} />
        <StepCircle value={3} currentStep={currentStep} />
      </div>
      <div className="border my-6 border-lightGray" />
      {step}
      <div className="border border-lightGray my-10" />

      <div className="flex justify-between">
        <button
          className="text-salmon bg-white border border-salmon p-2 w-32 rounded-xl"
          type="submit"
          onClick={back}
        >
          Go Back
        </button>
        {currentStep === 0 ? (
          <button
            className="bg-salmon text-white p-2 w-32 rounded-xl"
            type="submit"
            form={"PersonalInformation"}
          >
            Next Step
          </button>
        ) : (
          <button
            className="bg-salmon text-white p-2 w-32 rounded-xl"
            type="submit"
            onClick={() => {
              nextValidForm();
            }}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

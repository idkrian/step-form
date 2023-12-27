import { ReactElement, useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((value) => {
      if (value === steps.length) return value;

      return value + 1;
    });
  };

  const back = () => {
    setCurrentStep((value) => {
      if (value === 0) return value;
      return value - 1;
    });
  };

  return { currentStep, next, back, steps, step: steps[currentStep] };
};

export default useMultistepForm;

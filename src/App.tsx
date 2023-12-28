import PersonalInformation from "./pages/PersonalInformation";
import useMultistepForm from "./contexts/useMultistepForm";
import SkillLevel from "./pages/SkillLevel";

function App() {
  const { step, next, back } = useMultistepForm([
    <PersonalInformation />,
    <SkillLevel />,
  ]);
  return (
    <div className="bg-white rounded-xl p-8 w-1/3">
      <div className="flex items-center">
        <div className="bg-salmon flex justify-center items-center px-4 py-2 rounded-full text-white">
          1
        </div>
        <div className="w-full bg-salmon mx-4 h-2 rounded-xl" />
        <div className="bg-salmon flex justify-center items-center px-4 py-2 rounded-full text-white">
          2
        </div>
        <div className="w-full bg-salmon mx-4 h-2 rounded-xl" />
        <div className="bg-salmon flex justify-center items-center px-4 py-2 rounded-full text-white">
          3
        </div>
        <div className="w-full bg-salmon mx-4 h-2 rounded-xl" />
        <div className="bg-salmon flex justify-center items-center px-4 py-2 rounded-full text-white">
          4
        </div>
      </div>
      <div className="border my-6 border-gray" />

      {step}

      <div className="border border-gray my-10" />
      <div className="flex justify-between">
        <button
          className="text-salmon bg-white border border-salmon p-2 w-32 rounded-xl"
          type="submit"
          onClick={back}
        >
          Go Back
        </button>
        <button
          className="bg-salmon text-white p-2 w-32 rounded-xl"
          type="submit"
          onClick={next}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;

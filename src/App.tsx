import { Formik } from "formik";
import PersonalInformation from "./pages/PersonalInformation";

function App() {
  return (
    <div className="bg-white rounded-xl p-6">
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

      <PersonalInformation />

      <div className="border border-gray my-10" />
      <div className="flex justify-end">
        <button
          className="bg-salmon text-white p-2 w-32 rounded-xl"
          type="submit"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;

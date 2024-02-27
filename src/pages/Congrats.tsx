import CongratsImage from "../assets/congrats.png";
const Congrats = () => {
  return (
    <div className="flex flex-col align-middle items-center my-auto">
      <img src={CongratsImage} alt="congrats" className="w-40 h-40 " />
      <h1 className="font-bold text-2xl mt-6 mb-4">Congratulations!</h1>
      <p className="text-center text-grayText">
        Your profile has been created and you are now ready to start
        participating in challenges that match your interests and coding
        experience level.
      </p>
      <button
        className="bg-salmon text-white p-2 w-32 rounded-xl mt-6"
        onClick={() => window.location.reload()}
      >
        Finish
      </button>
    </div>
  );
};

export default Congrats;

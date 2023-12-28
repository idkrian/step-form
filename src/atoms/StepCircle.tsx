interface Props {
  value: number;
  currentStep: number;
}
const StepCircle = ({ value, currentStep }: Props) => {
  const isActive = "bg-salmon text-white";
  const isOffline = "bg-lightGray text-black";

  function handleActive(index: number) {
    return currentStep >= index ? isActive : isOffline;
  }
  console.log(value);

  return (
    <div
      className={`${handleActive(
        value
      )} flex justify-center items-center px-4 py-2 rounded-full font-semibold `}
    >
      {value + 1}
    </div>
  );
};

export default StepCircle;

interface Props {
  label: string;
  name: string;
}
const Challenge = ({ label, name }: Props) => {
  return (
    <div className="group">
      <div className="p-5 border rounded-xl group-hover:border-salmon border-gray flex align-middle items-center gap-4 cursor-pointer">
        <input
          type="checkbox"
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

import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../helpers/interfaces";

interface Props {
  label: Path<IFormValues>;
  type: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldErrors;
}

const TextInput = ({ label, register, required, type, errors }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        className="p-2 border-2 rounded-xl border-gray focus:border-salmon focus:border-2 focus:outline-none focus:ring-0 font-normal"
        placeholder="name@gmail.com"
        {...register(label, { required })}
      />
      {errors[label] && <span>This field is required</span>}
    </div>
  );
};

export default TextInput;

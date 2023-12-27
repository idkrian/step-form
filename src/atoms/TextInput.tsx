import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../helpers/interfaces";

interface Props {
  label: string;
  type: string;
  placeholder: string;
  registerName: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: FieldErrors;
}

const TextInput = ({
  label,
  register,
  required,
  type,
  errors,
  registerName,
  placeholder,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        className="p-2 border-2 rounded-xl border-gray focus:border-salmon focus:border-2 focus:outline-none focus:ring-0 font-normal w-72"
        placeholder={placeholder}
        {...register(registerName, { required })}
      />
      {errors[registerName] && <span>This field is required</span>}
    </div>
  );
};

export default TextInput;

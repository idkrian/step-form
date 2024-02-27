import TextInput from "../atoms/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "../helpers/interfaces";
import Title from "../atoms/Title";
import { Dispatch, SetStateAction, useEffect } from "react";
interface Props {
  handleValidForm: (value: boolean) => void;
  setPersonalData: Dispatch<SetStateAction<IFormValues>>;
  nextValidForm: () => void;
}
const PersonalInformation = ({
  handleValidForm,
  setPersonalData,
  nextValidForm,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    setPersonalData(data);
    nextValidForm();
  };

  useEffect(() => {
    handleValidForm(isValid);
  });

  return (
    <div>
      <Title
        label={"Personal Information"}
        subtitle={
          "Please provide your personal details so we can get to know you better. "
        }
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 my-8 gap-y-4 gap-x-10"
        id="PersonalInformation"
      >
        <TextInput
          label={"Full Name"}
          type={"text"}
          register={register}
          required
          errors={errors}
          registerName={"name"}
          placeholder={"John Wick"}
        />
        <TextInput
          label={"Email Address"}
          type={"text"}
          register={register}
          required
          errors={errors}
          registerName={"email"}
          placeholder={"name@email.com"}
        />
        <TextInput
          label={"Phone Number"}
          type={"text"}
          register={register}
          required
          errors={errors}
          registerName={"phone"}
          placeholder={"+91 992942453"}
        />
        <TextInput
          label={"Portfolio/Github Link"}
          type={"text"}
          register={register}
          required
          errors={errors}
          registerName={"portfolio"}
          placeholder={"github.com/idkrian"}
        />
      </form>
    </div>
  );
};

export default PersonalInformation;

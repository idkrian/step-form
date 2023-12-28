import TextInput from "../atoms/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "../helpers/interfaces";
import Title from "../atoms/Title";
const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);
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
        className="grid grid-cols-2 my-9 gap-y-4 gap-x-10"
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
          label={"Email Adress"}
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
        {/* <button type="submit">AAAAAAAAA</button> */}
      </form>
    </div>
  );
};

export default PersonalInformation;

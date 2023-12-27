import TextInput from "../atoms/TextInput";
import { useForm } from "react-hook-form";
import { IFormValues } from "../helpers/interfaces";
const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">Personal Information</h1>
        <p>
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 my-6 gap-4"
      >
        <TextInput
          label={"Full Name"}
          type={"text"}
          register={register}
          required
          errors={errors}
        />
        {/* <input defaultValue="test" {...register("example")} /> */}
        <button type="submit">AAAAAAAAA</button>
        {/* <TextInput label={"Email Address"} name={"email"} type={"email"} />
        <TextInput label={"Phone Number"} name={"phone"} type={"text"} />
        <TextInput
          label={"Portfolio/Github Link"}
          name={"portfolio"}
          type={"text"}
        /> */}
      </form>
    </>
  );
};

export default PersonalInformation;

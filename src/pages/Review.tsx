import Title from "../atoms/Title";
import ReviewCard from "../atoms/ReviewCard";
import { IFormValues } from "../helpers/interfaces";
interface Props {
  personalData: IFormValues;
  buttonName: string;
  challengePreferences: string;
}
const Review = ({ personalData, buttonName, challengePreferences }: Props) => {
  return (
    <div>
      <Title
        label={"Review and Confirm"}
        subtitle={
          "Please review your information to make sure everything is accurate. "
        }
      />
      <div className="grid grid-cols-3 my-5 gap-y-4 gap-x-10">
        <ReviewCard title={"Full Name"} subtitle={personalData!.name} />
        <ReviewCard title={"Email Address"} subtitle={personalData!.email} />
        <ReviewCard title={"Phone Number"} subtitle={personalData!.phone} />
        <ReviewCard
          title={"Portfolio/Github"}
          subtitle={personalData!.portfolio}
        />
        <ReviewCard title={"Skill Level"} subtitle={buttonName} />
        <ReviewCard title={"Challenge"} subtitle={challengePreferences} />
      </div>
    </div>
  );
};

export default Review;

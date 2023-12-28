import Challenge from "../atoms/Challenge";
import Title from "../atoms/Title";
const ChallengePref = () => {
  return (
    <div>
      <Title
        label={"Challenge Preference"}
        subtitle={
          "Please tell us which frontend challenges you would like to participate in."
        }
      />
      <div className="grid grid-cols-2 my-5 gap-y-4 gap-x-10">
        <Challenge label={"HTML/CSS/JS"} name={"HTML/CSS/JS"} />
        <Challenge label={"ReactJS"} name={"ReactJS"} />
        <Challenge label={"VueJS"} name={"VueJS"} />
        <Challenge label={"AngularJS"} name={"AngularJS"} />
      </div>
    </div>
  );
};

export default ChallengePref;

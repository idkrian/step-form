import { ReactElement } from "react";

interface Props {
  title: string;
  subtitle: string | ReactElement[];
}

const ReviewCard = ({ title, subtitle }: Props) => {
  return (
    <div className="bg-lightGray rounded-xl p-4">
      <p className="text-grayText">{title}</p>
      <p className="font-semibold">{subtitle}</p>
    </div>
  );
};

export default ReviewCard;

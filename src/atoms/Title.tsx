interface Props {
  label: string;
  subtitle: string;
}

const Title = ({ label, subtitle }: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{label}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;

interface CertificationCardProps {
  title: string;
  date: string;
  issuer: string;
}

export const CertificationCard = ({
  title,
  date,
  issuer,
}: CertificationCardProps) => {
  return (
    <div className="mr-6 flex flex-col gap-2">
      <h3>{title}</h3>
      <div className="flex flex-col">
        <span>{issuer}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

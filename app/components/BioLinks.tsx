interface BioLink {
  label: string;
  href: string;
}

interface BioLinksProps {
  links: BioLink[];
}

const getDisplayText = (href: string) => {
  if (href.startsWith("mailto:")) return href.replace("mailto:", "");
  return href.replace(/^https?:\/\//, "");
};

export const BioLinks = ({ links }: BioLinksProps) => {
  return (
    <div className="flex flex-col gap-1">
      {links.map(({ label, href }) => (
        <a key={label} href={href} target="_blank" className="flex gap-2">
          <span className="font-semibold">{label}</span>
          <span className="text-gray-500">{getDisplayText(href)}</span>
        </a>
      ))}
    </div>
  );
};

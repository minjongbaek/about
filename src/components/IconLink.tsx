import GithubIcon from "@public/github.svg";
import RssIcon from "@public/rss.svg";
import LinkIcon from "@public/link.svg";
import type { PropsWithChildren } from "react";

type IconType = "rss" | "github" | "link";

const IconLink = ({
  type = "link",
  link,
  children,
}: { type?: IconType; link: string } & PropsWithChildren) => {
  return (
    <div className="flex items-center gap-2">
      <Icon type={type} />
      <a href={link} target="_blank" className="text-blue-500">
        {children}
      </a>
    </div>
  );
};

const Icon = ({ type }: { type: IconType }) => {
  switch (type) {
    case "github":
      return <GithubIcon />;
    case "rss":
      return <RssIcon />;
    default:
      return <LinkIcon />;
  }
};

export default IconLink;

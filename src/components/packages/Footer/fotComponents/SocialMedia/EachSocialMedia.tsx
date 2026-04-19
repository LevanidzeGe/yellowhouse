import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

interface EachSocialMediaProps {
  url: string;
  media: "facebook" | "instagram" | "tiktok";
}

export default function EachSocialMedia({ url, media }: EachSocialMediaProps) {
  const iconMap: { [key in EachSocialMediaProps["media"]]: JSX.Element } = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    tiktok: <FaTiktok />,
  };

  const IconComponent = iconMap[media];

  return <Link href={url}>{IconComponent}</Link>;
}

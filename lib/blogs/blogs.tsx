import { JSX } from "react";
import { TabletSmartphone, Monitor, Fingerprint, File } from "lucide-react";
export const blogs: { icon: JSX.Element, title: string, href: string, description: string}[] = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Desktop",
      href: "/blogs/desktop",
      description: "PCのプライバシー保護",
    },
    {
      icon: <TabletSmartphone className="h-6 w-6" />,
      title: "Mobile",
      href: "/blogs/mobile",
      description: "携帯電話のプライバシー保護",
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Anonimity",
      href: "/blogs/anonimity",
      description: "匿名性の向上",
    },
    {
      icon: <File className="h-6 w-6" />,
      title: "Others",
      href: "/blogs/other",
      description: "その他の情報",
    },
  ];
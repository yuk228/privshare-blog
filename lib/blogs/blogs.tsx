import { JSX } from "react";
import { TabletSmartphone, Monitor, Fingerprint, File } from "lucide-react";
export const blogs: { icon: JSX.Element, title: string, href: string, description: string}[] = [
    {
      icon: <TabletSmartphone className="h-6 w-6" />,
      title: "Mobile",
      href: "/blogs/iphone",
      description: "携帯電話のプライバシー保護",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Desktop",
      href: "/blogs/android",
      description: "PCのプライバシー保護",
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Anonimity",
      href: "/blogs/windows",
      description: "匿名性の向上",
    },
    {
      icon: <File className="h-6 w-6" />,
      title: "Others",
      href: "/blogs/other",
      description: "その他の情報",
    },
  ];
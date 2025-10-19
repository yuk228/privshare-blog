import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { BookOpen, LibraryBig, Menu, Lock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const CATEGORIES_LINKS = [
  {
    label: '全て',
    icon: <BookOpen className="w-5 h-5" />,
    href: '/articles',
  },
  {
    label: '匿名化・プライバシー',
    icon: <LibraryBig className="w-5 h-5" />,
    href: '/articles/categories/privacy',
  },
  {
    label: '暗号化',
    icon: <Lock className="w-5 h-5" />,
    href: '/articles/categories/encryption',
  },
  {
    label: 'その他',
    icon: <BookOpen className="w-5 h-5" />,
    href: '/articles/categories/other',
  },
]

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="px-6 py-6 border-b bg-muted">
          <SheetTitle className="text-2xl font-bold">PrivShare</SheetTitle>
          <p className="text-muted-foreground text-sm">
            匿名性に特化したプライバシーガイド
          </p>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <NavLink label="カテゴリー" links={CATEGORIES_LINKS} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

type NavLinkProps = {
  label: string
  links: {
    href: string
    icon: React.ReactNode
    label: string
  }[]
}

function NavLink({ label, links }: NavLinkProps) {
  return (
    <div className="px-4 py-6">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        {label}
      </h3>
      <nav className="flex flex-col gap-1">
        {links.map(link => (
          <Link
            href={link.href}
            key={link.href}
            className="group flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-[0.98]"
          >
            <span className="text-muted-foreground group-hover:text-accent-foreground transition-colors">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/layouts/theme-toggle'
import SignIn from '@/components/layouts/signin'
import { Button } from '@/components/ui/button'
import Sidebar from '@/components/layouts/sidebar'
import { auth } from '@/auth'

export default async function Header() {
  const session = await auth()
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Sidebar />
          </div>
          <Link
            href="/"
            className="text-xl font-bold hover:text-foreground/80 transition-colors"
          >
            PrivShare
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <SignIn />
          <ThemeToggle />
          {session?.user && (
            <Button asChild>
              <Link href="/articles/new">New Post</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

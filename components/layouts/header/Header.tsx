import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import HeaderBlogList from './HeaderBlogList'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default async function Header () {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="block font-bold text-xl transition-transform duration-300 ease-in-out transform hover:scale-105">PrivShare</Link>
          <div className="hidden md:flex mr-auto pl-5">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <HeaderBlogList />
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href="/about"><Button variant="ghost">About</Button></Link>
          </div>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30">
              <DropdownMenuLabel>Blogs</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/blogs/tags/mobile">Mobile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blogs/tags/desktop">Desktop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blogs/tags/anonimity">Anonimity</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blogs/tags/other">Others</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                  <Link href="/about">About</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

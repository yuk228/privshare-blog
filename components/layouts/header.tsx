import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/layouts/theme-toggle";
import SignIn from "@/components/layouts/signin";
import { Button } from "@/components/ui/button";
export default async function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold hover:text-foreground/80 transition-colors"
        >
          PrivShare
        </Link>
        <div className="flex items-center gap-2">
          <SignIn />
          <ThemeToggle />
          <Button asChild>
            <Link href="/new">New Post</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

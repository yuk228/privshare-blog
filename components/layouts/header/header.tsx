import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/layouts/header/theme-toggle";
import SignIn from "@/components/layouts/header/signin";
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
        </div>
      </div>
    </header>
  );
}

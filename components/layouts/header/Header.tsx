import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/layouts/header/theme-toggle";

export default async function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold hover:text-foreground/80 transition-colors"
        >
          PrivShare
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
